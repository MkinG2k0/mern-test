import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./Routes/Routes";
import {useAuth} from "./Hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Loader} from "./components/Loader/Loader";

function App() {
	const {userId, logout, login, token, ready} = useAuth()
	const isAuth = !!token
	const routes = useRoutes(isAuth)
	const valueProvider = {
		userId, logout, login, token, isAuth
	}

	if (!ready) return <Loader/>

	return (
		<BrowserRouter>
			<AuthContext.Provider value={valueProvider}>
				{routes}
			</AuthContext.Provider>
		</BrowserRouter>);
}

export default App;
