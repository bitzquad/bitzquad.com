import { lang } from "$lib/siteUtils";

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
	si: {
		"mainTitle": "Solutions Beyond Technology",
		"subTitle": "Bitzquad වෙත ඔබව සාදරයෙන් පිළිගනිමු.",
		"description": "",
		"learnMore": "වැඩිදුර තොරතුරු"
	} as HeroSectionText,
	it: {
		"mainTitle": "Soluzioni oltre la Tecnologia",
		"subTitle": "Benvenuti su Blitzquad",
		"description": "",
		"learnMore": "Scopri di più"
	} as HeroSectionText,
	ja: {
		"mainTitle": "",
		"subTitle": "",
		"description": "",
		"learnMore": ""
	} as HeroSectionText,
	zh: {
		"mainTitle": "",
		"subTitle": "",
		"description": "",
		"learnMore": ""
	} as HeroSectionText,
	ta: {
		"mainTitle": "",
		"subTitle": "",
		"description": "",
		"learnMore": ""
	} as HeroSectionText,
}

export default function (): HeroSectionText {
    return TextData[lang];
}