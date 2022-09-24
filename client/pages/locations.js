import BottomCard from "../components/bottomCard";
import {locations} from "../locations";
import Map from "../components/map";
import {useEffect} from "react";

const Locations = () => {
	return (
		<div>
			<Map locations={locations} />
			<div className="bg-[url('/images/leaf_bg.png')] h-full content-center">
				<div className="flex flex-col items-center justify-center pt-5">
					<div className="bg-emerald-900 w-3/4 justify-center items-center pt-3 pb-3">
						<h1 className="text-4xl text-center text-white font-serif">Nearby Recommendations</h1>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-4 pt-10 pb-10">
					{
						locations.map((location) => (
							<BottomCard
								key={location.id}
								location={location}
							/>))
					}
				</div>

				<div className="flex flex-col items-center justify-center">
					<button className="bg-emerald-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
						<p1 className="text-1xl text-center text-white font-serif">Load More...</p1>
					</button>
				</div>

			</div>
		</div>


	);
};
export default Locations;
