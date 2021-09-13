// eslint-disable-next-line no-use-before-define
import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index';
import Event from './Event';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addEvent = (e) => {
    e.preventDefault();
    dispatch(
      {
        type: 'CREATE_EVENT',
        title,
        body,
      },
    );

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除して良いですか？');
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' });
  };

  const unCreatable = title === '' || body === '';

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
      </form>
      <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
      <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {state.map((event: any, index: number) => (
            <Event key={index} event={event} dispatch={dispatch} />
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default App;
