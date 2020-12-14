import React, { useState } from 'react'
import styles from './ColorBox.module.scss'
const getRandomColor = () => {
    const colors = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
  
const ColorBox = () => {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        console.log(initColor);
        return initColor;
    }); 
    const handleBoxClick = () => {
        const colorActive = getRandomColor();
        localStorage.setItem('box-color', colorActive);
        return setColor(colorActive);
    }  

    return (
        <div className={styles.box} style={{ backgroundColor: color}} onClick={handleBoxClick}>
            <h1>Box</h1>
        </div>
    )
}
export default ColorBox;