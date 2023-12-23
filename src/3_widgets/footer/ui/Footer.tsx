import React from 'react'
import { Link } from 'react-router-dom'
import s from "./style.module.css";

export const Footer = () => {
	return (
		<footer className={s.footer}>
				<div className={s.footer_links}>
					<button className={s.footer_links__item}>Обратная связь</button>
					<Link to={''} className={s.footer_links__item}>Помощь</Link>
				</div>
			</footer>
	)
}
