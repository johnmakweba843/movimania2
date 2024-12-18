import { useState } from "react";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Sliders from "./components/Slider";

function App() {
  const [productionHouseList] = useState([
    {
      id: 2,
      image: "/pixar.png",
      video: "/pixar.mp4",
      name: "Pixar",
    },
    {
      id: 3,
      image: "/marvel.png",
      video: "/marvel.mp4",
      name: "Marvel",
    },
    {
      id: 4,
      image: "/starwars.png",
      video: "/starwars.mp4",
      name: "Star Wars",
    },
    {
      id: 5,
      image: "/national.png",
      video: "/national.mp4",
      name: "National Geographic",
    },
  ]);

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black bg-black">
      <Header />
      <Sliders />
      <ProductionHouse productionHouseList={productionHouseList} />
      <GenreMovieList />
    </div>
  );
}

export default App;
