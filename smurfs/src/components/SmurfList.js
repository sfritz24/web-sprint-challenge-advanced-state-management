import React, { useEffect } from "react";
import { connect } from "react-redux";

import {fetchSmurfs} from '../Actions/actions';

const Pokemon = props =>{

    useEffect(() =>{
        props.fetchSmurfs();
    }, []);

    return (
        <div>
            {props.isLoading && <h4>Loading Data...</h4>}
            {props.error && <p style='color:red;'>There was an error: {props.error}</p>}
            {props.smurfs.length > 0 && (
                <div>
                    {props.smurfs.map(smurfs =>(
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

const mapStateToProps = state =>{
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(Pokemon);