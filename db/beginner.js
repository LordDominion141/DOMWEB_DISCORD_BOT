export const beginnerQuestions = [
  {
    id: "b1",
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted (or JIT-compiled) programming language used to create interactive and dynamic web pages[cite: 1]. It runs natively in web browsers and can also be used for backend development using environments like Node.js[cite: 1].\n\n" +
      "Common Uses:\n" +
      "- Interactive websites[cite: 1]\n" +
      "- Form validation[cite: 1]\n" +
      "- Animations and visual effects[cite: 1]\n" +
      "- API calls and asynchronous network interactions[cite: 1]\n" +
      "- Web applications[cite: 1]\n" +
      "- Backend development via Node.js[cite: 1]\n\n" +
      "Example:\n" +
      "```javascript\n" +
      'console.log("Hello JavaScript"); // Output: "Hello JavaScript"\n' +
      "```",
    sources: [
      {
        title: "W3Schools - JS Introduction",
        url: "https://www.w3schools.com/js/js_intro.asp"
      },
      {
        title: "MDN - What is JavaScript?",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
      }
    ]
  },
  {
    id: "b2",
    question: "What are the different data types in JavaScript?",
    answer:
      "JavaScript is a dynamically typed language, and its data types are broadly categorized into two types: Primitive and Non-Primitive (Reference) types[cite: 1].\n\n" +
      "1. Primitive Data Types (stored by value)[cite: 1]:\n" +
      "- String: Represents textual data[cite: 1].\n" +
      "- Number: Represents both integer and floating-point numbers[cite: 1].\n" +
      "- Boolean: Represents logical values (`true` or `false`)[cite: 1].\n" +
      "- Undefined: Represents an uninitialized variable[cite: 1].\n" +
      "- Null: Represents an intentional empty or non-existent value[cite: 1].\n" +
      "- BigInt: Represents integers of arbitrary precision beyond the standard Number limit[cite: 1].\n" +
      "- Symbol: Represents a unique and immutable value used as identifier keys[cite: 1].\n\n" +
      "2. Non-Primitive / Reference Data Types (stored by reference)[cite: 1]:\n" +
      "- Object: Key-value collections[cite: 1].\n" +
      "- Array: Ordered list of values[cite: 1].\n" +
      "- Function: Executable code blocks[cite: 1].\n\n" +
      "Example:\n" +
      "```javascript\n" +
      'let name = "Deepak";   // String\n' +
      "let age = 25;          // Number\n" +
      "let isActive = true;   // Boolean\n" +
      "let data = null;       // Null\n" +
      "let value;             // Undefined\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Data Types",
        url: "https://www.w3schools.com/js/js_datatypes.asp"
      },
      {
        title: "MDN - JavaScript Data Structures",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
      }
    ]
  },
  {
    id: "b3",
    question: "What is the difference between var, let, and const?",
    answer:
      "The differences among `var`, `let`, and `const` lie in scope, re-assignability, re-declarability, and hoisting behaviors[cite: 1]:\n\n" +
      "- Scope: `var` is function-scoped, whereas `let` and `const` are block-scoped[cite: 1].\n" +
      "- Reassignability: Variables declared with `var` and `let` can be reassigned[cite: 1]. Variables declared with `const` cannot be reassigned once initialized[cite: 1].\n" +
      "- Redeclaration: `var` allows re-declaration within the same scope[cite: 1]. `let` and `const` throw a SyntaxError if re-declared within the same scope[cite: 1].\n" +
      "- Hoisting: `var` is hoisted and initialized with `undefined`[cite: 1]. `let` and `const` are hoisted into the Temporal Dead Zone (TDZ) and cannot be accessed prior to declaration[cite: 1].\n\n" +
      "Feature Comparison Table[cite: 1]:\n" +
      "| Feature | var | let | const |\n" +
      "| --- | --- | --- | --- |\n" +
      "| Scope | Function | Block | Block |\n" +
      "| Reassign | Yes | Yes | No |\n" +
      "| Redeclare | Yes | No | No |\n" +
      "| Hoisted | Yes | Yes (TDZ) | Yes (TDZ) |\n\n" +
      "Example:\n" +
      "```javascript\n" +
      "var a = 10;\n" +
      "let b = 20;\n" +
      "const c = 30;\n" +
      "```\n\n" +
      "Interview Tip[cite: 1]: Use `const` by default, `let` when you know the variable value needs to change, and avoid `var` in modern ES6+ code[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Let",
        url: "https://www.w3schools.com/js/js_let.asp"
      },
      {
        title: "W3Schools - JS Const",
        url: "https://www.w3schools.com/js/js_const.asp"
      },
      {
        title: "MDN - let statement",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"
      }
    ]
  },
  {
    id: "b4",
    question: "What are primitive and non-primitive data types?",
    answer:
      "JavaScript distinguishes between primitive and non-primitive types by how they are saved and manipulated in memory[cite: 1]:\n\n" +
      "Primitive Data Types[cite: 1]:\n" +
      "- Stored directly by value in stack memory[cite: 1].\n" +
      "- Immutable (values cannot be modified directly; operations produce new values)[cite: 1].\n" +
      "- Examples: String, Number, Boolean, Null, Undefined, BigInt, Symbol[cite: 1].\n\n" +
      "Primitive Memory Copy Example:\n" +
      "```javascript\n" +
      "let a = 10;\n" +
      "let b = a;\n" +
      "b = 20;\n" +
      "console.log(a); // 10 (a remains unchanged because primitive copies the actual value)\n" +
      "```\n\n" +
      "Non-Primitive (Reference) Data Types[cite: 1]:\n" +
      "- Stored by reference in heap memory[cite: 1]. Variables hold a memory pointer/reference rather than the object itself[cite: 1].\n" +
      "- Mutable (properties and elements can be modified without changing the reference binding)[cite: 1].\n" +
      "- Examples: Objects, Arrays, Functions[cite: 1].\n\n" +
      "Reference Memory Sharing Example:\n" +
      "```javascript\n" +
      'const obj1 = { name: "John" };\n' +
      "const obj2 = obj1; // Copies the memory reference\n" +
      'obj2.name = "Mike";\n' +
      'console.log(obj1.name); // "Mike" (Modifying obj2 mutates the underlying object in memory)\n' +
      "```",
    sources: [
      {
        title: "W3Schools - JS Data Types",
        url: "https://www.w3schools.com/js/js_datatypes.asp"
      },
      {
        title: "MDN - Value vs Reference Types",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values"
      }
    ]
  },
  {
    id: "b5",
    question: "What is type coercion?",
    answer:
      "Type coercion is JavaScript's automatic or manual conversion of a value from one data type to another during operations or comparisons[cite: 1].\n\n" +
      "Types of Coercion[cite: 1]:\n" +
      "1. Implicit Coercion: Handled automatically by JavaScript runtime based on mathematical and logical contexts[cite: 1].\n" +
      "   - Addition operator (`+`) with a string performs string concatenation[cite: 1].\n" +
      "   - Subtraction (`-`), multiplication (`*`), or division (`/`) forces string values to convert into numbers[cite: 1].\n" +
      "2. Explicit Coercion: Performed manually by developers using built-in constructors or helper methods (`Number()`, `String()`, `Boolean()`)[cite: 1].\n\n" +
      "Implicit Coercion Example[cite: 1]:\n" +
      "```javascript\n" +
      'console.log("5" + 2); // "52" (Number 2 is coerced to string "2")\n' +
      'console.log("5" - 2); // 3 (String "5" is coerced to number 5)\n' +
      "```\n\n" +
      "Explicit Coercion Example[cite: 1]:\n" +
      "```javascript\n" +
      'Number("10"); // 10\n' +
      'String(100);  // "100"\n' +
      "Boolean(1);   // true\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Type Conversion",
        url: "https://www.w3schools.com/js/js_type_conversion.asp"
      },
      {
        title: "MDN - Type Coercion",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion"
      }
    ]
  },
  {
    id: "b6",
    question: "What is the difference between == and ===?",
    answer:
      "The equality operators in JavaScript perform comparison with or without type coercion[cite: 1]:\n\n" +
      "`==` (Loose Equality)[cite: 1]:\n" +
      "- Compares only values after applying implicit type coercion if the operand types differ[cite: 1].\n" +
      "- Example: `5 == \"5\"` evaluates to `true` because string `\"5\"` is coerced to number `5` before comparison[cite: 1].\n\n" +
      "`===` (Strict Equality)[cite: 1]:\n" +
      "- Compares both value and data type without performing any type conversion[cite: 1].\n" +
      "- Example: `5 === \"5\"` evaluates to `false` because one operand is a number and the other is a string[cite: 1].\n\n" +
      "Code Demonstration:\n" +
      "```javascript\n" +
      'console.log(5 == "5");   // true\n' +
      'console.log(5 === "5");  // false\n' +
      "console.log(null == undefined);  // true\n" +
      "console.log(null === undefined); // false\n" +
      "```\n\n" +
      "Best Practice[cite: 1]: Always prefer strict equality (`===`) to avoid silent bugs caused by coercion rules[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Comparisons",
        url: "https://www.w3schools.com/js/js_comparisons.asp"
      },
      {
        title: "MDN - Equality comparisons and sameness",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
      }
    ]
  },
  {
    id: "b7",
    question: "What are truthy and falsy values?",
    answer:
      "In JavaScript, every value has an inherent boolean representation when evaluated inside conditional statements or logical contexts[cite: 1].\n\n" +
      "Falsy Values[cite: 1]:\n" +
      "JavaScript has exactly 8 falsy values that evaluate to `false`[cite: 1]:\n" +
      "- `false`[cite: 1]\n" +
      "- `0`[cite: 1]\n" +
      "- `-0`[cite: 1]\n" +
      "- `0n` (BigInt zero)[cite: 1]\n" +
      "- `\"\"` (empty string)[cite: 1]\n" +
      "- `null`[cite: 1]\n" +
      "- `undefined`[cite: 1]\n" +
      "- `NaN`[cite: 1]\n\n" +
      "Truthy Values[cite: 1]:\n" +
      "All values not explicitly in the falsy list evaluate to `true` in conditional checks[cite: 1].\n" +
      "Examples: Non-empty strings (`\"Hello\"`, `\"false\"`), non-zero numbers (`1`, `-10`), empty arrays (`[]`), empty objects (`{}`), and functions[cite: 1].\n\n" +
      "Example:\n" +
      "```javascript\n" +
      'if ("Hello") {\n' +
      '    console.log("Truthy"); // Executes\n' +
      "}\n" +
      "if (0) {\n" +
      '    console.log("Won\'t execute"); // Skipped\n' +
      "}\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Booleans",
        url: "https://www.w3schools.com/js/js_booleans.asp"
      },
      {
        title: "MDN - Falsy",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Falsy"
      }
    ]
  },
  {
    id: "b8",
    question: "What is undefined?",
    answer:
      "`undefined` is a primitive value and type automatically assigned by JavaScript to variables that have been declared but not yet initialized with a value[cite: 1].\n\n" +
      "Key Characteristics:\n" +
      "- Indicates absence of value assignment[cite: 1].\n" +
      "- Automatically returned by functions that lack an explicit `return` statement.\n" +
      "- Value of missing properties on objects or unassigned array indexes.\n\n" +
      "Example:\n" +
      "```javascript\n" +
      "let value;\n" +
      "console.log(value); // Output: undefined\n" +
      "console.log(typeof value); // Output: \"undefined\"\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Data Types",
        url: "https://www.w3schools.com/js/js_datatypes.asp"
      },
      {
        title: "MDN - undefined",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"
      }
    ]
  },
  {
    id: "b9",
    question: "What is null?",
    answer:
      "`null` is a primitive data type that represents an intentional absence of any object value or reference[cite: 1]. It is explicitly assigned by developers to reset or clear object bindings[cite: 1].\n\n" +
      "Difference between null and undefined[cite: 1]:\n" +
      "- `undefined`: Represents a variable that has been declared but unassigned (assigned automatically by JavaScript)[cite: 1].\n" +
      "- `null`: Represents a variable explicitly set to be empty or non-existent by the programmer[cite: 1].\n\n" +
      "Example:\n" +
      "```javascript\n" +
      "let user = null;\n" +
      "console.log(user); // Output: null\n" +
      "console.log(typeof user); // Output: \"object\" (known historic bug/quirk in JS)\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Data Types",
        url: "https://www.w3schools.com/js/js_datatypes.asp"
      },
      {
        title: "MDN - null",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"
      }
    ]
  },
  {
    id: "b10",
    question: "What is NaN?",
    answer:
      "`NaN` stands for 'Not a Number'[cite: 1]. It is a special numeric property representing an invalid or undefined arithmetic result[cite: 1].\n\n" +
      "Common Triggers:\n" +
      "- Performing invalid mathematical operations (e.g., dividing a string by a number or `Math.sqrt(-1)`)[cite: 1].\n" +
      "- Failed numeric parsing (e.g., `Number(\"abc\")`).\n\n" +
      "Example:\n" +
      "```javascript\n" +
      'console.log("Hello" / 2); // Output: NaN\n' +
      "```\n\n" +
      "Checking for NaN[cite: 1]:\n" +
      "`NaN` is unique because it is the only value in JavaScript not equal to itself (`NaN === NaN` is `false`). Therefore, `Number.isNaN()` should be used[cite: 1].\n" +
      "```javascript\n" +
      "console.log(Number.isNaN(NaN)); // true\n" +
      "```\n\n" +
      "Interview Tip[cite: 1]: Although `NaN` means 'Not a Number', its data type is officially numeric[cite: 1]:\n" +
      "```javascript\n" +
      "console.log(typeof NaN); // Output: \"number\"\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Numbers",
        url: "https://www.w3schools.com/js/js_numbers.asp"
      },
      {
        title: "MDN - NaN",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"
      }
    ]
  },
  {
    id: "b11",
    question: "What is the typeof operator?",
    answer:
      "The `typeof` unary operator returns a string indicating the evaluated data type of an operand[cite: 1].\n\n" +
      "Example:\n" +
      "```javascript\n" +
      'console.log(typeof "Hello");   // "string"\n' +
      'console.log(typeof 100);       // "number"\n' +
      'console.log(typeof true);      // "boolean"\n' +
      'console.log(typeof undefined); // "undefined"\n' +
      'console.log(typeof 10n);       // "bigint"\n' +
      'console.log(typeof Symbol());  // "symbol"\n' +
      'console.log(typeof {});        // "object"\n' +
      "```\n\n" +
      "Important Interview Quirks[cite: 1]:\n" +
      "```javascript\n" +
      "console.log(typeof null); // Output: \"object\"\n" +
      "```\n" +
      "This is a legacy bug from the initial implementation of JavaScript in 1995, where values were stored with type tags. The type tag for objects was `0`, and `null` was represented as the null pointer (`0x00`), causing `typeof null` to return `\"object\"`[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Typeof",
        url: "https://www.w3schools.com/js/js_typeof.asp"
      },
      {
        title: "MDN - typeof",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"
      }
    ]
  },
  {
    id: "b12",
    question: "What are template literals?",
    answer:
      "Template literals are string literals introduced in ES6 enclosed by backtick (`` ` ``) characters instead of single or double quotes[cite: 1]. They enable string interpolation, multi-line formatting, and embedded expressions[cite: 1].\n\n" +
      "Key Benefits[cite: 1]:\n" +
      "1. Variable & Expression Interpolation: Embedded via `${expression}` placeholders[cite: 1].\n" +
      "2. Multi-line Strings: Clean multi-line strings without needing `\\n` concatenation[cite: 1].\n" +
      "3. Tagged Template Literals: Ability to parse templates with custom functions.\n\n" +
      "Example:\n" +
      "```javascript\n" +
      'const name = "Ajay";\n' +
      "const age = 25;\n\n" +
      "console.log(`My name is ${name} and I am ${age} years old.`);\n" +
      "// Output: My name is Ajay and I am 25 years old.\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Template Literals",
        url: "https://www.w3schools.com/js/js_string_templates.asp"
      },
      {
        title: "MDN - Template literals",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
      }
    ]
  },
  {
    id: "b13",
    question: "What are JavaScript operators?",
    answer:
      "Operators are special symbols used to manipulate variables and values[cite: 1].\n\n" +
      "Common Categories[cite: 1]:\n" +
      "- Arithmetic Operators: Perform calculations (`+`, `-`, `*`, `/`, `%`, `**` exponentiation)[cite: 1].\n" +
      "- Comparison Operators: Compare two values (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`)[cite: 1].\n" +
      "- Logical Operators: Perform logical evaluations (`&&` AND, `||` OR, `!` NOT)[cite: 1].\n" +
      "- Assignment Operators: Assign values to variables (`=`, `+=`, `-=`, `*=`, `/=`)[cite: 1].\n\n" +
      "Example:\n" +
      "```javascript\n" +
      "const a = 10;\n" +
      "const b = 5;\n" +
      "console.log(a + b); // Output: 15\n" +
      "console.log(a > b);  // Output: true\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Operators",
        url: "https://www.w3schools.com/js/js_operators.asp"
      },
      {
        title: "MDN - Expressions and operators",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators"
      }
    ]
  },
  {
    id: "b14",
    question: "What is the ternary operator?",
    answer:
      "The ternary operator is a conditional operator taking three operands, serving as a concise syntax for `if...else` statements[cite: 1].\n\n" +
      "Syntax[cite: 1]:\n" +
      "`condition ? valueIfTrue : valueIfFalse;`[cite: 1]\n\n" +
      "Example:\n" +
      "```javascript\n" +
      "const age = 20;\n" +
      'const result = age >= 18 ? "Adult" : "Minor";\n' +
      "console.log(result); // Output: Adult\n" +
      "```\n\n" +
      "Equivalent standard if...else statement[cite: 1]:\n" +
      "```javascript\n" +
      "let result;\n" +
      "if (age >= 18) {\n" +
      '    result = "Adult";\n' +
      "} else {\n" +
      '    result = "Minor";\n' +
      "}\n" +
      "```\n\n" +
      "Interview Tip[cite: 1]: Use ternary operators for inline evaluation and assignment. Avoid deeply nesting ternary statements as it drastically reduces code readability[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Comparisons (Ternary)",
        url: "https://www.w3schools.com/js/js_comparisons.asp"
      },
      {
        title: "MDN - Conditional (ternary) operator",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator"
      }
    ]
  }
];