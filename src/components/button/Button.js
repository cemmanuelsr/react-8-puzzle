import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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

const Button = (props) => {

  const [running, setRunning] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (!running) {
      const flatten_table = flat_matrix(props.table);
      axios.get('https://cthl98.deta.dev/solve/BuscaGananciosa/EuclidianBetter', {
        params: { table: flatten_table }
      }).then((response) => {
        console.log(response);
      })
    }
    setRunning(!running);
  }

  return (
    <div className={styled.btnDiv}>
      <button className={styled.btn} onClick={(e) => handleClick(e)}>
        {props.icon == 'play' && <PlayArrowIcon fontSize={'large'} />}
      </button>
    </div>
  );
}

export default Button;
