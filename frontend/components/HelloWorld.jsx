import { useState } from 'react';

const HelloWorld = (props) => {
  console.log('HelloWorld props', props);
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Counter <output>{count}</output>
      <p>testing 123</p>
      <p>testing 456</p>
    </button>
  );
};

export default HelloWorld;
