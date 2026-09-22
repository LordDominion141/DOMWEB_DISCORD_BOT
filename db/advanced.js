export const advancedQuestions = [
  {
    id: "a1",
    question: "How do you sort arrays in JavaScript?",
    answer:
      "The `sort()` method sorts elements in an array in place and mutates the original array[cite: 1].\n\n" +
      "Sorting Strings[cite: 1]:\n" +
      "By default, `sort()` converts elements to strings and compares UTF-16 code units[cite: 1].\n" +
      "```javascript\n" +
      'const fruits = ["Banana", "Apple", "Mango"];\n' +
      "fruits.sort();\n" +
      'console.log(fruits); // Output: ["Apple", "Banana", "Mango"]\n' +
      "```\n\n" +
      "Sorting Numbers[cite: 1]:\n" +
      "Sorting numbers without a comparison function causes incorrect dictionary string sorting (e.g., `\"10\"` comes before `\"2\"`)[cite: 1]. Provide a compare function `(a, b) => a - b`[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10, 5, 20, 2];\n" +
      "// Ascending order\n" +
      "numbers.sort((a, b) => a - b);\n" +
      "console.log(numbers); // Output: [2, 5, 10, 20]\n\n" +
      "// Descending order\n" +
      "numbers.sort((a, b) => b - a);\n" +
      "console.log(numbers); // Output: [20, 10, 5, 2]\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Array Sort",
        url: "https://www.w3schools.com/js/js_array_sort.asp"
      },
      {
        title: "MDN - Array.prototype.sort()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
      }
    ]
  },
  {
    id: "a2",
    question: "What is array destructuring?",
    answer:
      "Array destructuring is a syntax that unpacks values from arrays directly into distinct variables[cite: 1].\n\n" +
      "Basic Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10, 20, 30];\n" +
      "const [a, b, c] = numbers;\n" +
      "console.log(a, b, c); // Output: 10 20 30\n" +
      "```\n\n" +
      "Skipping Values[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10, 20, 30];\n" +
      "const [first, , third] = numbers;\n" +
      "console.log(first, third); // Output: 10 30\n" +
      "```\n\n" +
      "Default Values[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10];\n" +
      "const [a, b = 20] = numbers;\n" +
      "console.log(a, b); // Output: 10 20\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Destructuring",
        url: "https://www.w3schools.com/js/js_destructuring.asp"
      },
      {
        title: "MDN - Destructuring assignment",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
      }
    ]
  },
  {
    id: "a3",
    question: "What are Sets?",
    answer:
      "A `Set` is a built-in collection of unique values[cite: 1]. Duplicate entries are automatically ignored[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = new Set([1, 2, 2, 3, 3]);\n" +
      "console.log(numbers); // Output: Set { 1, 2, 3 }\n" +
      "```\n\n" +
      "Common Methods[cite: 1]:\n" +
      "```javascript\n" +
      "const set = new Set();\n" +
      "set.add(10);\n" +
      "set.add(20);\n" +
      "console.log(set.has(10)); // Output: true\n" +
      "set.delete(20);\n" +
      "```\n\n" +
      "Convert Set to Array[cite: 1]:\n" +
      "```javascript\n" +
      "const arr = [...numbers];\n" +
      "```",
    sources: [
      {
        title: "W3Schools - JS Sets",
        url: "https://www.w3schools.com/js/js_sets.asp"
      },
      {
        title: "MDN - Set",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
      }
    ]
  },
  {
    id: "a4",
    question: "What are Maps?",
    answer:
      "A `Map` is a key-value collection that maintains insertion order[cite: 1]. Unlike objects, any value (including functions, objects, or primitive types) can be used as a key[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const users = new Map();\n" +
      'users.set(1, "Deepak");\n' +
      'users.set(2, "John");\n' +
      'console.log(users.get(1)); // Output: "Deepak"\n' +
      "```\n\n" +
      "Comparison: Map vs Object[cite: 1]:\n" +
      "| Feature | Map | Object |\n" +
      "| --- | --- | --- |\n" +
      "| Key Types | Any data type (objects, functions, numbers) | Strings or Symbols |\n" +
      "| Size | Built-in `.size` property | Manual computation using `Object.keys()` |\n" +
      "| Iteration | Directly iterable (`for...of`) | Requires key extraction |\n" +
      "| Use Case | High performance key-value lookups | Structure entity objects |",
    sources: [
      {
        title: "W3Schools - JS Maps",
        url: "https://www.w3schools.com/js/js_maps.asp"
      },
      {
        title: "MDN - Map",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
      }
    ]
  },
  {
    id: "a5",
    question: "What are Symbols?",
    answer:
      "`Symbol` is a primitive data type introduced in ES6 that guarantees unique identifiers[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      'const id1 = Symbol("id");\n' +
      'const id2 = Symbol("id");\n' +
      "console.log(id1 === id2); // Output: false\n" +
      "```\n\n" +
      "Using Symbols as Object Keys[cite: 1]:\n" +
      "```javascript\n" +
      'const id = Symbol("id");\n' +
      "const user = {\n" +
      '    name: "Deepak",\n' +
      "    [id]: 101\n" +
      "};\n" +
      "console.log(user[id]); // Output: 101\n" +
      "```\n\n" +
      "Common Use[cite: 1]: Symbols prevent property collisions when attaching internal metadata to objects or library tools[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Symbols",
        url: "https://www.w3schools.com/js/js_symbols.asp"
      },
      {
        title: "MDN - Symbol",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"
      }
    ]
  },
  {
    id: "a6",
    question: "What are generators?",
    answer:
      "Generators are functions that can pause execution midway and resume later[cite: 1]. They are defined using `function*` syntax and employ the `yield` keyword[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "function* numbers() {\n" +
      "    yield 1;\n" +
      "    yield 2;\n" +
      "    yield 3;\n" +
      "}\n" +
      "const generator = numbers();\n" +
      "console.log(generator.next()); // { value: 1, done: false }\n" +
      "console.log(generator.next()); // { value: 2, done: false }\n" +
      "console.log(generator.next()); // { value: 3, done: false }\n" +
      "console.log(generator.next()); // { value: undefined, done: true }\n" +
      "```\n\n" +
      "Key Mechanism[cite: 1]: Calling a generator function returns a Generator Object instead of immediately running the function body[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Function Generators",
        url: "https://www.w3schools.com/js/js_function_sequence.asp"
      },
      {
        title: "MDN - Generator",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"
      }
    ]
  },
  {
    id: "a7",
    question: "What are iterators?",
    answer:
      "An iterator is an object implementing the iterator protocol by defining a `next()` method[cite: 1]. Every call to `next()` returns an object with `{ value: any, done: boolean }`[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10, 20, 30];\n" +
      "const iterator = numbers[Symbol.iterator]();\n\n" +
      "console.log(iterator.next()); // { value: 10, done: false }\n" +
      "console.log(iterator.next()); // { value: 20, done: false }\n" +
      "console.log(iterator.next()); // { value: 30, done: false }\n" +
      "console.log(iterator.next()); // { value: undefined, done: true }\n" +
      "```\n\n" +
      "Iterables[cite: 1]: Objects containing `Symbol.iterator` (e.g., Arrays, Strings, Maps, Sets) can be looped over using `for...of` statements[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Iterables",
        url: "https://www.w3schools.com/js/js_iterables.asp"
      },
      {
        title: "MDN - Iteration protocols",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"
      }
    ]
  },
  {
    id: "a8",
    question: "What is destructuring assignment?",
    answer:
      "Destructuring assignment allows extracting array elements or object properties into distinct variables using matching assignment patterns[cite: 1].\n\n" +
      "Object Destructuring Example[cite: 1]:\n" +
      "```javascript\n" +
      "const user = {\n" +
      '    name: "Deepak",\n' +
      "    age: 25\n" +
      "};\n" +
      "const { name, age } = user;\n" +
      "```\n\n" +
      "Array Destructuring Example[cite: 1]:\n" +
      "```javascript\n" +
      "const numbers = [10, 20];\n" +
      "const [a, b] = numbers;\n" +
      "```\n\n" +
      "Benefits[cite: 1]: Reduces boilerplate code when unpacking API data payloads or function configuration objects[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Destructuring",
        url: "https://www.w3schools.com/js/js_destructuring.asp"
      },
      {
        title: "MDN - Destructuring assignment",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
      }
    ]
  },
  {
    id: "a9",
    question: "What is dynamic import?",
    answer:
      "Dynamic import allows JavaScript modules to be requested on demand asynchronously using `import(modulePath)` syntax[cite: 1]. It returns a Promise that resolves to the module namespace[cite: 1].\n\n" +
      "Example[cite: 1]:\n" +
      "```javascript\n" +
      "async function loadModule() {\n" +
      '    const module = await import("./math.js");\n' +
      "    console.log(module.add(10, 20));\n" +
      "}\n" +
      "```\n\n" +
      "Common Applications[cite: 1]: Code splitting, lazy loading route dependencies, conditional script loading, and reducing initial load performance overhead[cite: 1].",
    sources: [
      {
        title: "W3Schools - JS Modules",
        url: "https://www.w3schools.com/js/js_modules.asp"
      },
      {
        title: "MDN - dynamic import()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"
      }
    ]
  },
  {
    id: "a10",
    question: "What are ES6 modules?",
    answer:
      "ES6 modules are the standard architectural mechanism for splitting JavaScript applications into separate files[cite: 1]. They maintain explicit dependencies through `export` and `import` keywords[cite: 1].\n\n" +
      "Module Files Example[cite: 1]:\n" +
      "```javascript\n" +
      "// math.js\n" +
      "export function add(a, b) {\n" +
      "    return a + b;\n" +
      "}\n\n" +
      "// app.js\n" +
      'import { add } from "./math.js";\n' +
      "console.log(add(10, 20));\n" +
      "```\n\n" +
      "Primary Benefits[cite: 1]: Encapsulation, scope isolation, code organization, reusability, and elimination of global scope pollution[cite: 1].",
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
  }
];