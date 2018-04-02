### Record.JS

-   [constructor][1]
-   [add][2]
-   [find][3]
-   [remove][4]
-   [count][5]

## constructor

**Parameters**

-   `init` **[array][6]** collection to start with
-   `opts` **[object][7]** 
    -   `opts.store` **[object][7]** localStorage ID to use
    -   `opts.debug` **[object][7]** show console logs

**Examples**

```javascript
// create a new record (in-memory)
let pets = new Record();
```

## add

Add record to collection creating an sudo unique id if 
one not provided

**Parameters**

-   `entry` **[Object][7]** object(s) you want to store

**Examples**

```javascript
// add pet to collection
let dog = pets.add({"name": "Yonkers", "age": 5});

// [{"id": "14rj345k9", "name": "Yonkers", "age": 5}]
```

Returns **[array][6]** record added

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

Returns **[array][6]** matching records

## remove

-   **See: [find][10]**

Remove record(s) from collection.  Leverages same functionality as `find`

**Parameters**

-   `entry` **any** (optional)

**Examples**

```javascript
// remove all records by type
let removed = collection.remove({"type": "cat"});
```

Returns **[array][6]** records removed

## count

Returns **[number][9]** count of records in collection

[1]: #constructor

[2]: #add

[3]: #find

[4]: #remove

[5]: #count
