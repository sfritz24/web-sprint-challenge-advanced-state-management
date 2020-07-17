import React, {useContext} from 'react';
import {SmurfContext} from '../Context/SmurfContext';

const Form = () =>{

    const {formValues, onInputChange, onSubmit} = useContext(SmurfContext)

    return(
        <div>
            <h2>Add your favorite Smurf:</h2>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        name='name'
                        type='text'
                        value={formValues.name}
                        onChange={onInputChange}
                    />
                </label>
                <label>Age:
                    <input
                        name='age'
                        type='text'
                        value={formValues.age}
                        onChange={onInputChange}
                    />
                </label>
                <label>Height:
                    <input
                        name='height'
                        type='text'
                        value={formValues.height}
                        onChange={onInputChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Form;