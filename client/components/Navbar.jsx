const Navbar = ({}) => {
	return (
		<nav class="p-2 bg-white border-gray-200 dark:bg-green-600 dark:border-green-600">
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<a href="/" class="flex items-center">
					<img src="/images/blossom-logo.png" class="mr-3 h-6 sm:h-10 color-white"
					     style={{filter: "brightness(100)"}} alt="Flowbite Logo"/>
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Blossom</span>
				</a>

				<a href="#"
				   class="block py-2 pr-4 pl-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Meet</a>

				<a href="#"
				   className="block py-2 pr-4 pl-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Login</a>

				<a href="/locations"
				   class="block py-2 pr-4 pl-3 text-white rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Plan a date</a>
			</div>
		</nav>
	)
}
export default Navbar;
