// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

type DefaultProps = {
    name?: string;
    price?: number;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = (props: DefaultProps) => {
  // eslint-disable-next-line react/jsx-filename-extension
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <p>
        現在の
        {state.name}
        は、
        {state.price}
        です
      </p>
      <button type="button" onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button type="button" onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button type="button" onClick={() => setState(props)}>Reset</button>
      <input value={name} type="text" onChange={(e) => setState({ ...state, name: e.target.value })} />
    </>
  );
};

App.defaultProps = {
  name: 'サンプル',
  price: 1000,
};
export default App;
