# JavaScript Loose Typing Bug

This repository demonstrates a common error in JavaScript related to its loose typing system.  When adding a number and a string, JavaScript performs string concatenation instead of numeric addition, leading to unexpected results.

## Bug Description
The `foo` function attempts to add two values. However, due to JavaScript's dynamic typing, if one of the inputs is a string, the '+' operator performs string concatenation, resulting in unexpected output. 

## Solution
The solution involves type checking before performing the addition or converting the inputs to numbers using `parseInt` or `Number`.