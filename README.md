# Penny Rounding

1. Create a function called “moneySplitter” that takes a decimal value called “total” as input.
2. Create a function to call from “moneySplitter” that splits “total” evenly into three decimal
variables, and rounds each result to the nearest two decimals. Return these three
decimal variables as a list or array.
3. Create another function to call from “moneySplitter” that validates that all list/array items
created by the previous function add up to the total value. If they do not add up, the
function should add/subtract a penny (.01) from each list/array item until the values
match the parent target value. Return the validated decimal variables as a list or array.
4. Print the result of both function calls in “moneySplitter.”
5. Write code to call moneySplitter with 800.0 as the argument.
6. BONUS: Add an extra parameter to moneySplitter called “count” that enables “total” to
be divided among “count” people.

### Test Suite
![Passing Tests](http://i.imgur.com/q7ttRAL.png)

I also created a moneySplitter(with-comments).js file with comments to explain my process. 
