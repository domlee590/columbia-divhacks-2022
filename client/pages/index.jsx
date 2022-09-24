import {useRouter} from "next/router";
import axios from "axios";

export default function Home() {
	const router = useRouter()

	const onSubmit = async (e) => {
		e.preventDefault();
		const params = new URLSearchParams();
		params.append('To', e.target.elements.phone_number.value);
		params.append('MessagingServiceSid', 'MG74760c00bc6a755f4d4e57fbcfe86943');
		params.append('Body', 'Hi there, thanks for signing up with Blossom! We think you\'d really like this local eco-friendly date idea: http://35.231.183.210/picnic. Check it out, and find many other sustainable dating ideas on our website!');
		await axios.post(
			"https://api.twilio.com/2010-04-01/Accounts/AC70589c2962e39a1213c0ca015a988912/Messages.json", params, {
				auth: {
					username:  'AC70589c2962e39a1213c0ca015a988912',
					password: '1003a07a763d76be1a7d94c09c479483'
				}
			}
		)
		await router.push('/locations');
	}

	return (<div>
			<div className="min-h-screen flex flex-col text-gray-600 container-testing">
				<main className="container mx-auto px-6 pt-16 flex-1 text-center">
					<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
					<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">Blossom</h1>

					<p className="text-base md:text-lg lg:text-2xl mb-8">Let your love blossom as the earth blossoms</p>

					<div
						className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-90 w-fit mx-auto mb-8 rounded-full">
						943,245 members
					</div>

					<form
						method="post"
						id="revue-form"
						name="revue-form"
						target="_blank"
						onSubmit={onSubmit}
					>

						<div className="flex flex-col md:flex-row justify-center mb-4">
							<input
								placeholder="Your phone number..."
								type="text"
								name="phone_number"
								id="member_email"
								className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-90 focus:bg-opacity-100 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
							/>
							<input
								type="submit"
								value="Join Today"
								name="member[subscribe]"
								id="member_submit"
								className="bg-primary bg-white  opacity-90 md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-100 duration-150"
							/>
						</div>
					</form>
				</main>
			</div>
		</div>
	);
}
