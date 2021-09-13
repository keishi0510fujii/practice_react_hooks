// eslint-disable-next-line no-use-before-define
import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value="hello provider">
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
