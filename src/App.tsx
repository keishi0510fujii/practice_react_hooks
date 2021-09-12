// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';

type DefaultProps = {
    name?: string;
    price?: number;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = (props: DefaultProps) => {
  // eslint-disable-next-line react/jsx-filename-extension
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.');
  });

  useEffect(() => {
    console.log('This is like componentDidMount.');
  }, []);

  useEffect(() => {
    console.log('This callback is for name only.');
  }, [name]);

  const renderPeriod = () => {
    console.log('renderPeriod renders period.');
    return '.';
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
