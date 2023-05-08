import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { select } from 'redux-saga/effects';


function Details () {
    const dispatch = useDispatch();
    const selectedMovie = useSelector(store => store.movie);

    const {id} = useParams(); 

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE', payload: id })
    }, []);

    

    return(
        <>
        <h3>DETAILS!</h3>
        <div>
        <p>{selectedMovie.description}</p>

        <button onClick={() => history.back()}>
        Return
        </button>
          
        </div>

        </>
    )
};

export default Details; 