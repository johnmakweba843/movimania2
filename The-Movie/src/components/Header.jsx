import { useState } from "react";
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
	const [toggle, setToggle] = useState(false);
	const menu = [
		{
			name: "HOME",
			icon: HiHome,
		},
		{
			name: "SEARCH",
			icon: HiMagnifyingGlass,
		},
		{
			name: "MY LIST",
			icon: HiPlus,
		},
		{
			name: "TOP RATED",
			icon: HiStar,
		},
		{
			name: "NOW PLAYING",
			icon: HiPlayCircle,
		},
		{
			name: "TV SHOWS",
			icon: HiTv,
		},
	];

	return (
		<div className="flex items-center justify-between p-5">
			<div className="flex gap-8 items-center">
				{/* Display the name "Movie Mania" instead of a logo */}
				<h1 className="text-2xl font-bold text-white">Movie Mania</h1>
				<div className="hidden md:flex gap-8">
					{menu.map((item, index) => (
						<HeaderItem key={index} name={item.name} Icon={item.icon} />
					))}
				</div>
				<div className="flex md:hidden gap-5">
					{menu.map(
						(item, index) =>
							index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
					)}
					<div className="md:hidden" onClick={() => setToggle(!toggle)}>
						<HeaderItem name={""} Icon={HiDotsVertical} />
						{toggle ? (
							<div
								className="absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4">
								{menu.map(
									(item, index) =>
										index > 2 && (
											<HeaderItem
												key={index}
												name={item.name}
												Icon={item.icon}
											/>
										)
								)}
							</div>
						) : null}
					</div>
				</div>
			</div>
			
		</div>
	);
}

export default Header;
