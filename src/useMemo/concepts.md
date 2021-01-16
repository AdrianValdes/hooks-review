# useMemo

1. useMemo invokes a function to calculate a memoized value. In computer science in general, memoization is a technique that’s used to improve performance. In a memoized function, the result of a function call is saved and cached. Then, when the function is called again with the same inputs, the cached value is returned. In React, useMemo allows us to compare the cached value against itself to see if it has actually changed.

2. The way useMemo works is that we pass it a function that’s used to
   calculate and create a memoized value. useMemo will only recalculate
   that value when one of the dependencies has changed.
