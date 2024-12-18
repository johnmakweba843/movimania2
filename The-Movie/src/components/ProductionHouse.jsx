import PropTypes from "prop-types";

const ProductionHouse = ({ productionHouseList }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600
              rounded-lg hover:scale-110 transition-all duration-300
              ease-in-out relative shadow-xl
              shadow-gray-800"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            width={"100%"}
            className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
          />
          {item.image ? (
            <img src={item.image} className="w-full z-[1] opacity-100" />
          ) : (
            <div className="w-full z-[1] opacity-100 bg-gray-500 h-[200px]">No Image</div>
          )}
        </div>
      ))}
    </div>
  );
};

ProductionHouse.propTypes = {
  productionHouseList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string, // Optional, can be null
      video: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductionHouse;
