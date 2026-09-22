# js-basic-training

My study notebook for JavaScript fundamentals.

Each file is a note, not a program: a short description of what I learned,
followed by the code I wrote while learning it. Snippets from different study
sessions sit side by side in the same file, so a note is meant to be read, not
executed.

I write the code by hand in a scratch file first, and move it here once I
understand it.

The repo is split in two: `notes/` studies a piece of the language, and
`exercises/` solves a problem with it.

## Notes

### Array methods

Each of these compares the manual `for` version with the method version.

| Note | |
|---|---|
| [Mapping an array of objects into a new array](notes/array-methods/map.md) | `map` |
| [Filtering an array of objects by a condition](notes/array-methods/filter.md) | `filter` |
| [Searching for a product by id](notes/array-methods/find.md) | `find` |
| [Summing all prices with an accumulator](notes/array-methods/reduce.md) | `reduce` |
| [Checking if one or all items match a condition](notes/array-methods/some-and-every.md) | `some`, `every` |

### Destructuring

| Note | |
|---|---|
| [Destructuring arrays, objects and function parameters](notes/destructuring/array-destructuring.md) | arrays, objects, rest, swapping |

### Objects

| Note | |
|---|---|
| [Declaring an array of objects](notes/objects/object-array.md) | the base data used by the array method notes |

### Output

| Note | |
|---|---|
| [Four ways to show output in the browser](notes/outputs/outputs.md) | `innerHTML`, `document.write`, `alert`, `console.log` |

## Exercises

### Variables and conditionals

| Exercise | |
|---|---|
| [Checking if a number is even or odd](exercises/variables/even-or-odd.md) | `if` / `else`, modulo |
| [Checking if a number is a multiple of 3 or 5](exercises/variables/fizz-buzz.md) | chained `else if` |
| [Converting a numeric grade into a letter](exercises/variables/grade-converter.md) | chained `else if` |
| [Finding the largest of three values](exercises/variables/largest-of-three.md) | comparison operators |
| [Calculating BMI and classifying the result](exercises/variables/bmi.md) | arithmetic, ranges |

### Functions

| Exercise | |
|---|---|
| [Summing the values of an array](exercises/functions/sum-array.md) | `for`, accumulator |
| [Reversing a string with a loop](exercises/functions/reverse-string.md) | reverse iteration |
| [Counting the vowels in a word](exercises/functions/count-vowels.md) | nested loops |
| [Filtering the even numbers from an array](exercises/functions/filter-even.md) | `push` |
| [Finding the largest value in an array](exercises/functions/find-largest-value.md) | function vs arrow function |
| [Building FizzBuzz from 1 to 100 with a function](exercises/functions/fizz-buzz.md) | `return` |
