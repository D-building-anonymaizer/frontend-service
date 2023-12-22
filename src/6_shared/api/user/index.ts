import { devLog } from "../../lib/utils/devLog";
import { instance } from "./../instance";

export const auth = async (data: any): Promise<any> => {
	const dataVals = Object.values(data);
	const dataKeys = Object.keys(data);
	const sign = dataKeys.reduce((s, el, i) => {
		if (i < dataKeys.length - 1) return (s += `${el}=${dataVals[i]}&`);
		return (s += `${el}=${dataVals[i]}`);
	}, "Bearer ?");

	return await instance
		.post(
			"auth/signUpIn",
			{},
			{
				headers: {
					Authorization: sign,
				},
			}
		)
		.then((res) => {
			instance.defaults.headers.common["Authorization"] = sign;
			devLog(res);
			return sign;
		})
		.catch((res) => {
			console.error(res);
			return false;
		});
};
