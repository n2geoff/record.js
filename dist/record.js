/*! Record.js | MIT | https://github.com/n2geoff/record.js */
(function (root, factory) {
    "use strict";
    if (typeof module === "object" && module.exports) {
        module.exports = factory(root.Record);
    } else {
        root.Record = factory(root.Record);
    }

}(this, function () {
    "use strict";
    class Record {
        constructor(opts) {
            this.store = (opts || {}).store;
            this.debug = (opts || {}).debug || false;

            this.records = [];

            if(this.store && localStorage) {
                this._log("Initializing localStorage for " + this.store);

                let existing = this._load() || [];
                this.records = [...existing];
            }
        }

        _log() {
            if(this.debug) {
                console.log(...arguments);
            }
        }

        add(entry) {

            if (Array.isArray(entry)) {
                let entries = [];

                entry.forEach(() => {
                    if (!entry.id) {
                        entry.id = Math.random().toString(36).substr(2, 9);
                    }

                    this.records.push(entry);

                    this.entries.push(entry);
                });

                this._save();

                return entries;

            } else {
                if (!entry.id) {
                    entry.id = Math.random().toString(36).substr(2, 9);
                }

                this.records.push(entry);

                this._save();

                return entry;
            }
        }

        find(key) {

            if (!key) {
                return this.records;
            }

            if (typeof key === "string" || typeof key === "number") {
                return this.records.filter((record) => {
                    return record.id === key;
                });
            }

            let value = Object.keys(key);

            return this.records.filter((record) => {

                if(value.indexOf("id") !== -1) {
                    return record.id === key.id;
                }

                return value.every((val) => {
                    return record[val] === key[val];
                });
            });

        }

        remove(entry) {

            if (!entry || Array.isArray(entry)) {
                this._log(console.error("remove() accepts a single object"));
                return [];
            }

            let entries = this.find(entry);

            entries.forEach((item) => {
                this.records.splice(this.records.indexOf(item), 1);
            });

            this._save();

            return entries;
        }

        clear() {
            this.records = [];

            this._save();
        }

        count() {
            return this.records.length;
        }

        _save() {
            if (this.store && localStorage) {
                localStorage.setItem(this.store, JSON.stringify(this.records));
            }
        }

        _load() {
            if (this.store && localStorage) {
                return JSON.parse(localStorage.getItem(this.store)) || [];
            }
        }

        dump() {}
    }

    return Record;
}));
