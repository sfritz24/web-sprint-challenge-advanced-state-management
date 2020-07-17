import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const fetchSmurfs = () =>{
    return dispatch =>{
        dispatch({type: FETCH_SMURFS_START});
        axios.get('https://pokeapi.co/api/v2/SMURFS?limit=10')
            .then(response =>{
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data.results})
            })
            .catch(error =>{
                dispatch({type: FETCH_SMURFS_FAIL, payload: error.message})
            })
    }
}