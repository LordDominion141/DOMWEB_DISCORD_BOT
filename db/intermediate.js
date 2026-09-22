export const intermediateQuestions = [
  {
    id: "i1",
    question: "What is variable hoisting?",
    answer:
      "Hoisting is JavaScript's mechanism where variable and function declarations are put into memory during the compile phase prior to executing the code[cite: 1].\n\n" +
      "1. With `var`[cite: 1]:\n" +
      "`var` declarations are hoisted and initialized with `undefined`[cite: 1].\n" +
      "```javascript\n" +
      "console.log(x); // Output: undefined\n" +
      "var x = 10;\n" +
      "```\n\n" +
      "2. With `let` and `const`[cite: 1]:\n" +
      "`let` and `const` declarations are hoisted, but remain uninitialized inside the Temporal Dead Zone (TDZ)[cite: 1]. Accessing them before initialization throws a `ReferenceError`[cite: 1].\n" +
      "```javascript\n" +
      "console.log(y); // ReferenceError: Cannot access 'y' before initialization\n" +
      "let y = 10;\n" +
      "```\n\n" +
      "3. With Function Declarations[cite: 1]:\n" +
      "Entire function definitions are hoisted, allowing functions to be invoked before their declaration point in code[cite: 1].\n" +
      "```javascript\n" +
      "greet(); // Output: \"Hello\"\n" +
      "function greet() {\n" +
      '    console.log("Hello");\n' +
      "}\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Hoisting",
        url: "https://www.w3schools.com/js/js_hoisting.asp"
      },
      {
        title: "MDN - Hoisting",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
      }
    ]
  },
  {
    id: "i2",
    question: "What is scope in JavaScript?",
    answer:
      "Scope determines the visibility and accessibility of variables, objects, and functions across execution contexts in a program[cite: 1].\n\n" +
      "Example:\n" +
      "```javascript\n" +
      "function test() {\n" +
      '    let message = "Hello";\n' +
      "    console.log(message); // Accessible here\n" +
      "}\n" +
      "test();\n" +
      "// message is not accessible outside test()\n" +
      "```\n\n" +
      "Main Scope Levels[cite: 1]:\n" +
      "- Global Scope[cite: 1]\n" +
      "- Function Scope[cite: 1]\n" +
      "- Block Scope[cite: 1]\n" +
      "- Module Scope[cite: 1]",
    sources: [
      {
        title: "W3Schools - JS Scope",
        url: "https://www.w3schools.com/js/js_scope.asp"
      },
      {
        title: "MDN - Scope",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
      }
    ]
  },
  {
    id: "i3",
    question: "What are global, function, and block scope?",
    answer:
      "Scope rules dictate where variables live within a script[cite: 1]:\n\n" +
      "1. Global Scope[cite: 1]:\n" +
      "Variables declared outside any function or block exist in the global scope and are accessible anywhere in the application[cite: 1].\n" +
      "```javascript\n" +
      'let name = "Deepak";\n' +
      "function greet() {\n" +
      "    console.log(name); // Accessible inside function\n" +
      "}\n" +
      "```\n\n" +
      "2. Function Scope[cite: 1]:\n" +
      "Variables declared with `var`, `let`, or `const` inside a function are isolated to that function and cannot be accessed externally[cite: 1].\n" +
      "```javascript\n" +
      "function test() {\n" +
      "    var age = 25;\n" +
      "    console.log(age); // 25\n" +
      "}\n" +
      "// console.log(age); // ReferenceError\n" +
      "```\n\n" +
      "3. Block Scope[cite: 1]:\n" +
      "Introduced in ES6, variables declared with `let` and `const` inside a `{}` block (e.g., `if`, `for`, `while`) cannot be accessed outside that specific block[cite: 1].\n" +
      "```javascript\n" +
      "if (true) {\n" +
      "    let x = 10;\n" +
      "    const y = 20;\n" +
      "    console.log(x, y); // 10 20\n" +
      "}\n" +
      "// console.log(x); // ReferenceError\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Scope",
        url: "https://www.w3schools.com/js/js_scope.asp"
      },
      {
        title: "MDN - Block Scope",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Block_scope"
      }
    ]
  },
  {
    id: "i4",
    question: "What is strict mode (\"use strict\")?",
    answer:
      "`\"use strict\"` is a directive introduced in ES5 that enforces stricter parsing and error handling rules in JavaScript execution[cite: 1].\n\n" +
      "Example:\n" +
      "```javascript\n" +
      '"use strict";\n' +
      "x = 10; // ReferenceError: x is not defined (prevents accidental global variable creation)\n" +
      "```\n\n" +
      "Benefits[cite: 1]:\n" +
      "- Prevents accidental global variable creation[cite: 1].\n" +
      "- Converts silent runtime errors into thrown exceptions[cite: 1].\n" +
      "- Prohibits duplicate parameter names in functions.\n" +
      "- Disallows legacy syntax like `with` statements.\n" +
      "- Prepares code for future ECMAScript standards[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Strict Mode",
        url: "https://www.w3schools.com/js/js_strict.asp"
      },
      {
        title: "MDN - Strict mode",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"
      }
    ]
  },
  {
    id: "i5",
    question: "What are comments in JavaScript?",
    answer:
      "Comments are text annotations embedded within source code that are ignored during script execution[cite: 1]. They are used for documentation and disabling code segments[cite: 1].\n\n" +
      "Types[cite: 1]:\n" +
      "- Single-Line Comment (`//`)[cite: 1]\n" +
      "- Multi-Line Comment (`/* ... */`)[cite: 1]\n\n" +
      "Example:\n" +
      "```javascript\n" +
      "// This is a single-line comment\n" +
      'console.log("Hello");\n\n' +
      "/*\n" +
      "   This is a\n" +
      "   multi-line comment\n" +
      "*/\n" +
      'console.log("World");\n' +
      "```\n\n" +
      "Why Use Comments?[cite: 1]\n" +
      "- Explain complex algorithms and logic[cite: 1].\n" +
      "- Improve team readability and maintainability[cite: 1].\n" +
      "- Document APIs and architecture decisions[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Comments",
        url: "https://www.w3schools.com/js/js_comments.asp"
      },
      {
        title: "MDN - Grammar and types (Comments)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments"
      }
    ]
  },
  {
    id: "i6",
    question: "What are JavaScript modules?",
    answer:
      "JavaScript modules (ES Modules) allow programs to be divided into distinct, reusable, and encapsulated files[cite: 1]. Modules export functions, objects, or primitives, which are then imported by other modules[cite: 1].\n\n" +
      "Syntax Example:\n" +
      "```javascript\n" +
      "// Exporting (math.js)\n" +
      "export function add(a, b) {\n" +
      "    return a + b;\n" +
      "}\n\n" +
      "// Importing (app.js)\n" +
      'import { add } from "./math.js";\n' +
      "console.log(add(10, 20)); // Output: 30\n" +
      "```\n\n" +
      "Types of Exports[cite: 1]:\n" +
      "1. Named Exports: Multiple exports per file using `export { ... }`[cite: 1].\n" +
      "2. Default Export: Single fallback export per file using `export default`[cite: 1].\n\n" +
      "Default Export Example[cite: 1]:\n" +
      "```javascript\n" +
      "export default function greet() {\n" +
      '    console.log("Hello");\n' +
      "}\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Modules",
        url: "https://www.w3schools.com/js/js_modules.asp"
      },
      {
        title: "MDN - JavaScript modules",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
      }
    ]
  },
  {
    id: "i7",
    question: "What is a function?",
    answer:
      "A function is a reusable block of statements designed to perform a specific task when called[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "function greet() {\n" +
      '    console.log("Hello JavaScript");\n' +
      "}\n" +
      "greet(); // Output: Hello JavaScript\n" +
      "```\n\n" +
      "Benefits[cite: 1]:\n" +
      "- High code reusability[cite: 1].\n" +
      "- Improved organization and abstraction[cite: 1].\n" +
      "- Simplified testing and debugging[cite: 1].\n" +
      "- Elimination of redundant code[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Functions",
        url: "https://www.w3schools.com/js/js_functions.asp"
      },
      {
        title: "MDN - Functions",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
      }
    ]
  },
  {
    id: "i8",
    question: "What is a function expression?",
    answer:
      "A function expression defines a function assigned directly to a variable[cite: 1]. Function expressions can be named or anonymous[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const greet = function() {\n" +
      '    console.log("Hello");\n' +
      "};\n" +
      "greet();\n" +
      "```\n\n" +
      "Key Difference from Function Declarations[cite: 1]:\n" +
      "Function expressions are not hoisted with their definition[cite: 1]. Calling them before declaration results in a `ReferenceError` or `TypeError`[cite: 1].\n\n" +
      "```javascript\n" +
      "greet(); // ReferenceError: Cannot access 'greet' before initialization\n" +
      "const greet = function() {\n" +
      '    console.log("Hello");\n' +
      "};\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Function Definitions",
        url: "https://www.w3schools.com/js/js_function_definition.asp"
      },
      {
        title: "MDN - Function expression",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function"
      }
    ]
  },
  {
    id: "i9",
    question: "What are arrow functions?",
    answer:
      "Introduced in ES6, arrow functions provide a concise syntax for writing functions[cite: 1].\n\n" +
      "Syntax Progression[cite: 1]:\n" +
      "```javascript\n" +
      "// Traditional Function\n" +
      "function add(a, b) {\n" +
      "    return a + b;\n" +
      "}\n\n" +
      "// Arrow Function\n" +
      "const add = (a, b) => {\n" +
      "    return a + b;\n" +
      "};\n\n" +
      "// Implicit Return Short Form\n" +
      "const add = (a, b) => a + b;\n" +
      "```\n\n" +
      "Important Interview Point[cite: 1]: Arrow functions do not bind their own `this`, `arguments`, `super`, or `new.target`[cite: 1]. They inherit `this` lexically from the enclosing scope[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Arrow Function",
        url: "https://www.w3schools.com/js/js_arrow_function.asp"
      },
      {
        title: "MDN - Arrow function expressions",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
      }
    ]
  },
  {
    id: "i10",
    question: "What is an IIFE?",
    answer:
      "IIFE stands for Immediately Invoked Function Expression[cite: 1]. It is a design pattern where a function runs immediately as soon as it is defined[cite: 1].\n\n" +
      "Syntax & Example[cite: 1]:\n" +
      "```javascript\n" +
      "(function() {\n" +
      '    console.log("Executed immediately");\n' +
      "})();\n" +
      "// Output: Executed immediately\n" +
      "```\n\n" +
      "Common Uses[cite: 1]:\n" +
      "- Creating private variable scopes to prevent polluting the global namespace[cite: 1].\n" +
      "- Executing immediate initialization routines[cite: 1].\n" +
      "- Module creation patterns in pre-ES6 code environments.",
    sources: [
      {
        title: "W3Schools - JS Function Invocation",
        url: "https://www.w3schools.com/js/js_function_invocation.asp"
      },
      {
        title: "MDN - IIFE",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/IIFE"
      }
    ]
  },
  {
    id: "i11",
    question: "What are callback functions?",
    answer:
      "A callback is a function passed as an argument into another function, intended to be executed inside that function[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "function greet(name, callback) {\n" +
      '    console.log("Hello " + name);\n' +
      "    callback();\n" +
      "}\n" +
      "function completed() {\n" +
      '    console.log("Completed!");\n' +
      "}\n" +
      'greet("Mayur", completed);\n' +
      "// Output:\n" +
      "// Hello Mayur\n" +
      "// Completed!\n" +
      "```\n\n" +
      "Common Uses[cite: 1]:\n" +
      "- Asynchronous operations (e.g., `setTimeout`, `fetch` requests)[cite: 1].\n" +
      "- DOM Event handling (`addEventListener`)[cite: 1].\n" +
      "- Iterative array methods (`map`, `filter`, `forEach`)[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Callbacks",
        url: "https://www.w3schools.com/js/js_callback.asp"
      },
      {
        title: "MDN - Callback function",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"
      }
    ]
  },
  {
    id: "i12",
    question: "What are higher-order functions?",
    answer:
      "A Higher-Order Function (HOF) is a function that either takes one or more functions as arguments or returns a function[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "function calculate(a, b, operation) {\n" +
      "    return operation(a, b);\n" +
      "}\n" +
      "const add = (x, y) => x + y;\n" +
      "console.log(calculate(10, 20, add)); // Output: 30\n" +
      "```\n\n" +
      "Common Built-in Higher-Order Functions[cite: 1]:\n" +
      "- `Array.prototype.map()`[cite: 1]\n" +
      "- `Array.prototype.filter()`[cite: 1]\n" +
      "- `Array.prototype.reduce()`[cite: 1]\n" +
      "- `Array.prototype.forEach()`[cite: 1]",
    sources: [
      {
        title: "W3Schools - JS Higher Order Functions",
        url: "https://www.w3schools.com/js/js_array_iteration.asp"
      },
      {
        title: "MDN - First-class Functions",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function"
      }
    ]
  },
  {
    id: "i13",
    question: "What are closures?",
    answer:
      "A closure is formed when an inner function retains lexical access to variables in its outer enclosing function scope, even after the outer function execution has completed[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "function counter() {\n" +
      "    let count = 0;\n" +
      "    return function() {\n" +
      "        count++;\n" +
      "        return count;\n" +
      "    };\n" +
      "}\n" +
      "const increment = counter();\n" +
      "console.log(increment()); // Output: 1\n" +
      "console.log(increment()); // Output: 2\n" +
      "```\n\n" +
      "Common Applications[cite: 1]:\n" +
      "- Data encapsulation and private state management[cite: 1].\n" +
      "- Function currying and partial application.\n" +
      "- Memoization caching strategies[cite: 1].\n" +
      "- Event handlers preserving local variables[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Closures",
        url: "https://www.w3schools.com/js/js_function_closures.asp"
      },
      {
        title: "MDN - Closures",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
      }
    ]
  },
  {
    id: "i14",
    question: "What is lexical scope?",
    answer:
      "Lexical scope (static scope) means that variable access resolution is determined strictly by the physical position of code at compile time[cite: 1]. Outer variables are available to nested functions inside[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      'const name = "Deepak";\n' +
      "function outer() {\n" +
      '    const message = "Hello";\n' +
      "    function inner() {\n" +
      "        console.log(message, name); // Accesses parent and global scope\n" +
      "    }\n" +
      "    inner();\n" +
      "}\n" +
      "outer(); // Output: Hello Deepak\n" +
      "```\n\n" +
      "Key Principle[cite: 1]: JavaScript scope lookup climbs upward through the scope chain from inner to outer contexts based on where functions were written, not where they are executed[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Scope",
        url: "https://www.w3schools.com/js/js_scope.asp"
      },
      {
        title: "MDN - Lexical Scoping",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#lexical_scoping"
      }
    ]
  },
  {
    id: "i15",
    question: "What is the this keyword?",
    answer:
      "The `this` keyword references the context object on which a function is invoked[cite: 1]. Its binding value depends on the execution call context[cite: 1].\n\n" +
      "1. Method Context[cite: 1]: `this` refers to the object calling the method[cite: 1].\n" +
      "```javascript\n" +
      "const person = {\n" +
      '    name: "Deepak",\n' +
      "    greet() {\n" +
      "        console.log(this.name);\n" +
      "    }\n" +
      "};\n" +
      "person.greet(); // Output: Deepak\n" +
      "```\n\n" +
      "2. Global Context: In non-strict mode, calling a standalone function points `this` to `window` (or `global`). In strict mode, `this` is `undefined`.\n\n" +
      "3. Arrow Functions[cite: 1]: Arrow functions do not define their own `this`; they inherit `this` lexically from their enclosing parent scope[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS The this Keyword",
        url: "https://www.w3schools.com/js/js_this.asp"
      },
      {
        title: "MDN - this operator",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
      }
    ]
  },
  {
    id: "i16",
    question: "What are object literals?",
    answer:
      "An object literal is a comma-separated list of key-value pairs wrapped in curly braces (`{}`)[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const person = {\n" +
      '    name: "Sumit",\n' +
      "    age: 26,\n" +
      '    city: "Jaipur",\n' +
      "    greet() {\n" +
      '        console.log("Hello " + this.name);\n' +
      "    }\n" +
      "};\n" +
      "```\n\n" +
      "Property Access Syntax[cite: 1]:\n" +
      "- Dot Notation: `console.log(person.name);`[cite: 1]\n" +
      "- Bracket Notation: `console.log(person[\"age\"]);`[cite: 1]",
    sources: [
      {
        title: "W3Schools - JS Objects",
        url: "https://www.w3schools.com/js/js_objects.asp"
      },
      {
        title: "MDN - Working with Objects",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"
      }
    ]
  },
  {
    id: "i17",
    question: "How do arrays work in JavaScript?",
    answer:
      "An array is an ordered list of zero or more indexed elements[cite: 1]. In JavaScript, arrays are dynamic, zero-indexed objects capable of holding heterogenous data types[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      'const items = ["Apple", 25, true];\n' +
      "console.log(items[0]);     // Output: Apple\n" +
      "console.log(items.length);  // Output: 3\n" +
      "```\n\n" +
      "Key Features[cite: 1]:\n" +
      "- Zero-indexed (`0` to `length - 1`)[cite: 1].\n" +
      "- Dynamically resized automatically on insertion or deletion[cite: 1].\n" +
      "- Inherit methods from `Array.prototype`.\n" +
      "- Internal data structures are specialized objects with integer keys[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Arrays",
        url: "https://www.w3schools.com/js/js_arrays.asp"
      },
      {
        title: "MDN - Array",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
      }
    ]
  },
  {
    id: "i18",
    question: "What is the difference between map() and forEach()?",
    answer:
      "Both methods iterate through array elements, but serve different purposes[cite: 1]:\n\n" +
      "`map()`[cite: 1]:\n" +
      "- Transforms elements and returns a brand-new array[cite: 1].\n" +
      "- Pure functional design; allows chaining (`.map().filter()`)[cite: 1].\n" +
      "```javascript\n" +
      "const numbers = [1, 2, 3];\n" +
      "const doubled = numbers.map(num => num * 2); // [2, 4, 6]\n" +
      "```\n\n" +
      "`forEach()`[cite: 1]:\n" +
      "- Executes side-effects for each element and returns `undefined`[cite: 1].\n" +
      "- Cannot be chained directly[cite: 1].\n" +
      "```javascript\n" +
      "numbers.forEach(num => console.log(num * 2));\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Array Iteration",
        url: "https://www.w3schools.com/js/js_array_iteration.asp"
      },
      {
        title: "MDN - Array.prototype.map()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
      }
    ]
  },
  {
    id: "i19",
    question: "What is filter()?",
    answer:
      "`filter()` iterates through an array and produces a new array containing all elements that evaluate to `true` against a testing condition function[cite: 1]. The original array is untouched[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [1, 2, 3, 4, 5];\n" +
      "const evenNumbers = numbers.filter(num => num % 2 === 0);\n" +
      "console.log(evenNumbers); // Output: [2, 4]\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Array Filter",
        url: "https://www.w3schools.com/js/js_array_iteration.asp#1"
      },
      {
        title: "MDN - Array.prototype.filter()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
      }
    ]
  },
  {
    id: "i20",
    question: "What is reduce()?",
    answer:
      "`reduce()` runs a user-supplied reducer callback function on each element of the array in order, passing in the return value from the calculation on the preceding element[cite: 1]. It reduces the array down to a single output value[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10, 20, 30];\n" +
      "const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);\n" +
      "console.log(total); // Output: 60\n" +
      "```\n\n" +
      "Common Applications[cite: 1]: Accumulating numeric sums, flattening nested arrays, grouping collections by properties, and counting instances[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Array Reduce",
        url: "https://www.w3schools.com/js/js_array_iteration.asp#2"
      },
      {
        title: "MDN - Array.prototype.reduce()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
      }
    ]
  },
  {
    id: "i21",
    question: "What is find()?",
    answer:
      "`find()` returns the first element in an array that satisfies a provided testing condition[cite: 1]. If no elements satisfy the condition, it returns `undefined`[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10, 20, 30, 40];\n" +
      "const result = numbers.find(num => num > 20);\n" +
      "console.log(result); // Output: 30\n" +
      "```\n\n" +
      "Comparison[cite: 1]: `find()` returns the single matching element value[cite: 1], while `filter()` returns an array containing all matching elements[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Array Find",
        url: "https://www.w3schools.com/js/js_array_iteration.asp#3"
      },
      {
        title: "MDN - Array.prototype.find()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
      }
    ]
  },
  {
    id: "i22",
    question: "What is findIndex()?",
    answer:
      "`findIndex()` returns the index position of the first element in an array that satisfies a testing condition[cite: 1]. If no matching elements are found, it returns `-1`[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10, 20, 30, 40];\n" +
      "const index = numbers.findIndex(num => num > 20);\n" +
      "console.log(index); // Output: 2\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Array findIndex",
        url: "https://www.w3schools.com/js/js_array_iteration.asp#4"
      },
      {
        title: "MDN - Array.prototype.findIndex()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
      }
    ]
  },
  {
    id: "i23",
    question: "What is some()?",
    answer:
      "`some()` tests whether at least one element in the array passes the condition implemented by the provided function[cite: 1]. It returns a boolean value (`true`/`false`)[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [1, 3, 5, 8];\n" +
      "const result = numbers.some(num => num % 2 === 0);\n" +
      "console.log(result); // Output: true\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Array Iteration (some)",
        url: "https://www.w3schools.com/js/js_array_iteration.asp#5"
      },
      {
        title: "MDN - Array.prototype.some()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
      }
    ]
  },
  {
    id: "i24",
    question: "What is every()?",
    answer:
      "`every()` tests whether all elements in the array pass the condition implemented by the provided function[cite: 1]. It returns `true` only if every element passes, and `false` otherwise[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [2, 4, 6, 8];\n" +
      "const result = numbers.every(num => num % 2 === 0);\n" +
      "console.log(result); // Output: true\n" +
      "```\n\n" +
      "Quick Reference[cite: 1]: `some()` requires at least one match[cite: 1]; `every()` requires every element to match[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Array Iteration (every)",
        url: "https://www.w3schools.com/js/js_array_iteration.asp#6"
      },
      {
        title: "MDN - Array.prototype.every()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
      }
    ]
  },
  {
    id: "i25",
    question: "What is the difference between slice() and splice()?",
    answer:
      "`slice()` and `splice()` handle array extraction and mutation differently[cite: 1]:\n\n" +
      "`slice(start, end)`[cite: 1]:\n" +
      "- Extracts a copy of a section of an array[cite: 1].\n" +
      "- Non-mutating: Original array remains unchanged[cite: 1].\n" +
      "- Returns a shallow copy containing extracted elements[cite: 1].\n" +
      "```javascript\n" +
      "const numbers = [1, 2, 3, 4, 5];\n" +
      "const result = numbers.slice(1, 4);\n" +
      "console.log(result);  // Output: [2, 3, 4]\n" +
      "console.log(numbers); // Output: [1, 2, 3, 4, 5]\n" +
      "```\n\n" +
      "`splice(start, deleteCount, item1, item2, ...)`[cite: 1]:\n" +
      "- Adds, removes, or replaces elements directly in an array[cite: 1].\n" +
      "- Mutating: Modifies the original array in place[cite: 1].\n" +
      "- Returns an array of deleted elements[cite: 1].\n" +
      "```javascript\n" +
      "const numbers = [1, 2, 3, 4, 5];\n" +
      "const deleted = numbers.splice(1, 2); // Removes 2 elements starting at index 1\n" +
      "console.log(deleted); // Output: [2, 3]\n" +
      "console.log(numbers); // Output: [1, 4, 5]\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Array Methods",
        url: "https://www.w3schools.com/js/js_array_methods.asp"
      },
      {
        title: "MDN - Array.prototype.splice()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
      }
    ]
  },
  {
    id: "i26",
    question: "What are push(), pop(), shift(), and unshift()?",
    answer:
      "These methods mutate array boundaries by adding or removing elements[cite: 1]:\n\n" +
      "- `push()`: Appends elements to the END of an array[cite: 1]. Returns new array length.\n" +
      "- `pop()`: Removes the last element from the END of an array[cite: 1]. Returns removed element.\n" +
      "- `unshift()`: Inserts elements at the START of an array[cite: 1]. Returns new array length.\n" +
      "- `shift()`: Removes the first element from the START of an array[cite: 1]. Returns removed element.\n\n" +
      "Memory Trick[cite: 1]:\n" +
      "- Push/Pop modify the END of the array[cite: 1].\n" +
      "- Unshift/Shift modify the START of the array[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Array Methods",
        url: "https://www.w3schools.com/js/js_array_methods.asp"
      },
      {
        title: "MDN - Array Methods",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
      }
    ]
  }
];