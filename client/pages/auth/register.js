import {ErrorMessage, Field, Form, Formik} from "formik";
import {useCookies} from "react-cookie";

export default function Login() {
	const [cookies, setCookie, removeCookie] = useCookies();

	const validate = (values) => {
		const errors = {};
		if (!values.email) {
			errors.email = 'Required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		} else if (!values.password) {
			errors.password = 'Required';
		} else if (!values.name) {
			errors.name = 'Required';
		} else if (!values.bio) {
			errors.bio = 'Required';
		}
		return errors;
	}

	const handleSubmit = (values, {setSubmitting}) => {
		setCookie('user', values)
	}

	return (
		<div className="m-5 border-solid border-2 border-black p-3 max-w-fit mx-auto">
			<Formik
				initialValues={{email: '', password: '', name: '', bio: ''}}
				validate={validate}
				onSubmit={handleSubmit}
			>
				{({isSubmitting}) => (
					<Form className="p-4 mx-auto justify-center items-center">
						<div className="mb-2">
							<label className="text-xl">Email</label>
							<br/>
							<Field type="email" name="email" className="p-1 border-solid border-2 border-black"/>
							<ErrorMessage name="email" component="div"/>
						</div>
						<div className="mb-2">
							<label className="text-xl">Password</label>
							<br/>
							<Field type="password" name="password" className="p-1 border-solid border-2 border-black"/>
							<ErrorMessage name="password" component="div"/>
						</div>
						<div className="mb-2">
							<label className="text-xl">Name</label>
							<br/>
							<Field type="text" name="name" className="p-1 border-solid border-2 border-black"/>
							<ErrorMessage name="name" component="div"/>
						</div>
						<div className="mb-2">
							<label className="text-xl">Bio</label>
							<br/>
							<Field as="textarea" rows="5" type="text" name="bio" className="p-1 border-solid border-2 border-black"/>
							<ErrorMessage name="bio" component="div"/>
						</div>
						<button type="submit" disabled={isSubmitting} className="p-1 border-solid border-2 border-black">
							Register
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
