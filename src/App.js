import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
// common
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// main
import HisTory from "./components/main/HisTory";
import Home from "./components/main/Home";
import WayToCome from "./components/main/WayToCome";

import "./scss/style.scss";


function App() {
	return (
		<Switch>
			<Route exact path="/">
				<Header type={"Home"} />
			</Route>
		</Switch>

		
	);
}

export default App;
