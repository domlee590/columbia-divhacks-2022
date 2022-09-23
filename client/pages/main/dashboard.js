import PrivateRoute from "../../components/privateRoute";

export default function Dashboard() {
	return (
		<PrivateRoute component={
			<div>
				<h1>Hello world</h1>
			</div>
		}/>
	)
}
