import React, { useState } from 'react';
import './App.css';

import Board from './components/board/Board';
import Button from './components/button/Button';
import Footer from './components/footer/Footer';


function App() {
  const [table, setTable] = useState([[1, 2, 3], [8, 0, 4], [7, 6, 5]]);
  const [zeroRow, setZeroRow] = useState(1);
  const [zeroCol, setZeroCol] = useState(1);

  return (
    <div className="App" >
      <h1 className="title">8 Puzzle</h1>
      <p className="description">8 puzzle solver using A* Algorithm (click on table and control with WASD or Keys)</p>
      <Board table={table} setTable={setTable} zeroRow={zeroRow} zeroCol={zeroCol} setRow={setZeroRow} setCol={setZeroCol} />
      <Button icon={'play'} table={table} setTable={setTable} zeroRow={zeroRow} zeroCol={zeroCol} setRow={setZeroRow} setCol={setZeroCol} />
      <Footer />
    </div>
  );
}

export default App;
