import React from 'react';
import { useState } from 'react';
import styled from './Button.module.css';

const Button = () => {

  const [running, setRunning] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (!running) {
      console.log('Clicked');
    }
  }

  return (
    <div className={styled.btnDiv}>
      <button className={styled.btn} onClick={(e) => handleClick(e)}>
        <span className={styled.play}></span>
      </button>
    </div>
  );
}

export default Button;
