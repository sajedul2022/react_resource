import React , {useState} from 'react';
import './colors.css';



const Colors = () => {

    const [color, Setcolor] = useState("Red");



  return (
      <div className="col-sm-8"> 
          <h1> My Colors is {color} </h1> 

          <button className='btn btn-primary' onClick={() => Setcolor("Blue")} > Blue </button>  <span></span>
          <button className='btn btn-success' onClick={() => Setcolor("Green")} > Green </button> <span></span>
          <button className='btn btn-warning' onClick={() => Setcolor("Orange")} > Orange </button>
      </div>
    
  );


}


export default Colors;
