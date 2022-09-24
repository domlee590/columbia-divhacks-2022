import {useRouter} from "next/router";
import BottomCard from "../components/bottomCard";
import {locations} from "../locations"

export default function Place({location}) {
	const router = useRouter()

	return (
		<div>
			<div className="flex mx-auto bg-cover" style={{backgroundImage: `url('${location.img}')`}}>
				<div className="m-5 max-w-fit mx-auto text-white">
					<div className="max-w-fit flex items-start mb-32">
						<div className="bg-green-500 p-3 mx-2 rounded-md">
							<h2 className="text-7xl">{location.heading}</h2>
							<p className="text-2xl">{location.address}</p>
						</div>
						<div className="bg-green-200 p-2 mx-2 rounded-md">
							<div className="bg-green-500 p-2">
								<h2 className="text-5xl">Blossom Rating</h2>
								<h3 className="text-3xl text-center">{location.rating} out of 5</h3>
								<h4 className="text-xl">Things to do:</h4>
								<ul>
									{location.activities.map((activity) => (
										<li key={activity}>{activity}</li>
									))}
								</ul>
								<h4 className="text-xl">Food options:</h4>
								<ul>
									{location.food.map((food) => (
										<li key={food}>{food}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="max-w-fit flex">
						<button className="bg-green-500 p-2 mx-2 rounded-md" onClick={() => router.push("/locations")}
						> ← Back To Map
						</button>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-fit pt-5">
				<div className="mx-auto">
					<h2 className="text-5xl text-center">Related places</h2>
				</div>
				<div className="mx-16 grid grid-cols-3 gap-5 pt-10 pb-10">
					{
						locations.filter(l => l.id !== location.id).slice(0, 3).map((location) => (
							<BottomCard key={location.heading} location={location}/>
						))
					}
				</div>
			</div>
		</div>

	)
}

export async function getStaticPaths() {
	const paths = locations.map((location) => ({
		params: {place: location.id},
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({params}) {
	return {
		props: {
			location: locations.find((location) => location.id === params.place)
		},
	}
}
