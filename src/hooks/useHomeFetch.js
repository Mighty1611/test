//this entire thing is CustomHook????

import {useState,useEffect, useRef}  from 'react';

//api
import API from '../API';

// helper session storage
import { isPersistedState } from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState); // State that will hold all the movies
    const [loading, setLoading] = useState(false); // state for loadig
    const [error, setError] = useState(false); // for when we get error from API
    const [searchTerm,setSearchTerm] = useState('');
    const [isLoadingMore,setIsLoadingMore] = useState(false);

    console.log(searchTerm);

    const fetchMovies = async(page, searchTerm = '') => {
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
    // [] empty array == Dependency Array (2nd argument == empty array here) ==> to run ONCE

    //initial render and search
    useEffect(() => {
        // console.log('echo');
        // if(!searchTerm && state!=initialState) {
        //     const sessionState = isPersistedState('homeState');

        //     if(sessionState){
        //         setState(sessionState);
        //         return;
        //     }
        // }
        // console.log('echo2');


        setState(initialState);
        fetchMovies(1,searchTerm);
    }, [searchTerm]);


    useEffect(()=> {
        if(!isLoadingMore) return;

        fetchMovies(state.page+1,searchTerm);
        setIsLoadingMore(false);
    },[isLoadingMore]);


        //write To Session State
    // useEffect(() => {

    //     if(!searchTerm){
    //         sessionStorage.setItem('homeState',JSON.stringify(state))
    //         console.log('state retrieved');
    //     }
    // },[searchTerm,state])


    return {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore}; // it will return state:state [is in es6 format]
}