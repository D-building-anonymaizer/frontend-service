import s from "./style.module.css";
import cx from "classnames";
interface P {
	classNames?: any;
}

export const Hr = ({ classNames }: P) => {
	return <hr className={cx(s.separator, classNames)} />;
};
