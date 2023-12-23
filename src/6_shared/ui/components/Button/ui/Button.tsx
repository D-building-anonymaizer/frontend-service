import React, { FC } from "react";
import s from "./style.module.css";

interface P {
	onClick: (arg0: any) => void;
	children?: string | JSX.Element | number;
}

export const Button = ({ children, onClick }: P) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className={s.button}>
			{children}
		</button>
	);
};
