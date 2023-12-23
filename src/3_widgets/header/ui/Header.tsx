import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export const Header = () => {
	return (
		<header className={s.header}>
			<span className={s.title}>Анонимайзер</span>
		</header>
	);
};
