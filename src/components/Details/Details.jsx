import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Details () {
    const dispatch = useDispatch();
    const selectedMovie = useSelector(store => store.description);

    useEffect(() => {
        dispatch({ type: 'FETCH_DESCRIPTION' })
    });

    return(
        <>
        <h3>DETAILS!</h3>
        <div>
        {selectedMovie}
        </div>
        </>
    )
}

export default Details; 