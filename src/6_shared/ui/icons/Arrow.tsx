import React from "react";
import cx from "classnames";

interface P {
	fill?: any;
	classNames?: any;
}

const Arrow = ({ fill, classNames }: P) => {
	return (
		<svg
			className={classNames}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M5.46479 13.3994C5.16528 13.6562 4.71435 13.6215 4.45762 13.322C4.20089 13.0224 4.23557 12.5715 4.53509 12.3148L9.53509 8.02907C9.80258 7.79979 10.1973 7.79979 10.4648 8.02907L15.4648 12.3148C15.7643 12.5715 15.799 13.0224 15.5423 13.322C15.2855 13.6215 14.8346 13.6562 14.5351 13.3994L9.99994 9.51217L5.46479 13.3994Z"
				fill="currentcolor"
			/>
		</svg>
	);
};

export default Arrow;
