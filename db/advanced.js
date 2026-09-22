// db/advanced.js

export const advancedQuestions = [
  {
    id: "a1",
    question: "What are WeakMap and WeakSet, and how do they impact Garbage Collection?",
    answer: "WeakMap and WeakSet hold weak references to their keys (which must be objects or non-registered symbols). Because the keys are held weakly, they do not prevent garbage collection if no other strong references to the object exist. Additionally, keys in WeakMap and WeakSet are non-enumerable, making them ideal for private data storage and memory leak mitigation.",
    sources: [
      {
        title: "MDN Web Docs - WeakMap",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"
      },
      {
        title: "javascript.info - WeakMap and WeakSet",
        url: "https://javascript.info/weakmap-weakset"
      }
    ]
  },
  {
    id: "a2",
    question: "How does the Proxy API work alongside Reflect in JavaScript?",
    answer: "A Proxy wraps a target object and intercepts fundamental operations (such as property lookup, assignment, enumeration, and function invocation) via internal traps. Reflect provides static methods corresponding 1:1 to these traps, ensuring default language behaviors, correct receiver context binding, and proper boolean return flags during property modifications.",
    sources: [
      {
        title: "MDN Web Docs - Proxy",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
      },
      {
        title: "MDN Web Docs - Reflect",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect"
      }
    ]
  },
  {
    id: "a3",
    question: "What are Generator functions and how do they enable cooperative multitasking?",
    answer: "Generator functions (`function*`) yield control back to the caller while preserving their internal execution state and scope. Calling a generator returns a Generator object with a `.next()` method. Execution pauses at each `yield` expression and resumes when `.next()` is reinvoked, allowing lazy evaluation, custom iteration protocols, and synchronous-style asynchronous flow control.",
    sources: [
      {
        title: "MDN Web Docs - function*",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"
      }
    ]
  }
];