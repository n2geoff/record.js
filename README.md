# Record.js

> A minimalistic object collection library

**Record.js** aims to provide a lite, *2kb*, *zero-dependency* collection utility to help build simple in-memory or local storage database of records.  Records are stored as plain arrays.

Records can be exported to JSON, with no internal metadata[*], so you can import your data anywhere; via `.dump()`

### Features

- Tiny, only 2kb
- Zero-Dependencies
- Saves to LocalStorage (if available)
- Data saved as simple JSON
- Browser or Nodejs compatible

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

and you can remove items via

    pets.remove("123fk91j7");
    // [{"id": "123fk91j7", "name": "Fluffy", "type": "cat"}]

so, no records, right?

    pets.find();
    // []

### API

The public API is very simple, you really only need 3 methods: `add`, `remove`, and `find`.

| Method | Description |
|---|---|
| `.add(object)`       | Adds entry to collection and returns entry(s) added |
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