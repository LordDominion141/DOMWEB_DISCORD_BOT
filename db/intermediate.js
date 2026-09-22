// db/intermediate.js

export const intermediateQuestions = [
  {
    id: "i1",
    question: "How does the JavaScript Event Loop work?",
    answer: "JavaScript relies on a single-threaded event loop architecture. Synchronous tasks run on the Call Stack. Asynchronous tasks delegate execution to Web/Node APIs, placing completed callbacks into the Microtask Queue (Promises, process.nextTick) or Macrotask Queue (setTimeout, setInterval, I/O). The Event Loop continuously clears the Call Stack, executing all pending Microtasks before processing the next Macrotask.",
    sources: [
      {
        title: "Node.js Docs - The JavaScript Event Loop",
        url: "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"
      },
      {
        title: "MDN Web Docs - Concurrency model and the event loop",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop"
      }
    ]
  },
  {
    id: "i2",
    question: "What is Prototypal Inheritance and how does the prototype chain work?",
    answer: "In JavaScript, objects possess a hidden internal property called [[Prototype]] (accessible via Object.getPrototypeOf or __proto__). When accessing a property on an object, JavaScript checks the object itself first. If missing, it traverses up the prototype chain until it finds the property or reaches null, enabling code reuse without classical class inheritance.",
    sources: [
      {
        title: "MDN Web Docs - Inheritance and the prototype chain",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
      }
    ]
  },
  {
    id: "i3",
    question: "What is the key difference between Promise.all() and Promise.allSettled()?",
    answer: "Promise.all() accepts an iterable of promises and rejects immediately upon the first rejected promise (short-circuiting). Promise.allSettled() waits for all promises to complete regardless of outcome, returning an array of objects describing the resolution status ('fulfilled' or 'rejected') and values for each.",
    sources: [
      {
        title: "MDN Web Docs - Promise.allSettled()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"
      }
    ]
  }
];