import PropTypes from "prop-types";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
	return (
		<img
			src={IMAGE_BASE_URL + movie.poster_path}
			alt={movie.name || movie.title}
			className="rounded-lg hover:border-2 border-gray-400 hover:scale-110 duration-300 cursor-pointer m-3 w-40 md:w-48 md:h-60"
		/>
	);
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		poster_path: PropTypes.string.isRequired, // poster_path should be a required string
		name: PropTypes.string,                   // name is optional
		title: PropTypes.string,                  // title is optional
	}).isRequired,
};

export default MovieCard;
