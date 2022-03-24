import React from 'react';
import styled from './Tile.module.css';

const Tile = ( props ) => {
    return (
        <div className={props.value ? styled.tile : styled.zero}>
         {props.value ? props.value : null}
        </div>
    );
}

export default Tile;
