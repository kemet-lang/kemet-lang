---
sidebar_position: 0
---

# Data Types

## Introduction

Data types are the identity that every value carries in your program's world, and the nature that defines its essence and the boundaries of its capabilities.

Just as everything in existence has a category and characteristics that distinguish it from others, every piece of information in the computer's memory has a type that defines it and draws the boundaries of what it can and cannot do.

> A type is the binding contract between the program and memory, answering three fundamental questions:

- **How much space does this value need in memory?**

- **Which operations are permitted to be applied to it and which are forbidden?**

- **How are the stored bits interpreted and converted into understandable meaning?**

> A type protects a program from chaos and errors. It ensures that every operation runs on solid ground of meaning and logic, so letters are not added to numbers absurdly, texts are not divided by zeros foolishly, and a boolean value is not used in an arithmetic operation. It is the faithful guardian that prevents confusion and directs every value to its correct path, and alerts the programmer when attempting to use a value in a way that doesn't suit its nature.

---

:::note

These documents are currently incomplete. If you're interested, please visit these [documents on Github](https://github.com/kemet-lang/rules?tab=readme-ov-file#type).

:::

---

## Important Notes

In statically typed languages, the type of each variable is determined at its declaration and does not change throughout its lifetime - and this grants the program strength and safety.

The **Kemet** language follows the static typing system, which means that every variable must carry a clear type, either by explicit declaration or by inference from the initial value. This ensures safety and clarity in every line of the program.

### Additional Rules

- **Type Inference**: The compiler is capable of inferring the type from the initial value in many cases, but explicit declaration improves clarity.

  ```kemet
  let x       = 42; // cint
  let y : i64 = 42; // i64
  ```

- **Type Conversion**: Conversion between types must be explicit in most cases to avoid unintended data loss.

  ```kemet
  let x : i32 = 100;
  let y : i64 = x as i64; // explicit conversion
  let y : i64 = i64(x);   // another way to write the conversion syntax
  ```

- **Compatible Types**: Some types can be used interchangeably in certain contexts if they are compatible.

- **Type Size**: Every type has a specific size in memory, and it can be obtained using `sizeof(Type)`.

    ```kemet
    let size = sizeof i32;  // 4 bytes
    ```

---

## Conclusion

Data types in the Kemet language provide a powerful and flexible system for representing and controlling information. From simple primitive types to complex compound types, and from safe static types to flexible adaptable ones - every type has its place and purpose.

Understanding types and choosing them well forms a solid foundation for building correct and effective programs. The right type in the right place prevents errors before they occur, and makes the program's intent clear to everyone who reads the code.

---