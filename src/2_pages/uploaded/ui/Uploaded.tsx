import { useAction, useAtom } from "@reatom/npm-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { sendFileAction } from "../../../4_features/request-analysis/model/request-analysis-model";
import { Spacing } from "../../../6_shared/ui/components/Spacing/";
import { uploadedFilesAtom } from "../model/uploaded-model";
import { Button } from "./../../../6_shared/ui/components/Button/";
import s from "./style.module.css";
import cx from "classnames";
import { formatBytes } from "../../../6_shared/lib/utils/countKiloBytes";

export const Uploaded = () => {
	const navigate = useNavigate();
	const sendFile = useAction(sendFileAction);
	const [uploadedFiles, setUploadedFiles] = useAtom(uploadedFilesAtom);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const [fileState, setFileState] = useState<File | null>(null);
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleClick = (e: any) => {
		const input = fileInputRef.current;
		if (input) {
			input.click();
		}
	};

	useEffect(() => {
		if (fileState && formRef.current) {
			console.log(fileState);
			const data = new FormData(formRef.current);
			data.append("file", fileState);
			sendFile(data);
		}
	}, [fileState]);

	return (
		<div style={{ padding: "0 100px" }}>
			<Spacing size={15} />
			<form
				className={s.form}
				ref={formRef}>
				<input
					maxLength={1}
					accept='.doc, .docx, image/png, image/jpeg, image/jpg'
					onChange={(e) => {
						if (e.target.files?.length) {
							const date = new Date();
							const newFile: FileForAnalysis = {
								file: e.target.files[0],
								uploadDate: date.toLocaleString(),
								processed: false,
							};
							setFileState(e.target.files[0]);
							setUploadedFiles([...uploadedFiles, newFile]);
						}
					}}
					ref={fileInputRef}
					className={s.form__input}
					type='file'
					name='file'
				/>
				<div className={s.choose_file}>
					<Button onClick={(e) => handleClick(e)}>Выберите файл</Button>
					<span className={s.choose_file__caption}>
						Допустимые форматы: *.jpeg, *.jpg, *.png, *.doc(x)
					</span>
				</div>
			</form>
			<Spacing size={40} />

			<div className={s.wrapper__bg}>
				<div className={s.file_list__fields_titles}>
					<div
						className={s.field_title}
						style={{ width: "11.5vw", textAlign: "center" }}>
						Имя
					</div>
					<div className={s.field_title}>Дата загрузки</div>
					<div className={cx(s.field_title, s.size)}>Размер</div>
					<div className={s.field_title}>Статус</div>
				</div>
				<Spacing size={10} />

				<div className={cx(s.wrapper, !uploadedFiles.length && s.empty)}>
					{uploadedFiles.length ? (
						uploadedFiles.map((el) => {
							return (
								<>
									<div className={s.file_card}>
										<span className={s.file_card__name}>{el.file.name}</span>
										<div className={s.file_card__upload_date}>
											{el.uploadDate}
										</div>
										<span className={cx(s.file_card__size)}>
											{formatBytes(el.file.size)}
										</span>
										{el.processed ? (
											<a
												href={`./../output/${el.file.name}`}
												download={el.processed}
												className={s.file_card__status}>
												Скачать
											</a>
										) : (
											<div className={s.error_wrapper}>
												<span className={s.file_card__status}>
													Ошибка при анализе
												</span>
												<button className={s.delete}>
													<svg
														width='800px'
														height='800px'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M10 12V17'
															stroke='#000000'
															stroke-width='2'
															stroke-linecap='round'
															stroke-linejoin='round'
														/>
														<path
															d='M14 12V17'
															stroke='#000000'
															stroke-width='2'
															stroke-linecap='round'
															stroke-linejoin='round'
														/>
														<path
															d='M4 7H20'
															stroke='#000000'
															stroke-width='2'
															stroke-linecap='round'
															stroke-linejoin='round'
														/>
														<path
															d='M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10'
															stroke='#000000'
															stroke-width='2'
															stroke-linecap='round'
															stroke-linejoin='round'
														/>
														<path
															d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z'
															stroke='#000000'
															stroke-width='2'
															stroke-linecap='round'
															stroke-linejoin='round'
														/>
													</svg>
												</button>
											</div>
										)}
									</div>
								</>
							);
						})
					) : (
						<div className={s.empty_list}>Нет загруженных файлов</div>
					)}
				</div>
			</div>
		</div>
	);
};
