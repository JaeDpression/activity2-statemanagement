// src/components/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  // Initialize the counter state
  const [count, setCount] = useState(0);

  // Handlers for increment, decrement, and reset
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
