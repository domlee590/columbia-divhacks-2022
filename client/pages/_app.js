import '../styles/globals.css'
import Head from "next/head";
import Navbar from "../components/Navbar";

function App({Component, pageProps}) {
	return (
		<div>
			<Head>
				<title>Hackathon Template</title>
				<meta name="description" content="A hackathon template website"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<Navbar />
			<main>
				<Component {...pageProps} />
			</main>
		</div>
	)
}

export default App
