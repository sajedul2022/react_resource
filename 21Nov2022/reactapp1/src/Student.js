import React from 'react';

class Student extends React.Component{

    constructor(){
        super();
        this.state = {id:1252, name:"Sajedul"}
    }

    render(){
        return <h2> Student ID: {this.state.id} <br></br> Student nama: {this.state.name} </h2>
    }

}

export default Student;