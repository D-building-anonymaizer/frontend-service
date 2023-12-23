import { Outlet } from "react-router";
import s from "./style.module.css";
import { Footer } from "../../../3_widgets/footer/ui/Footer";
import { Header } from "../../../3_widgets/header/ui/Header";

export const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
