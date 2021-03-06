import { lang } from "$lib/siteUtils";

// Do not edit this file manually, it is an auto-generated file.
// If you want to edit this file, please edit the source file in Google Sheets
// and run 'npm run text' command.

export interface HeroSectionText {
	mainTitle: string
	subTitle: string
	description: string
	learnMore: string
}

let TextData = {
	en: {
		"mainTitle": "Solutions Beyond Technology",
		"subTitle": "Welcome to Bitzquad",
		"description": "We are a team of thinkers, engineers, designers, and marketers who represent different cultures around the globe, working together to build better solutions for a better world.",
		"learnMore": "Learn More"
	} as HeroSectionText,
}

export default function (): HeroSectionText {
    return TextData[lang];
}