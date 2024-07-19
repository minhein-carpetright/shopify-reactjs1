import { useState } from 'react';

const HelloWorld = (props) => {
  console.log('HelloWorld props', props);
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Counter <output>{count}</output>
      <p>This is reactjs code</p>
    </button>
  );
};

export default HelloWorld;
