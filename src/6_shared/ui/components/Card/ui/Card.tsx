import s from "./style.module.css";
import cx from "classnames";

interface P {
	classname?: any;
	children?: any;
	padding?: number | string;
	onClick?: () => void;
}

export const Card = ({ classname, padding = 16, children, onClick }: P) => {
	return (
		<div
			className={cx(s.card_wrapper, classname)}
			style={{ padding: padding }}
			onClick={onClick}>
			{children}
		</div>
	);
};
