import React, {useContext} from 'react';
import {SmurfContext} from '../Context/SmurfContext';

const Smurfs = () =>{

    const {smurfs} = useContext(SmurfContext)

    return (
        <div>
            {smurfs.length > 0 && (
                <div>
                    {smurfs.map(smurfs =>(
                        <div key={smurfs.name} className='smurfs'>
                            <h4>{smurfs.name}</h4>
                            <p>{smurfs.height}</p>
                            <p>{smurfs.age}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Smurfs;