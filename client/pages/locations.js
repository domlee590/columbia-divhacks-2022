import BottomCard from "../components/bottomCard";
import {locations} from "../locations";

const Locations = () => {

  return (
    <div class = "bg-[url('/images/leaf_bg.png')] h-full content-center">
			<div class = "flex flex-col items-center justify-center pt-5">
				<div class = "bg-emerald-900 w-3/4 justify-center items-center pt-3 pb-3">
					<h1 class = "text-4xl text-center text-white font-serif">Nearby Recommendations</h1>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4 pt-10 pb-10">
				{
					locations.map((location) => (
						<BottomCard
							key={location.heading}
							heading={location.heading}
							body={location.body}
							img={location.img}
						/>))
				}
			</div>

			<div class = "flex flex-col items-center justify-center">
				<button class="bg-emerald-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
					<p1 class = "text-1xl text-center text-white font-serif">Load More...</p1>
				</button>
			</div>

		</div>

  );
};
export default Locations;
