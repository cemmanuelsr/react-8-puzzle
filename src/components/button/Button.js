import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';

import styled from './Button.module.css';

const flat_matrix = (matrix) => {
  let flatten = '';
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j === matrix.length - 1 && i === matrix.length - 1) {
        flatten = flatten + matrix[i][j].toString();
      } else {
        flatten = flatten + matrix[i][j].toString() + ',';
      }
    }
  }

  return flatten;
}

const get_coords = (matrix, number) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] == number) {
        return [row, col];
      }
    }
  }
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve(table, walk_tiles, zero_row, zero_col, setTable, setRow, setCol, ms) {
  for (let i = 1; i < walk_tiles.length; i++) {
    if (ms > 0) {
      await sleep(ms);
    }
    let tile = walk_tiles[i];
    let [tile_row, tile_col] = get_coords(table, tile);

    let aux = table[zero_row][zero_col];
    table[zero_row][zero_col] = table[tile_row][tile_col];
    table[tile_row][tile_col] = aux;

    zero_row = tile_row;
    zero_col = tile_col;

    setRow(zero_row);
    setCol(zero_col);
    setTable(table);
  }
}

const Button = (props) => {

  const handleClick = (event) => {
    event.preventDefault();
    props.setTime(false);

    if (props.icon === 'play') {
      if (!props.loading) {
        props.setLoading(true);
        const flatten_table = flat_matrix(props.table);
        axios.get('https://cthl98.deta.dev/solve/BuscaGananciosa/EuclidianBetter', {
          params: { table: flatten_table }
        }).then((response) => {
          props.setLoading(false);
          const data = response.data;
          props.setMsg(`Solved in ${data.time} seconds`);
          props.setTime(true);
          const path = data.path;
          const walk_tiles = path.split(' ; 0 <--> ');
          let zero_row = props.zeroRow;
          let zero_col = props.zeroCol;

          solve(props.table, walk_tiles, zero_row, zero_col, props.setTable, props.setRow, props.setCol, 500);
        });
      };
    };

    if (props.icon === 'shuffle') {
      if (!props.loading) {
        props.setLoading(true);
        const flatten_table = flat_matrix(props.table);
        axios.get('https://cthl98.deta.dev/shuffle', {
          params: { table: flatten_table }
        }).then((response) => {
          props.setLoading(false);
          const data = response.data;
          const path = data.path;
          const walk_tiles = path.split(' ; 0 <--> ');
          let zero_row = props.zeroRow;
          let zero_col = props.zeroCol;

          solve(props.table, walk_tiles, zero_row, zero_col, props.setTable, props.setRow, props.setCol, 0);
        });
      };
    };
  }

  return (
    <div className={styled.btnDiv}>
      <button className={styled.btn} onClick={(e) => handleClick(e)}>
        {props.icon === 'play' && <PlayArrowIcon fontSize={'large'} />}
        {props.icon === 'shuffle' && <ShuffleIcon fontSize={'large'} />}
      </button>
    </div>
  );
}

export default Button;
