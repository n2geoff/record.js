/* Record.js | MIT | https://github.com/n2geoff/record.js */
(function (root, factory) {
    "use strict";
    if (typeof module === "object" && module.exports) {
        module.exports = factory(root.Record);
    } else {
        root.Record = factory(root.Record);
    }

}(this, function () {
    "use strict";
    /*
    * Record.js
    *
    * A dead-simple object collection library
    */
    class Record {
        /**
         * @constructor
         *
         * @example
         * // create a new record (in-memory)
         * let pets = new Record();
         *
         * @param {array} init - collection to start with
         * @param {object} opts
         * @param {object} opts.store - localStorage ID to use
         * @param {object} opts.debug - show console logs
         */
        constructor(init, opts) {
            // define options
            this.store = (opts || {}).store;
            this.debug = (opts || {}).debug;

            // initialize the collection
            this.records = Array.isArray(init) ? init : [];
        }

        /**
         * Supresses logs based on this.debug value
         *
         * @private
         */
        _log() {
            if(!this.debug) {
                console.log(...arguments);
            }
        }

        /**
         * Add record to collection creating an sudo unique id if
         * one not provided
         *
         * @example
         * // add pet to collection
         * let dog = pets.add({"name": "Yonkers", "age": 5});
         * // > [{"id": "14rj345k9", "name": "Yonkers", "age": 5}]
         *
         * @param {Object} entry - object(s) you want to store
         * @returns {object} entry added
         */
        add(entry) {

            if (Array.isArray(entry)) {
                entry.forEach(() => {
                    if (!entry.id) {
                        entry.id = Math.random().toString(36).substr(2, 9);
                    }

                    this.records.push(entry);

                    return entry;
                });
            } else {
                if (!entry.id) {
                    entry.id = Math.random().toString(36).substr(2, 9);
                }

                this.records.push(entry);

                return entry;
            }
        }

        /**
         * Finds records in collection by id or object filter.
         *
         * @example
         * // find all
         * let all = collection.find();
         *
         * @example
         * // find by id
         * let record = collection.find(1);
         *
         * @example
         * // filter by object
         * let dogs = collection.find({"type": "dog"});
         *
         * @param {string|number} key - (optional) by id, or object
         * @returns {array} matching records
         */
        find(key) {

            // return all records
            if (!key) {
                return this.records;
            }

            // find by id
            if (typeof key === "string" || typeof key === "number") {
                return this.records.filter((record) => {
                    return record.id === key;
                });
            }

            // filter by
            let value = Object.keys(key);

            // filter records for value
            return this.records.filter((record) => {

                // id trumps all
                if(value.indexOf("id") !== -1) {
                    return record.id === key.id;
                }

                return value.every((val) => {
                    return record[val] === key[val];
                });
            });

        }

        /**
         * Remove record(s) from collection.  Leverages same functionality as `find`
         *
         * @example
         * // remove all records by type
         * let removed = collection.remove({"type": "cat"});
         * // > []
         *
         * @param {any} entry - (optional)
         *
         * @returns {array} records removed
         */
        remove(entry) {

            // use clear() to remove all
            if (!entry || Array.isArray(entry)) {
                this._log(console.error("remove() accepts a single object"));
                return [];
            }

            // find matching records
            let entries = this.find(entry);

            // remove all matching records
            entries.forEach((item) => {
                this.records.splice(this.records.indexOf(item), 1);
            });

            // return records removed
            return entries;
        }

        clear() {
            this.records = [];
        }

        /**
         * @returns {number} count of records in collection
         */
        count() {
            return this.records.length;
        }

        // save to localstorage
        save() {
            if (this.storage) {
                // check for localStorage
            }
        }

        dump() {}
    }

    return Record;
}));
