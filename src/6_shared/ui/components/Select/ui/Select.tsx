import { useState, useEffect, useRef } from "react";
import cx from "classnames";
import s from "./style.module.css";
import Cross from "../../../icons/Cross";
import Arrow from "../../../icons/Arrow";

interface P {
	options: any;
	disabled?: boolean;
	placeholder: string;
	multiply?: boolean;
	onChangeValue?: any;
}

interface option {
	value: string;
	label: string;
}

export const Select = ({
	options,
	disabled,
	placeholder,
	onChangeValue,
	multiply = false,
}: P) => {
	const [selected, setSelected] = useState<option | null>(null);
	const [isFocused, setFocused] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleOpen = () => {
		setFocused(!isFocused);
	};

	const handleSelect = async (e: any) => {
		await onChangeValue(selected);
		setSelected(options.find((el: any) => el.value === e.target.id));
		setFocused(false);
	};

	useEffect(() => {
		const handle = (e: any) => {
			if (!wrapperRef.current?.contains(e.target)) {
				setFocused(false);
			}
		};
		window.addEventListener("mousedown", (e) => handle(e));
		return window.removeEventListener("mousedown", (e) => handle(e));
	}, []);

	return (
		<div
			className={cx(s.select__wrapper, isFocused && s.active)}
			ref={wrapperRef}>
			<div className={cx(s.select__selected, "p4")} onClick={handleOpen}>
				{!!selected ? selected?.label : placeholder}
				<Arrow classNames={cx(s.arrow, isFocused ? s.active : null)} />
			</div>
			<div className={cx(s.select__options_list)}>
				{options.map((el: any, i: any) => (
					<div
						className={cx(
							s.select__options_list__item,
							el.value === selected?.value ? s.active : null
						)}
						id={el.value}
						key={el.value}
						onClick={(e) => handleSelect(e)}>
						{el.label}
					</div>
				))}
			</div>
		</div>
	);
};
