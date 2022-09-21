import * as React from 'react';
import './style.css';
import List from './List.jsx';
import List2 from './List2.jsx';

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
      <div className="List1">
        {/* {list && <List />} */}
        {list && <List2 />}
        <button onClick={deleteList} id="buttonDelete">
          Delete List
        </button>
        <button onClick={createList} id="buttonCreate">
          Craete List
        </button>
      </div>
    </div>
  );
}
