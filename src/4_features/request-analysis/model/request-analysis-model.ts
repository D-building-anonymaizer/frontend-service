import { action, reatomAsync } from "@reatom/framework";
import { send } from "../api/request-analysis-api";

export const sendFileAction = reatomAsync((ctx, file: FormData) => send(file), {
	name: "sendFileAction",
});
