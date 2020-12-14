import './App.scss';
import React, {useState} from 'react';
import ColorBox from './components/ColorBox'

function App() {
  const [color, setColor] = useState('deeppink');

  const changeBackgroundColor = () => {
    return setColor('green');
  }  

  return (
    <div className="App">
      <ColorBox clicked={changeBackgroundColor} bgcolor={color}/>
    </div>
  );
}

export default App;
