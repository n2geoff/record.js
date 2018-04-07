# Record.js

> A minimalistic dead-simple object collection library

Go kick the tires in [`dist/`](https://raw.githubusercontent.com/n2geoff/record.js/master/dist/record.min.js) 

## WIP

Not done yet!

## API

The public API is very simple, only really need 3 methods: `add`, `remove`, and `find`.

| Method | Description |
| --- | ---|
| `.add(object)`       | Adds entry to collection and return entry added              |
| `.remove(id|object)` | Removes entry(s) from collection and returns removed         |
| `.find(id|object)`   | find all, find by id, or find by filter, returns array of entries |
| `.count()`           | returns number of records in collection                      |

> SEE: [API Documentation](docs/api.md)

### Options
    - store: localStorage KEY to use. 

## Tests

    npm test

## Support

Please open [an issue](https://github.com/n2geoff/record.js/issues/new) for support.

## Contributing

Anyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md), there minimalistic;)

## License

[MIT](LICENSE)
