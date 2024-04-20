# Genus Format

Genus Format is a data interchange and serialization format designed with type-safety in mind. It aims to enhance developer experience by introducing a type system inside Data Interchange Formats (DIFs). The syntax is designed to be easy to read and write.

## Features

- **Type-Safe**: Introduces a type system to ensure data integrity and safety.
- **Easy to Read and Write**: Designed for simplicity and ease of use.
- **Developer-Friendly**: Aims to improve the developer experience with error handling mechanisms.

## Installation

```bash
npm install genus-format
```

## Examples

```
obj user
    str name = "john"
    str surname = "doe"
    int age = 24
    str[] emails = ["jonhdoe@example.com"]
int file_id = 1234
int[] list = [1, 2, 3, 4]
```

## License

Genus Format is licensed under the GPL-2.0 license. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please open an issue on GitHub.
