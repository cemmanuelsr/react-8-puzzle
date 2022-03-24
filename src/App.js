import React, { useState } from 'react';
import './App.css';

import Board from './components/board/Board';
import Button from './components/button/Button';


function App() {
  const [table, setTable] = useState([[1, 2, 3], [8, 0, 4], [7, 6, 5]]);

  return (
    <div className="App" >
      <h1 class="title">8 Puzzle</h1>
      <Board table={table} setTable={setTable} />
      <Button icon={'play'} table={table} />
    </div>
  );
}

export default App;
