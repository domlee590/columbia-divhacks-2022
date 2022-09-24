import React, {useEffect} from "react";
import {GoogleMap, InfoBox, Marker, useJsApiLoader} from "@react-google-maps/api";
import BottomCard from "./bottomCard";
import {locations} from "../locations";
import {useCookies} from "react-cookie";
import AddLocation from "../pages/addLocation";

const center = {
	lat: 40.79026094961797,
	lng: -73.94798269124819
};

function Map() {
	const {isLoaded} = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyBbp2hrU3Jw2fXd9zHGsz8CaFozb7XKgV0"
	})

	const [cookies, setCookie, removeCookie] = useCookies();
	const [map, setMap] = React.useState(null)

	const onClick = (e) => {
		setCookie('newLoc', e.latLng);
	}

	return (isLoaded ? (
			<div className="w-full h-[800px]">
				<GoogleMap
					mapContainerClassName="w-full h-full"
					center={center}
					zoom={14}
					onClick={onClick}
				>
					{
						locations.map((location) => (
							<Marker key={location.id} position={location.pos}/>
						))
					}
					{
						locations.map((location) =>
							<InfoBox key={location.id} position={location.pos} className="flex m-2">
								<a href={location.id}>
									<img className="object-cover h-full rounded-l-lg w-32" src={location.img}/>
								</a>
							</InfoBox>
						)
					}
					{
						cookies.newLocs && cookies.newLocs.map((location) =>
							<InfoBox key={location.id} position={location.pos}>
								<div className="bg-white m-2 rounded-md border-2 border-black p-2">
									<h2 className="text-2xl w-max">{location.heading}</h2>
									<p className="text-md">{location.body}</p>
									<p className="text-md">{location.rating} out of 5</p>
								</div>
							</InfoBox>
						)
					}
					{
						cookies.newLoc !== undefined ? (
							<InfoBox position={cookies.newLoc}>
								<div className="bg-white m-2 rounded-md border-2 border-black p-2">
									<a href="/addLocation"
									   className="h-full text-lg text-center mx-auto whitespace-nowrap">Confirm New
										Location</a>
								</div>
							</InfoBox>
						) : <></>
					}
				</GoogleMap>
			</div>

		) : <></>
	)
}

export default Map;
