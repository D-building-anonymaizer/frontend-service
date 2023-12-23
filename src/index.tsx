import { connectLogger } from "@reatom/framework";
import { createRoot } from "react-dom/client";
import App from "./1_app/App";

import { ctx } from "./6_shared/lib/reatom/ctx";
import "./6_shared/styles/styles.css";
import { hot } from "react-hot-loader";

process.env.NODE_ENV === "development" && connectLogger(ctx);
process.env.NODE_ENV === "development"
	? hot(createRoot(document.getElementById("root") as Element).render(<App />))
	: createRoot(document.getElementById("root") as Element).render(<App />);
