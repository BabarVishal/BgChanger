import { useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
        <div className='bgChanger' style={{backgroundColor: color}}>
           <div className="button">
           <button
            type='button'
            onClick={()=> setColor("blue")}
           >blue</button>
            <button
            type='button'
            onClick={()=> setColor("green")}
           >green</button>
           <button
            type='button'
            onClick={()=> setColor("red")}
           >red</button>
           <button
            type='button'
            onClick={()=> setColor("black")}
           >black</button>
           </div>
           
        </div>  
    </>
  );
}

export default App;

