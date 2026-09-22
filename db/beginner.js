export const beginnerQuestions = [
  {
    id: "b1",
    question: "What is the difference between var, let, and const in JavaScript?",
    answer: "var is function-scoped and hoisted with an initial value of undefined. let and const are block-scoped ({}) and exist in a Temporal Dead Zone (TDZ) prior to initialization. Re-declaration is allowed with var, but not with let or const. Additionally, const prevents variable reassignment, whereas let permits reassignment.",
    sources: [
      {
        title: "MDN - let",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"
      },
      {
        title: "MDN - Grammar and types: Variable scope",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope"
      }
    ]
  },
  {
    id: "b2",
    question: "What are JavaScript primitives and how do they differ from objects?",
    answer: "A primitive value is immutable and passed by value. JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Objects are mutable collections of properties, stored as references in memory, and passed by reference.",
    sources: [
      {
        title: "MDN - JavaScript data types and data structures",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
      }
    ]
  },
  {
    id: "b3",
    question: "What is the difference between double equals (==) and triple equals (===)?",
    answer: "The loose equality operator (==) performs abstract type coercion prior to comparison if the operands are of different types. The strict equality operator (===) performs strict comparison without type coercion; if the types differ, it immediately evaluates to false.",
    sources: [
      {
        title: "MDN - Equality comparisons and sameness",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
      }
    ]
  },
  {
    id: "b4",
    question: "What does NaN represent and how do you test for it?",
    answer: "NaN stands for 'Not-a-Number', representing an invalid mathematical calculation or non-numeric result. It is unique because NaN === NaN evaluates to false. To accurately check if a value is NaN without implicit type coercion, use Number.isNaN(val) rather than global isNaN(val).",
    sources: [
      {
        title: "MDN - Number.isNaN()",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"
      }
    ]
  }
];