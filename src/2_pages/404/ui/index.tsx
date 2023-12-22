import s from "./style.module.css";

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import {
	Card,
	Div,
	Title,
	Panel,
	Spacing,
	Text,
	useAppearance,
	AppearanceProvider,
} from "@vkontakte/vkui";

export const Page404 = () => {
	const routeNavigator = useRouteNavigator();
	const appereance = useAppearance();

	return (
		<Panel>
			<Card className={s.card}>
				<Div>
					<Title style={{ color: "#5f7eee" }}>404</Title>
					<Spacing />
					<Text>
						Данной страницы <br /> не существует
					</Text>
					<Spacing size={8} />
					<Text
						style={{ color: "#5f7eee" }}
						onClick={() => routeNavigator.replace("/")}>
						На главную
					</Text>
				</Div>
			</Card>
		</Panel>
	);
};
