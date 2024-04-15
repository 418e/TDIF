# TDIF beta documentation

## syntax

```ts
type1 key1 = value1
type2 key2 = value2
type3 key3 = value3
```

## API

### read

`read` function, reads the `.tdif` file and returns `object` with data as a javascript object with other metadata like file `path`.

```ts
read(filePath);
```

```ts
import { read } from "tdif";

const file = read("file.tdif");
```

### edit

`edit` function, takes `object` returned from `read()`, name of the `key` you would like to edit and a `value`, and then edits the key inside the file.

```ts
edit(file, "key", "value");
```

```ts
import { read, edit } from "tdif";

const file = read("user.tdif");
edit(file, "name", "john");
```

## Type System

TDIF only has 8 types, all of which are listed below. The type system always checks if the types of the key and value align with each other and throws an error if something goes wrong, ensuring the type-safe development.

### Types

- `str`: javascript string type
- `int`: signed integer (0 and above)
- `unt`: unsigned integer (below 0)
- `float`: floating point number (non-whole numbers)
- `num`: javascript number type
- `bool`: javascript boolean type
- `true`: true
- `false`: false
