import {useCookies} from "react-cookie";
import {useRouter} from "next/router";

const isBrowser = () => typeof window !== "undefined";

export default function PrivateRoute({children}) {
	const [cookies] = useCookies();
	const router = useRouter();

	if (isBrowser() && !cookies.user) {
		router.push("/auth/login");
	}

	return cookies.user && children;
}

