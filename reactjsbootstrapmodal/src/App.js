import React, { Component } from 'react';
import './App.css';
// import ModalComponent from './components/ModalComponent';
import MyModal from './components/MyModal';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <ModalComponent/>         */}
          <MyModal/>        
      </div>
    );
  }
}

export default App;