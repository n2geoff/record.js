const test = require("tape");
const Record = require("../src/record.js");

test("Record.js", function(t) {
    let pets;

    t.test("setup", function(t) {
        pets = new Record();

        t.ok(Record, "Record should exist");
        t.ok(pets, "new collection should have been created");
        t.end();
    });

    t.test("should add 3 records one-by-one", function(t) {
        t.ok(pets.add, "add method exists");

        let plato = pets.add({"name": "plato", "type": "dog"});
        let socrates = pets.add({"id": "1", "name": "socrates", "type": "dog"});
        let hypatia = pets.add({"name": "hypatia", "type": "cat"});

        t.equal(plato.name, "plato", "plato should have been added");
        t.equal(socrates.name, "socrates", "socrates should have been added");
        t.equal(hypatia.name, "hypatia", "hypatia should have been added");

        t.ok(plato.id, "platos record id should be auto-generated");
        t.equal(socrates.id, "1","socrates record id should not be auto-generated");

        t.end();
    });

    t.test("should be 3 records", function(t) {
        t.equal(pets.find().length, 3);
        t.end();
    });

    t.test("should find all matching records", function(t) {
        let dogs = pets.find({"type": "dog"});

        t.equal(dogs.length, 2, "should be 2 dogs in the house");
        t.equal(pets.find().length, 3, "but should still have 3 pets");

        t.end();
    });

    t.test("should be able to remove a record", function() {
        let hypatia = pets.remove({"name": "hypatia"});

        t.equal(hypatia[0].name, "hypatia", "hypatia should be removed");

        t.equal(pets.find().length, 2, "yes, hypatia has left the building");

        t.end();
    });

});