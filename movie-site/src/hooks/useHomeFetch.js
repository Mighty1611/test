//this entire thing is CustomHook????

import {useState,useEffect, useRef}  from 'react';

//api
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [state, setState] = useState(); // State that will hold all the movies

    const [loading, setLoading] = useState(false); // state for loadig

    const [error, setError] = useState(false); // for when we get error from API


    const fetchMovies = async(page, searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const movies = await(API.fetchMovies(searchTerm,page));
            console.log(movies);

            // parenthesis () to increase the scope
            // we want to return object

            //ES6 syntax = spread 
            // spreads the object 'movies' into ...movies
            // dont mutate, if mutate, it wont rerender.

            setState(prev => ({
                 ...movies,
                 results:
                 page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        }catch(error){
            setError(true);
        }
        setLoading(false);
    };   

    // we want to trigger this only on MOUNT / only initially == done by that ',[]' === dependency array
    // we can specify different dependencies on when we want useEffect to trigger
    // [] empty array == run ONCE

    //initial array
    useEffect(() => {
        fetchMovies(1);
    }, []);

    return {state,loading,error}; // it will return state:state [is in es6 format]
}