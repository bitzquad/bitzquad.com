import { lang } from "$lib/siteUtils";

export interface WorldWithUsText {
	title: string
	description: string
}

let TextData = {
	en: {
		"title": "The world with us",
		"description": "We come from different places but have the same name"
	} as WorldWithUsText,
	si: {
		"title": "",
		"description": ""
	} as WorldWithUsText,
	it: {
		"title": "",
		"description": ""
	} as WorldWithUsText,
	ja: {
		"title": "",
		"description": ""
	} as WorldWithUsText,
	zh: {
		"title": "",
		"description": ""
	} as WorldWithUsText,
	ta: {
		"title": "",
		"description": ""
	} as WorldWithUsText,
}

export default function (): WorldWithUsText {
    return TextData[lang];
}