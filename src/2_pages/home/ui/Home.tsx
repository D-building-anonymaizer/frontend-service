import s from "./style.module.css";
import cx from "classnames";
import FileIcon from "./../../../6_shared/styles/assets/file_icon.png";
import { Spacing } from "../../../6_shared/ui/components/Spacing/";
import { Button } from "./../../../6_shared/ui/components/Button/";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

export const Home = () => {
	const navigate = useNavigate();
	const [fileState, setFileState] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const dropZoneRef = useRef<HTMLDivElement | null>(null);

	const handleClick = (e: any) => {
		const input = fileInputRef.current;
		if (input) {
			input.click();
		}
	};

	useLayoutEffect(() => {
		const dropZone = dropZoneRef.current;
		if (dropZone) {
			let hoverClassName = "hover";

			dropZone.addEventListener("dragenter", function (e) {
				e.preventDefault();
				dropZone.classList.add(hoverClassName);
			});

			dropZone.addEventListener("dragover", function (e) {
				e.preventDefault();
				dropZone.classList.add(hoverClassName);
			});

			dropZone.addEventListener("dragleave", function (e) {
				e.preventDefault();
				dropZone.classList.remove(hoverClassName);
			});

			// Это самое важное событие, событие, которое дает доступ к файлам
			dropZone.addEventListener("drop", function (e) {
				e.preventDefault();
				dropZone.classList.remove(hoverClassName);
				if (e.dataTransfer?.files) {
					const files = Array.from(e.dataTransfer.files);
					console.log(files);
					setFileState(files[0]);
				}
			});
		}
	}, [fileInputRef.current]);

	return (
		<>
			<Spacing size={15} />
			<form className={s.form}>
				<input
					maxLength={1}
					accept='.doc,.docx, image/png, image/jpeg, image/jpg'
					onChange={(e) => {
						if (e.target.files) {
							setFileState(e.target.files[0]);
							// navigate("/uploaded");
						}
					}}
					ref={fileInputRef}
					className={s.form__input}
					type='file'
					name='file'
				/>
				<div className={s.drop_zone_wrapper}>
					<div
						ref={dropZoneRef}
						className={s.drop_zone}>
						<img
							src={FileIcon}
							alt='file'
							className={s.drop_zone__icon}
						/>
						<span className={s.drop_zone__text}>
							{fileState ? fileState.name : "Перетащите файлы сюда"}
						</span>
					</div>
				</div>
				<Spacing size={70} />
				<div className={s.choose_file}>
					<Button onClick={(e) => handleClick(e)}>Выберите файл</Button>
					<span className={s.choose_file__caption}>
						Допустимые форматы: *.jpeg, *.png, *.pdf, *.doc(x)
					</span>
				</div>
			</form>
		</>
	);
};
