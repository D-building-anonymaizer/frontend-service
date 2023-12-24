import React from "react";
import { Link, useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { closeService } from "../api/header-api";

export const Header = () => {
	const navigate = useNavigate();
	
	const handleClose = () => {
		closeService();
		window.close();
	};

	return (
		<header className={s.header}>
			<span
				onClick={() => {
					navigate("/");
				}}
				className={s.title}>
				Анонимайзер
			</span>
			<button onClick={handleClose}>Закрыть сервис</button>
		</header>
	);
};
