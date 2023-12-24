import { instance } from "../../../6_shared/api/instance";

export const send = async (file: FormData) => {
	return await instance
		.post("/analize", file)
		.then((res) => {
			console.log(res);
			return true;
		})
		.catch((res) => {
			console.error(res);
			return false;
		});
};
