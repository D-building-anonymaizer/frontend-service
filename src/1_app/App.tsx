import { reatomContext } from "@reatom/npm-react";
import {
	createHashRouter
} from "@vkontakte/vk-mini-apps-router";
import { ctx } from "../6_shared/lib/reatom/ctx";


const router = createHashRouter(routes);

const App = (): JSX.Element => {
	return (
		<reatomContext.Provider value={ctx}>
		
		</reatomContext.Provider>
	);
};

export default App;
