import { lang } from "$lib/siteUtils";

// Do not edit this file manually, it is an auto-generated file.
// If you want to edit this file, please edit the source file in Google Sheets
// and run 'npm run text' command.

export interface WorldWithUsText {
	title: string
	description: string
}

let TextData = {
	en: {
		"title": "The world with us",
		"description": "We come from different places but have the same name"
	} as WorldWithUsText,
}

export default function (): WorldWithUsText {
    return TextData[lang];
}