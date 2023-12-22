import axios from "axios";
import { ctx } from '../lib/reatom/ctx';

export const instance = axios.create({
	baseURL: "https://ivanovo.radmate.ru/api/",
	responseType: "json",
});
