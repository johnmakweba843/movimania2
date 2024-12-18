import MovieList from "../MovieList";
import { genre } from "./constant/GenresList";

const GenreMovieList = () => {
	// console.log(genre);
	return (
		<div>
			{genre.map((item, index) => index<=4 && (
				<div key={index} className="p-4 px-2 md:px-8 m-1">
					<h2 className="text-white font-bold text-xl p-2">{item.name}</h2>
					<MovieList genreId={item.id} index_ = {index} />
				</div>
			))}
		</div>
	);
};

export default GenreMovieList;
