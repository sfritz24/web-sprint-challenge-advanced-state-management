import React, { useState } from "react";
import axios from 'axios'
import "./App.css";
import Smurfs from './SmurfList';

const initialFormValues = {
  name: '',
  age: '',
  height: '',
}

export const initialState ={
  isLoading: false,
  smurfs: [],
  error: ''
};

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [smurf, setSmurf] = useState(initialState.smurfs)

  const postSmurf = (newSmurf) =>{
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(response =>{
        setSmurf([...smurf, response.data])
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
      <Smurfs/>
    </div>
  );
}

export default App;
