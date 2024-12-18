import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import GlobalApi from "../services/GlobalApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Sliders() {
  const [movieList, setMovieList] = useState([]);
  const sliderRef = useRef(null);

  // Fetch trending movies when component mounts
  useEffect(() => {
    getTrendingMovies();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false, // Hide default arrows
    fade: true, // Enable fade effect for better visual experience
    cssEase: "linear", // Smooth transition
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      prevSlide(); // Left arrow key
    } else if (event.keyCode === 39) {
      nextSlide(); // Right arrow key
    }
  };

  return (
    <div className="h-screen w-full relative">
      {/* Left Arrow */}
      <HiChevronLeft
        className="text-white text-3xl absolute my-auto h-full z-50 cursor-pointer"
        onClick={prevSlide}
      />

      {/* Right Arrow */}
      <HiChevronRight
        className="text-white text-3xl absolute my-auto h-full z-50 right-0 cursor-pointer"
        onClick={nextSlide}
      />

      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {movieList.map((item, index) => (
          <div key={index} className="h-screen w-screen relative">
            {/* Background Image */}
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.name || item.title}
              className="w-full h-screen object-cover object-center absolute"
            />
            {/* Overlay Content */}
            <div className="absolute flex flex-col bg-black/55 h-screen w-full">
              <h1 className="text-gray-200 text-2xl md:text-3xl lg:text-5xl font-bold mt-40 mx-16 sm:w-3/5 md:w-2/5">
                {item.name || item.title}
              </h1>
              <h2 className="text-gray-200 text-lg md:text-xl lg:text-2xl font-bold mt-6 mx-20">
                {item.release_date}
              </h2>
              <p className="text-gray-200 mx-16 mt-4 w-2/3 md:w-2/5">
                {item.overview}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// PropTypes for type checking
Sliders.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ),
};

export default Sliders;
