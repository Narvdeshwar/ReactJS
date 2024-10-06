# Counter Increment Example in React

## Problem: State Updates Not Working as Expected

In React, when you attempt to update the state multiple times within the same render cycle, React will batch those updates. As a result, the following code only increments the counter by 1, even though setCounter is called multiple times:

```js
const increment = () => {
  if (counter < 20) {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  } else {
    alert("Counter value can't exceed 20");
  }
};
```

## Explanation:

React batches state updates for performance reasons. In the example above, although setCounter(counter + 1) is called five times, React treats them as a single update. This is because each update relies on the stale value of counter, which hasn't been updated yet by React when the next setCounter is called. Thus, the counter only increments by 1.

### Solution: Using a Functional Update

To increment the counter five times in the same function, you need to pass a function to setCounter that takes the previous state and returns the updated state. This ensures that each state update uses the most recent value.

Here's the correct approach:

```js
const increment = () => {
  if (counter < 20) {
    setCounter((previous) => previous + 1); // +1
    setCounter((previous) => previous + 1); // +2
    setCounter((previous) => previous + 1); // +3
    setCounter((previous) => previous + 1); // +4
    setCounter((previous) => previous + 1); // +5
  } else {
    alert("Counter value can't exceed 20");
  }
};
```

## Why It Works

In this version, the updater function (previous => previous + 1) ensures that React uses the most up-to-date counter value after each state update. Therefore, the counter increments by 5 as expected.
