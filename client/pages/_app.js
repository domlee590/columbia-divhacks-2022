import '../styles/globals.css'
import Head from "next/head";
import Navbar from "../components/Navbar";
import {useCookies} from "react-cookie";
import React from "react";
import {locations} from "../locations";

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
