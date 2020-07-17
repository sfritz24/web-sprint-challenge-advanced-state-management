import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Smurfs from './SmurfList';
import Form from './SmurfForm';
import {SmurfContext} from '../Context/SmurfContext';

const initialFormValues = {
  name: '',
  age: '',
  height: '',
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [smurfs, setSmurf] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:3333/smurfs')
      .then(response =>{
        setSmurf(response.data)
      })
      .catch(error =>{
        console.log(error)
      })
  })

  const postSmurf = (newSmurf) =>{
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(response =>{
        setSmurf([...smurfs, response.data])
      })
      .catch(error =>{
        console.log(error)
      })
      .finally(() =>{
        setFormValues(initialFormValues)
      })
  };

  const onInputChange = (event) =>{
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value})
  };

   const onSubmit = (event) =>{
    event.preventDefault();

    const newSmurf = {
      name: formValues.name,
      age: formValues.age,
      height: formValues.height,
    };

    postSmurf(newSmurf)
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfContext.Provider value={{formValues, onInputChange, onSubmit, smurfs}}>
        <Smurfs/>
        <Form/>
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
