import BottomCard from "../components/bottomCard";

const locations = () => {
	let h1 = "Central Park Picnic";
	let h2 = "Plant a Tree";
	let h3 = "Vegan Restaurant";
	let h4 = "Bird Watching";
	let h5 = "Upstate Hike";
	let h6 = "Community Garden";
	let b1 = "Enjoy some home-made sandwiches in the best park in the city. After food, take a stroll and ride in a boat.";
	let b2 = "Name your own tree with your partner and literally plant your seed into the ground with love <3";
	let b3 = "Want to eat healthy? Check out this trendy vegan spot right here in Morningside Heights.";
	let b4 = "Look for the sky’s treasure and learn about the endangered bird species of New York.";
	let b5 = "Take the public train upstate and hike in nature. It’s a great get away from the city with your partner.";
	let b6 = "Got outdoors? We've the rarest and most sought after outdoor plants on the planet.";

  return (
    <div class = "bg-[url('/images/leaf_bg.png')] h-full content-center">
			<div class = "flex flex-col items-center justify-center pt-5">
				<div class = "bg-emerald-900 w-3/4 justify-center items-center pt-3 pb-3">
					<h1 class = "text-4xl text-center text-white font-serif">Nearby Recommendations</h1>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-4 pt-10 pb-10">
				<div><BottomCard img={"/images/park.jpg"} header={h1} bodyText={b1} /></div>
				<div><BottomCard img={"/images/tree.jpg"} header={h2} bodyText={b2} /></div>
				<div><BottomCard img={"/images/vegan food.jpg"} header={h3} bodyText={b3} /></div>
				<div><BottomCard img={"/images/look.jpg"} header={h4} bodyText={b4} /></div>
				<div><BottomCard img={"/images/hike.jpg"} header={h5} bodyText={b5} /></div>
				<div><BottomCard img={"/images/.jpg"} header={h6} bodyText={b6} /></div>
			</div>
		
			<div class = "flex flex-col items-center justify-center">
				<button class="bg-emerald-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
					<p1 class = "text-1xl text-center text-white font-serif">Load More...</p1>
				</button>
			</div>

		</div>

  );
};
export default locations;
