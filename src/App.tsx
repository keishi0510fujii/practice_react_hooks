// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

type DefaultProps = {
    name?: string;
    price?: number;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = (props: DefaultProps) => {
  // eslint-disable-next-line react/jsx-filename-extension

  // eslint-disable-next-line react/destructuring-assignment
  const [name, setName] = useState(props.name);
  // eslint-disable-next-line react/destructuring-assignment
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <p>
        現在の
        {name}
        は、
        {price}
        です
      </p>
      <button type="button" onClick={() => setPrice(price + 1)}>+1</button>
      <button type="button" onClick={() => setPrice(price - 1)}>-1</button>
      <button type="button" onClick={reset}>Reset</button>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
};

App.defaultProps = {
  name: 'サンプル',
  price: 1000,
};
export default App;
