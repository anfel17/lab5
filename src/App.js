import React, { Component } from 'react';
import './App.css';
import ClickMeButton from './components/ClickMeButton';
import DisplayTab from './components/DisplayTab';
import UserManagement from './components/UserManagement';
import DynamicDivForm from './components/DynamicDivForm';
// import App from './App';
// import CounterApp from './CounterApp';

class App extends Component  {
  render(){
    const tab1 = ["hello", "world", "from", "react"];
    const tab2 = ["apple", "orange", "banana"];
    return (
      <div>
      <ClickMeButton />
  
      <h3>Table 1:</h3>
      <DisplayTab table={tab1} />
      
      <h3>Table 2:</h3>
      <DisplayTab table={tab2} />

      <UserManagement/>
      <DynamicDivForm/>
    </div>
     
     );
  }
}


export default App;
