import { reatomContext } from "@reatom/npm-react";
import { Route, Router, Routes } from "react-router";
import { Page404 } from "../2_pages/404/ui/index";
import { ctx } from "../6_shared/lib/reatom/ctx";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./../2_pages/home/ui/Home";
import { hot } from "react-hot-loader";

const App = (): JSX.Element => {
	return (
		<reatomContext.Provider value={ctx}>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route
							index
							element={<Home />}
						/>
						{/* 
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='dashboard'
						element={<Dashboard />}
					/> */}

						{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
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
