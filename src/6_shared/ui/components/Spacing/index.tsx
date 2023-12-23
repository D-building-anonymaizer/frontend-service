import React from "react";

interface P {
	size: number;
}

export const Spacing = ({ size = 16 }: P) => {
	return <div style={{ margin: `${size}px 0`, width: "100%" }}></div>;
};
