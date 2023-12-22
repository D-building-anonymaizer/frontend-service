export function devLog(message?: any, ...optionalParams: any[]) {
	if (process.env.NODE_ENV === "development" && message !== undefined)
		console.log(message, optionalParams);
}