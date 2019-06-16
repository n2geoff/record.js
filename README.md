# Record.js

> A minimalistic object collection library

**Record.js** aims to provide a lite, *2kb*, *zero-dependency* collection utility to help build simple in-memory or local storage database of records.  Records are stored as plain arrays.

Records can be exported to JSON, with no internal metadata[*], so you can import your data anywhere; via `.dump()`

### Features

- Tiny, only 2kb
- Zero-Dependencies
- Saves to LocalStorage (if available)
- Data saved, and exported as simple JSON
- Browser or Nodejs compatible

### Why

Sometimes having a simple single-user data storage library that stays out of your way while you prototype out your ideas is all you need.  With a small footprint, removing/replacing a library like `record.js` is a breeze.  Ideally, using this to library to build out configuration files, mock out test data, or even develop simple applications is where this shines.  I use it for just that!  I often replace this library once an idea becomes soluble; I export the data to JSON to a real DB and expand.

## Getting Started

- [Download Library](https://raw.githubusercontent.com/n2geoff/record.js/master/dist/record.min.js), then...


create a new record collection (in-memory)

    const pets = new Record();

add something to the collection

    pets.add({"name": "Fluffy", "type": "cat"});
    // [{"id": "123fk91j7", "name": "Fluffy", "type": "cat"}]

an `id` field is auto-generated if not provided, this allows easy record retrieval via

    pets.find("123fk91j7");
    // [{"id": "123fk91j7", "name": "Fluffy", "type": "cat"}]

you can also find items via properties like

    pets.find({"type": "cat"});
    // [{"id": "123fk91j7", "name": "Fluffy", "type": "cat"}]

and when it comes time to update you can do that to

    var fluffy = pets.find({"name": "Fluffy"})[0]; // one record
    fluffy.age = 25;

    pets.update(fluffy);

and you can remove items via

    pets.remove("123fk91j7");
    // [{"id": "123fk91j7", "name": "Fluffy", "type": "cat"}]

so, no records, right?

    pets.find();
    // []

### API

The public API is very simple, you really only need 4 methods: `add`, `update`, `remove`, and `find`.

| Method | Description |
|---|---|
| `.add(object)`       | Adds entry to collection and returns entry(s) added |
| `.update(object)`    | Updates a record |
| `.remove(id or object)` | Removes entry(s) from collection and returns removed |
| `.find(id or object)`   | find all, find by id, or find by filter, returns array of entries |
| `.dump()`   | saves records to JSON file |

#### Length (Count Records)
As `Records` are just plain JavaScript Arrays, you can use `.length` to determine the number of results returned, for example:

```js
let cats = pets.find({"type": "cat"}); // []
cats.length;  // 0
```

> NOTICE: `find` is special, changes based on what you pass in, an id, an object, or nothing at all
- Additional [API Documentation](docs/api.md)

### Options

Records.js constructor supports a few options passed in as an `object`

- **store**: localStorage KEY to use. This actives localStorage if available
- **stores**: TBD
- **debug**: may logout useful information, maybe not;)
- **fields**: TBD

## Tests

    npm test

## Support

Please open [an issue](https://github.com/n2geoff/record.js/issues/new) for support.

## Contributing

Anyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md), there minimalistic;)

## License

[MIT](LICENSE)

---

> [*]: with exception of a generated ID, if not provided

## TODO

- make reactive, so just doing `fluffy.age = 25` updates
