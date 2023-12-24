import React from "react";
import { Link, useNavigate } from "react-router-dom";
import s from "./style.module.css";

export const Header = () => {
	const navigate = useNavigate();

	return (
		<header className={s.header}>
			<span
				onClick={() => {
					navigate("/");
				}}
				className={s.title}>
				Анонимайзер
			</span>
		</header>
	);
};
