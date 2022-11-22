import React from 'react';
// import ReactDOM from 'react-dom/client';


// Make Element 
const myElement = React.createElement('h4', {}, 'I do not use JSX!');

// Function
const greetings = (name)=>{
    return name + "! Good Afternoon";
}

// Make variable
export let x = "This is Line";

// make Array
const flowers = ['Rose','WaterLily','Belly'];

// make object

const Person = {
    name:'Sajedul',
    age: 30,
    address: "Mirpur"
}

// Input Feild 
const myInput = <input type="text" placeholder='Enter Text' />;


export {myElement,greetings,flowers,myInput}

export default Person;


