# Typed Data Interchange and Serialization Format - TDIF

**TDIF** is data interchange format, designed with type-safety in mind. TDIF's goal is to enhance developer experience and introduce type system inside DIFs. Syntax is designed to be as easy to read as it is to write.

_TDIF is in the early stage of development, contributions are welcome_

## comparasion to json

Just like JSON, TDIF has keys and values, but also introduces types and makes writing data easier than ever. TDIF libraries also make it easy to read and manipulate data, while also type checking and handling errors

```json
{
  "name": "john",
  "surname": "doe",
  "age": 24,
  "id": 1234
}
```

```ts
str name = "john"
str surname = "doe"
int age = 24
int id = 1234
```

## language support

We are planning to give TDIF support to the major languages such as javascript, rust, c/c++ or python. For documentation visit [`docs.md`](docs.md)

## extension

soon

## documentation

soon
