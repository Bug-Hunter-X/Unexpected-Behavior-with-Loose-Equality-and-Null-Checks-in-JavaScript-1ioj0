# Unexpected Behavior with Loose Equality and Null Checks

This repository demonstrates a common JavaScript bug caused by the misuse of loose equality (`==`) when checking for `null` values.  The `foo` function is intended to add two numbers, but it incorrectly handles `null` inputs, returning 0 even when only one input is `null`. This is due to the loose equality comparison, which treats `null == 0` as true.

The solution demonstrates how to properly handle `null` checks using strict equality (`===`) to prevent such unexpected behavior.

## Bug
The `bug.js` file demonstrates the unexpected behavior caused by the loose equality check.

## Solution
The `bugSolution.js` file provides a corrected version of the function using strict equality to accurately handle `null` inputs.