import { lang } from "$lib/siteUtils";

export interface NavbarText {
	services: string
	contact: string
	blog: string
	about: string
}

let TextData = {
	en: {
		"services": "Services",
		"contact": "Contact",
		"blog": "News",
		"about": "About"
	} as NavbarText,
	si: {
		"services": "සේවාවන්",
		"contact": "සම්බන්ධ කරගන්න / අමතන්න",
		"blog": "පුවත්",
		"about": "අපි ගැන"
	} as NavbarText,
	it: {
		"services": "Servizi",
		"contact": "Contatti",
		"blog": "Novità",
		"about": ""
	} as NavbarText,
	ja: {
		"services": "",
		"contact": "",
		"blog": "",
		"about": ""
	} as NavbarText,
	zh: {
		"services": "",
		"contact": "",
		"blog": "",
		"about": ""
	} as NavbarText,
	ta: {
		"services": "",
		"contact": "",
		"blog": "",
		"about": ""
	} as NavbarText,
}

export default function (): NavbarText {
    return TextData[lang];
}