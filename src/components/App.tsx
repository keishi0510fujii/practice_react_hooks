// eslint-disable-next-line no-use-before-define
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" />
        </div>
      </form>
      <button className="btn btn-primary">イベントを作成する</button>
      <button className="btn btn-danger">全てのイベントを削除する</button>

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
      </table>
    </div>

  </>
);

export default App;
