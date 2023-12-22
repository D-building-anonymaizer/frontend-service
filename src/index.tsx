import { createRoot } from "react-dom/client";
import App from "./1_app/App";
import { connectLogger } from "@reatom/framework";

import bridge from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";

import "./6_shared/styles/styles.css";
import { ctx } from "./6_shared/lib/reatom/ctx";
import { fetchAuth } from "./6_shared/lib/reatom/actions/fetchAuth";

bridge.send("VKWebAppInit").then((res) => res && fetchAuth(ctx));

process.env.NODE_ENV === "development" && connectLogger(ctx);

createRoot(document.getElementById("root") as Element).render(<App />);
