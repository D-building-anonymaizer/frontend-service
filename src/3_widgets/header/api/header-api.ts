import { instance } from "../../../6_shared/api/instance";
export const closeService = async () => {
	return await instance
		.post("/exit")
		.then((res) => {
			console.log(res);
		})
		.catch((res) => {
			console.error(res);
		});
};
