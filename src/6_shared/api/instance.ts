import axios from "axios";
import { ctx } from "../lib/reatom/ctx";

export const instance = axios.create({
	baseURL: "http://localhost:1337/",
	responseType: "json",
});
