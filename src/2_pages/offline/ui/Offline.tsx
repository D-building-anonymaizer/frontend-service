import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import s from "./style.module.css";

import { Icon56WifiOutline } from "@vkontakte/icons";

export const Offline = () => {
	const routeNavigator = useRouteNavigator();
	return (
		<div>
			<div className={s.not_found_wrapper}>
				<div className={s.not_found_card}>
					<div className={s.line_wrapper}>
						<div className={s.line} />
					</div>
					<Icon56WifiOutline fill="var(--blue)" width={150} height={150} />
					<span className="p2__medium">Отсутствует подключение к сети</span>
					
				</div>
			</div>
			<div className="bg-color--light" />
		</div>
	);
};
