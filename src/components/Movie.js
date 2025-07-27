import React from 'react';
import { useParams } from 'react-router-dom';

//config
import {IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'
//Hook
import { useMovieFetch } from '../hooks/useMovieFetch'

//Image
import NoImage from '../images/no_image.jpg';



const Movie = () => {
    const { movieId } = useParams(); // useParams gets /:movieId from Route path='/:movieId'

    const { state: movie, loading, error} = useMovieFetch(movieId);
    if(loading) return <Spinner/>
    if (error) return <div>Something went wrogn!!!</div>
    console.log(movie);
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie} />
            <div></div>
        </>
    );
};
//             <MovieInfo image={movie} />

// movieTitle={movie.original_title}
export default Movie;