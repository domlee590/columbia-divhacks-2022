const BottomCard = ({location}) => {
	return (
		<a href={`/${location.id}`}>
			<div className="flex h-32 bg-white rounded-lg outline outline-offset-0 outline-black border-r-green-200"
			     style={{boxShadow: '3px 3px #dcfce7'}}>
				<div className="w-1/3">
					<img className="object-cover h-full rounded-l-lg" src={location.img}/>
				</div>
				<div className="w-2/3 pl-3 font-serif">
					<h1 className="text-2xl font-bold">{location.heading}</h1>
					<p className="text-gray-500">{location.body}</p>
				</div>
			</div>
		</a>
	);
}
export default BottomCard;
