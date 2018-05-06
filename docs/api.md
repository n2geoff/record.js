### Record.js API

-   [constructor][1]
-   [add][2]
-   [find][3]
-   [remove][4]
-   [count][5]

## constructor

**Parameters**

-   `opts` **[object][6]** 
    -   `opts.store` **[object][6]** localStorage ID to use
    -   `opts.debug` **[object][6]** show console logs
-   `init` **[array][7]** collection to start with

**Examples**

```javascript
// create a new record (in-memory)
let pets = new Record();
```

```javascript
// create a new record (localStorage)
let pets = new Record({"store": "pets"});
```

## add

Add record to collection creating an sudo unique id if
one not provided

**Parameters**

-   `entry` **[Object][6]** object(s) you want to store

**Examples**

```javascript
// add pet to collection
let dog = pets.add({"name": "Yonkers", "age": 5});
// > [{"id": "14rj345k9", "name": "Yonkers", "age": 5}]
```

Returns **[object][6]** entry added

## find

Finds records in collection by id or object filter.

**Parameters**

-   `key` **([string][8] \| [number][9])** (optional) by id, or object

**Examples**

```javascript
// find all
let all = collection.find();
```

```javascript
// find by id
let record = collection.find(1);
```

```javascript
// filter by object
let dogs = collection.find({"type": "dog"});
```

Returns **[array][7]** matching records

## remove

Remove record(s) from collection.  Leverages same functionality as `find`

**Parameters**

-   `entry` **any** (optional)

**Examples**

```javascript
// remove all records by type
let removed = collection.remove({"type": "cat"});
// > []
```

Returns **[array][7]** records removed

[1]: #constructor

[2]: #add

[3]: #find

[4]: #remove

[5]: #count

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
