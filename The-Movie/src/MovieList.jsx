import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import GlobalApi from "./services/GlobalApi";
import MovieCard from "./components/MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import LargeMovieCard from "./components/LargeMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  };

  const slideRight = (event) => {
    if (elementRef.current) {
      const currentScrollLeft = elementRef.current.scrollLeft;
      const maxScrollLeft =
        elementRef.current.scrollWidth - elementRef.current.clientWidth;
      const newScrollLeft =
        currentScrollLeft < maxScrollLeft
          ? currentScrollLeft + 500
          : maxScrollLeft;
      elementRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      if (event) {
        event.preventDefault();
      }
    }
  };

  const slideLeft = (event) => {
    if (elementRef.current) {
      const currentScrollLeft = elementRef.current.scrollLeft;
      const newScrollLeft = currentScrollLeft - 500;
      elementRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      if (event) {
        event.preventDefault();
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      slideLeft(event);
    } else if (event.key === "ArrowRight") {
      slideRight(event);
    }
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={(event) => slideLeft(event)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="text-gray-400 text-3xl font-bold cursor-pointer z-10 absolute hidden md:block  top-[45%] -left-5 "
      />
      <div
        ref={elementRef}
        className="flex gap-2 overflow-x-auto no-scrollbar mx-4"
        onKeyDown={handleKeyDown}
        tabIndex={0}>
        {movieList.map((item, index) => (
          <div key={index}>
            {index_ % 3 === 0 ? (
              <LargeMovieCard key={index} movie={item} />
            ) : (
              <MovieCard key={index} movie={item} />
            )}
          </div>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={(event) => slideRight(event)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="text-gray-400 text-3xl font-bold cursor-pointer z-10 absolute hidden md:block -right-5 top-[45%]"
      />
    </div>
  );
};

MovieList.propTypes = {
  genreId: PropTypes.number.isRequired,
  index_: PropTypes.number.isRequired,
};

export default MovieList;
