import PropTypes from "prop-types";

const HeaderItem = ({ name, Icon }) => {
	return (
		<div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-4 mb-2">
			<Icon />
			<h2>{name}</h2>
		</div>
	);
};

HeaderItem.propTypes = {
	name: PropTypes.string.isRequired,   // name should be a required string
	Icon: PropTypes.elementType.isRequired,  // Icon should be a valid React component
};

export default HeaderItem;
