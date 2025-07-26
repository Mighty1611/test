import React, { useState, useEffect } from 'react';


//config; using API's
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';


// components
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'

// hook 
import { useHomeFetch } from '../hooks/useHomeFetch'


// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    
    // use es6 destructive syntax
    const { state, loading, error } = useHomeFetch();
    console.log(state);
    return( 
        <>
            {state.results[0] ? (
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
                // title={`some title`}
                // text={`some text`}
                
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />
            ) : null}
            <Grid header='Popular Movies'>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable={true}
                        image={
                            movie.poster_path 
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                        }
                        movieId = {movie.id}
                    />
                ))}
            </Grid>
            <Spinner/>
        </>
    )
};

export default Home;