import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};


export default {
    fetchMovies: async(searchTerm, page) => {
        const endpoint = searchTerm 
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
        //await fetch from endpoint
        // then await when I convert it with JSON
    },
    fetchMovie: async(movieId) => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        return await(await fetch(endpoint)).json();
    },
    fetchCredits: async(movieID) => {
        const creditsEndpoint = `${API_URL}movie/$${movieID}/credits?api_key=${API_KEY}`;
        return await(await fetch(creditsEndpoint)).json();
    }
}