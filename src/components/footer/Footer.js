import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

import styled from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styled.footer}>
      <a
        target='_blank'
        href='https://github.com/cemmanuelsr/react-8-puzzle'
        className={styled.source}
      >
        <GitHubIcon />
        <span>Source Code</span>
      </a>
    </div>
  );
}

export default Footer;
