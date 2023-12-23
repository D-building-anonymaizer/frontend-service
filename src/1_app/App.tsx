import { reatomContext } from "@reatom/npm-react";
import { Route, Routes } from "react-router";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Page404 } from "../2_pages/404/ui/index";
import { ctx } from "../6_shared/lib/reatom/ctx";
import { Home } from "./../2_pages/home/ui/Home";
import { Layout } from "./../2_pages/layout/ui/Layout";
import { Uploaded } from "../2_pages/uploaded/ui/Uploaded";

const App = (): JSX.Element => {
	return (
		<reatomContext.Provider value={ctx}>
			<BrowserRouter >
				<Routes>
					<Route
						path='/'
						element={<Layout />}>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path='uploaded'
							element={<Uploaded />}
						/>
						<Route
							path='*'
							element={<Page404 />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</reatomContext.Provider>
	);
};

export default App;
