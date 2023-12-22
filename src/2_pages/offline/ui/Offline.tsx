import s from "./style.module.css";

export const Offline = () => {
	return (
		<div>
			<div className={s.not_found_wrapper}>
				<div className={s.not_found_card}>
					<div className={s.line_wrapper}>
						<div className={s.line} />
					</div>
					<span className='p2__medium'>Отсутствует подключение к сети</span>
				</div>
			</div>
			<div className='bg-color--light' />
		</div>
	);
};
