import * as React from 'react';
import './style.css';
import List from './List.jsx';

export default function App() {
  const [list, setList] = React.useState(false);

  const deleteList = () => {
    setList(false);
  };

  const createList = () => {
    setList(true);
  };
  return (
    <div>
      {list && <List />}
      <button onClick={deleteList}>Delete List</button>
      <button onClick={createList}>Craete List</button>
    </div>
  );
}
