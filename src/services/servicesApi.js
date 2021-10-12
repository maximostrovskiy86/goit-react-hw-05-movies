import axios from "axios";

const BASE_FETCH_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ba655ab0d4fe97ea442262ccd92331f4';

const fetchGetMediaTrending = async () => {
    const response = await axios
        .get(`${BASE_FETCH_URL}/trending/movie/day?&api_key=${API_KEY}`,);
    return response.data;
}

const fetchGetMediaSearch = async (query) => {
    const response = await axios
        .get(`${BASE_FETCH_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data;
}

const getMediaMovieDetails = async (movieId) => {
    const response = await axios
        .get(`${BASE_FETCH_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
}

const getMediaMovieCast = async (movieId) => {
    const response = await axios
        .get(`${BASE_FETCH_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;
}

const getMediaMovieReviews = async (movieId) => {
    const response = await axios
        .get(`${BASE_FETCH_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
}

export default {
    fetchGetMediaTrending,
    fetchGetMediaSearch,
    getMediaMovieDetails,
    getMediaMovieCast,
    getMediaMovieReviews,
}