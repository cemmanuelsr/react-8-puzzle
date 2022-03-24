import React from 'react';
import { useState } from 'react';
import styled from './Board.module.css';

import Tile from '../tile/Tile';

const Board = () => {

  const [table, setTable] = useState([[1, 2, 3], [8, 0, 4], [7, 6, 5]]);
  const [zeroRow, setZeroRow] = useState(1);
  const [zeroCol, setZeroCol] = useState(1);

  const handleKey = (event) => {
    event.preventDefault();

    if (event.key == 'ArrowUp' && zeroRow > 0) {
      const newRow = zeroRow - 1;
      const aux = table[zeroRow][zeroCol];
      table[zeroRow][zeroCol] = table[newRow][zeroCol];
      table[newRow][zeroCol] = aux;
      setZeroRow(newRow);
      setTable(table);
    }
    if (event.key == 'ArrowDown' && zeroRow < 2) {
      const newRow = zeroRow + 1;
      const aux = table[zeroRow][zeroCol];
      table[zeroRow][zeroCol] = table[newRow][zeroCol];
      table[newRow][zeroCol] = aux;
      setZeroRow(newRow);
      setTable(table);
    }
    if (event.key == 'ArrowRight' && zeroCol < 2) {
      const newCol = zeroCol + 1;
      const aux = table[zeroRow][zeroCol];
      table[zeroRow][zeroCol] = table[zeroRow][newCol];
      table[zeroRow][newCol] = aux;
      setZeroCol(newCol);
      setTable(table);
    }
    if (event.key == 'ArrowLeft' && zeroCol > 0) {
      const newCol = zeroCol - 1;
      const aux = table[zeroRow][zeroCol];
      table[zeroRow][zeroCol] = table[zeroRow][newCol];
      table[zeroRow][newCol] = aux;
      setZeroCol(newCol);
      setTable(table);
    }
    console.log(table);
  };

  return (
    <div className={styled.board} tabIndex="0" onKeyDown={(e) => handleKey(e)}>
      {table.map((row) => {
        return (
          <div className={styled.row}>
            {row.map((tile) => {
              return (
                <Tile value={tile} />
              )
            }
            )}
          </div>
        )
      }
      )}
    </div>
  );
}

export default Board;
