import React from 'react';
import { useState } from 'react';
import styled from './Board.module.css';

import Tile from '../tile/Tile';

const Board = (props) => {

  const [zeroRow, setZeroRow] = useState(1);
  const [zeroCol, setZeroCol] = useState(1);

  const handleKey = (event) => {
    event.preventDefault();

    if (event.key == 'ArrowUp' && zeroRow > 0) {
      const newRow = zeroRow - 1;
      const aux = props.table[zeroRow][zeroCol];
      props.table[zeroRow][zeroCol] = props.table[newRow][zeroCol];
      props.table[newRow][zeroCol] = aux;
      setZeroRow(newRow);
      props.setTable(props.table);
    }
    if (event.key == 'ArrowDown' && zeroRow < 2) {
      const newRow = zeroRow + 1;
      const aux = props.table[zeroRow][zeroCol];
      props.table[zeroRow][zeroCol] = props.table[newRow][zeroCol];
      props.table[newRow][zeroCol] = aux;
      setZeroRow(newRow);
      props.setTable(props.table);
    }
    if (event.key == 'ArrowRight' && zeroCol < 2) {
      const newCol = zeroCol + 1;
      const aux = props.table[zeroRow][zeroCol];
      props.table[zeroRow][zeroCol] = props.table[zeroRow][newCol];
      props.table[zeroRow][newCol] = aux;
      setZeroCol(newCol);
      props.setTable(props.table);
    }
    if (event.key == 'ArrowLeft' && zeroCol > 0) {
      const newCol = zeroCol - 1;
      const aux = props.table[zeroRow][zeroCol];
      props.table[zeroRow][zeroCol] = props.table[zeroRow][newCol];
      props.table[zeroRow][newCol] = aux;
      setZeroCol(newCol);
      props.setTable(props.table);
    }
    console.log(props.table);
  };

  return (
    <div className={styled.board} tabIndex="0" onKeyDown={(e) => handleKey(e)}>
      {props.table.map((row) => {
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
