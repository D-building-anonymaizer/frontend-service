import { reatomContext } from "@reatom/npm-react";
import { ctx } from "../6_shared/lib/reatom/ctx";



const App = (): JSX.Element => {
	return (
		<reatomContext.Provider value={ctx}>
		
		</reatomContext.Provider>
	);
};

export default App;
