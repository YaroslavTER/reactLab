import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <p>You clicked {counter} times</p>
    </div>
  );
}

function Counter(initialCounter) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      Count: {counter}
      <button onClick={() => setCounter(initialCounter)}>Reset</button>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </button>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        -
      </button>
    </>
  );
}
