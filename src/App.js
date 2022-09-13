import { MyComponent } from './components/MyComponent';
import { TrainerForm } from './components/TrainerForm';
import './App.css';
import  Counter from './components/Counter';
import {SignIn} from './components/SignIn';
import React, {useState} from 'react'

function App() {

  const [name, setName] = useState("")
  

  return (

    <SignIn/>
    
  );
}

export default App;
