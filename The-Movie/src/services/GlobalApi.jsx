import axios from "axios";

// Base URLs
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4853d5000ad671f1d994a0457a34a9b6"; // Ensure to secure your API key

// Base URL for fetching movies by genre
const movieByGenreBaseURL =
	"https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;

// Function to get trending movies
const getTrendingVideos = axios.get(
	movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

// Function to get movies by genre ID
const getMovieByGenreId = (id) =>
	axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
	getTrendingVideos,
	getMovieByGenreId,
};
