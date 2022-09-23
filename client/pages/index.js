import Head from 'next/head'
import Image from 'next/image'

import nextJsPic from "../public/images/nextjs.png"
import golangPic from "../public/images/golang.png"


export default function Home() {
	return (
		<div>
			<Head>
				<title>Hackathon Template</title>
				<meta name="description" content="A hackathon template website"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main>
				<div className="p-5 mx-auto justify-center items-center">
					<div className="border-solid border-2 border-black p-3 max-w-fit mx-auto">
						<h1 className="text-4xl text-center font-bold">Hello World!</h1>
					</div>
					<div className="p-3">
						<p className="text-center">
							This is a template website for hackathon projects. Hopefully you can build a great app using
							this and
							win some hackathons!
						</p>
					</div>
					<div className="m-2 justify-between flex">
						<Image
							src={nextJsPic}
							alt="picture of nextjs"
							className="object-cover"
						/>
						<div className="p-2">
							<h3 className="p-2 text-xl underline">Front-end Stack</h3>
							<p className="p-2 m-auto">
								The front-end of this project is built with NextJS and Tailwind. NextJS is a framework
								building on React that integrates many advanced features such as page navigation,
								decreased page load times and increased performance.
								<br/>
								Tailwind is a CSS framework that contains lots of pre-built libraries, making it easier
								to style pages and create a beautiful front-end.
							</p>
						</div>
					</div>
					<div className="m-2 justify-between flex">
						<div className="p-2">
							<h3 className="p-2 text-xl underline">Back-end Stack</h3>
							<p className="p-2 m-auto">
								The back-end of this project is built with either Python or Golang. If built with
								Python, the project uses Flask to serve the API and process incoming requests.
								<br/>
								Golang is a more performant back-end that can be used to integrate blockchain
								technology into the stack. If built with Golang, the project uses Mux to serve the API
								and process incoming requests.
							</p>
						</div>
						<Image
							src={golangPic}
							alt="picture of golang"
							className="object-cover"
						/>
					</div>
				</div>
			</main>
		</div>
	)
}
