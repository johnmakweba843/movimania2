import PropTypes from "prop-types";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const FALLBACK_IMAGE = "https://via.placeholder.com/500"; // Placeholder image

const LargeMovieCard = ({ movie }) => {
  const imageUrl = movie.backdrop_path
    ? IMAGE_BASE_URL + movie.backdrop_path
    : FALLBACK_IMAGE; // Use the fallback image if backdrop_path is null

  return (
    <section className="hover:scale-110 duration-300 cursor-pointer w-60 md:w-72 m-3">
      <img
        src={imageUrl}
        alt={movie.name || movie.title}
        className="rounded-lg hover:border-2 border-gray-400"
      />
      <h2 className="w-60 md:w-72 font-semibold text-gray-200">
        {movie.name || movie.title}
      </h2>
    </section>
  );
};

LargeMovieCard.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string, // Now it's optional
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default LargeMovieCard;
