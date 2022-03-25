import React from 'react';
import { useState } from 'react';
import styled from './Board.module.css';

import Tile from '../tile/Tile';

const Board = (props) => {

  const handleKey = (event) => {
    event.preventDefault();

    if ((event.key == 'ArrowUp' || event.key == 'w') && props.zeroRow > 0) {
      const newRow = props.zeroRow - 1;
      const aux = props.table[props.zeroRow][props.zeroCol];
      props.table[props.zeroRow][props.zeroCol] = props.table[newRow][props.zeroCol];
      props.table[newRow][props.zeroCol] = aux;
      props.setRow(newRow);
      props.setTable(props.table);
    }
    if ((event.key == 'ArrowDown' || event.key == 's') && props.zeroRow < 2) {
      const newRow = props.zeroRow + 1;
      const aux = props.table[props.zeroRow][props.zeroCol];
      props.table[props.zeroRow][props.zeroCol] = props.table[newRow][props.zeroCol];
      props.table[newRow][props.zeroCol] = aux;
      props.setRow(newRow);
      props.setTable(props.table);
    }
    if ((event.key == 'ArrowRight' || event.key == 'd') && props.zeroCol < 2) {
      const newCol = props.zeroCol + 1;
      const aux = props.table[props.zeroRow][props.zeroCol];
      props.table[props.zeroRow][props.zeroCol] = props.table[props.zeroRow][newCol];
      props.table[props.zeroRow][newCol] = aux;
      props.setCol(newCol);
      props.setTable(props.table);
    }
    if ((event.key == 'ArrowLeft' || event.key == 'a') && props.zeroCol > 0) {
      const newCol = props.zeroCol - 1;
      const aux = props.table[props.zeroRow][props.zeroCol];
      props.table[props.zeroRow][props.zeroCol] = props.table[props.zeroRow][newCol];
      props.table[props.zeroRow][newCol] = aux;
      props.setCol(newCol);
      props.setTable(props.table);
    }
  };

  return (
    <div className={styled.board} tabIndex="0" onKeyDown={(e) => handleKey(e)}>
      {props.table.map((row) => {
        return (
          <div className={styled.row} key={row[0]}>
            {row.map((tile) => {
              return (
                <Tile value={tile} key={tile} />
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
