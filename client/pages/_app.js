import '../styles/globals.css'
import Head from "next/head";

function App({Component, pageProps}) {
	return (
		<div>
			<Head>
				<title>Hackathon Template</title>
				<meta name="description" content="A hackathon template website"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main>
				<Component {...pageProps} />
			</main>
		</div>
	)
}

export default App
