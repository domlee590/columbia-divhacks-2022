import {ErrorMessage, Field, Form, Formik} from "formik";
import {useCookies} from "react-cookie";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function AddLocation() {
	const router = useRouter();

	const [cookies, setCookie, removeCookie] = useCookies();

	const validate = (values) => {
		if (values.heading === "") {
			return {heading: "Required"};
		}
		if (values.body === "") {
			return {body: "Required"};
		}
		if (values.img === "") {
			return {img: "Required"};
		}
	}

	const handleSubmit = (values, {setSubmitting}) => {
		if (cookies.newLocs === undefined) {
			setCookie('newLocs', [{
				...values,
				id: values.heading.replace(/\s/g, ''),
				pos: cookies.newLoc
			}]);
		} else {
			const newLocs = cookies.newLocs.concat({
				...values,
				id: values.heading.replace(/\s/g, ''),
				pos: cookies.newLoc
			})
			setCookie("newLocs", newLocs);
		}

		router.push('/locations')
	}

	return (
		<div className="m-5 mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-md">
			<Formik
				initialValues={{heading: '', body: '', rating: 5}}
				onSubmit={handleSubmit}
			>
				{({isSubmitting}) => (
					<Form className="p-4 mx-auto justify-center items-center">
						<div className="mb-2">
							<label className="text-xl">Heading</label>
							<br/>
							<Field type="text" name="heading" placeholder="Heading" className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
							<ErrorMessage name="heading" component="div"/>
						</div>
						<div className="mb-2">
							<label className="text-xl">Body</label>
							<br/>
							<Field as="textarea" rows="5" type="text" placeholder="Body" name="body"
							       className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
							<ErrorMessage name="body" component="div"/>
						</div>
						<div className="mb-2">
							<label className="text-xl">Rating (out of 5)</label>
							<br/>
							<Field type="number" name="rating" className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
							<ErrorMessage name="rating" component="div"/>
						</div>
						<button type="submit" disabled={isSubmitting}
						        className="w-full
      px-6
      py-2.5
      bg-green-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-700 hover:shadow-lg
      focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
