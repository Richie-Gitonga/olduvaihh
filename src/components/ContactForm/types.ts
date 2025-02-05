import { TFunction } from "react-i18next";
export interface ContactProps {
	title: string;
	content: string;
	id: string;
	t: TFunction;
	contacts: {
		icon: string;
		title: string;
		text: string;
		link: string;
	}[];
}

export interface ValidationTypeProps {
	type: string;
}
