// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount((previousCount: number) => previousCount + 1);
  const decrement2 = () => setCount((previousCount: number) => previousCount - 1);
  const resetCount = () => setCount(0);
  const double = () => setCount((previousCount: number) => previousCount * 2);
  // eslint-disable-next-line max-len
  const divideThree = () => setCount(
    (prevCount: number) => (prevCount % 3 === 0 ? prevCount / 3 : prevCount),
  );
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div>
        count:
        {' '}
        {count}
      </div>
      <div>
        <button type="button" onClick={increment}>+1</button>
        <button type="button" onClick={decrement}>-1</button>
      </div>
      <div>
        <button type="button" onClick={increment2}>+1</button>
        <button type="button" onClick={decrement2}>-1</button>
      </div>
      <div>
        <button type="button" onClick={resetCount}>Reset</button>
        <button type="button" onClick={double}>x2</button>
        <button type="button" onClick={divideThree}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
