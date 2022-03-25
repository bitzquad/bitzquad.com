import { lang } from "$lib/siteUtils";

export interface ServicesSectionText {
	title: string
	sysTitle: string
	sysDescription: string
	appTitle: string
	appDescription: string
	blockchainTitle: string
	blockchainDescription: string
	brandTitle: string
	brandDescription: string
	marketingTitle: string
	marketingDescription: string
	ecommerceTitle: string
	ecommerceDescription: string
}

let TextData = {
	en: {
		"title": "Our Services",
		"sysTitle": "Information Systems",
		"sysDescription": "Upgrade with the best technology that helps your business grow",
		"appTitle": "Software Development",
		"appDescription": "Powerful, yet intuitive web, desktop and mobile apps",
		"blockchainTitle": "Blockchain Solutions",
		"blockchainDescription": "Prepare for the next technological revolution of decentralizing",
		"brandTitle": "Brand Design",
		"brandDescription": "Build a solid brand that one day, everyone will know",
		"marketingTitle": "Digital Marketing",
		"marketingDescription": "Let us bring your presence to your future customers",
		"ecommerceTitle": "E-commerce",
		"ecommerceDescription": "We develop e-commerce applications using the latest technologies"
	} as ServicesSectionText,
	si: {
		"title": "අපගේ සේවා",
		"sysTitle": "තොරතුරු පද්ධති නිර්මාණය",
		"sysDescription": "",
		"appTitle": "මෘදුකාංග නිර්මාණය",
		"appDescription": "",
		"blockchainTitle": "Blockchain නිර්මාණ",
		"blockchainDescription": "",
		"brandTitle": "වෙළඳ සන්නාම නිර්මාණය",
		"brandDescription": "",
		"marketingTitle": "ඩිජිටල් අලෙවිකරණය",
		"marketingDescription": "",
		"ecommerceTitle": "E වාණිජ්‍යය",
		"ecommerceDescription": ""
	} as ServicesSectionText,
	it: {
		"title": "I nostri Servizi",
		"sysTitle": "Sistemi di Informazione",
		"sysDescription": "",
		"appTitle": "Sviluppo Software",
		"appDescription": "",
		"blockchainTitle": "",
		"blockchainDescription": "",
		"brandTitle": "",
		"brandDescription": "",
		"marketingTitle": "Marketing Digitale",
		"marketingDescription": "",
		"ecommerceTitle": "E-commerce",
		"ecommerceDescription": ""
	} as ServicesSectionText,
	ja: {
		"title": "",
		"sysTitle": "",
		"sysDescription": "",
		"appTitle": "",
		"appDescription": "",
		"blockchainTitle": "",
		"blockchainDescription": "",
		"brandTitle": "",
		"brandDescription": "",
		"marketingTitle": "",
		"marketingDescription": "",
		"ecommerceTitle": "",
		"ecommerceDescription": ""
	} as ServicesSectionText,
	zh: {
		"title": "",
		"sysTitle": "",
		"sysDescription": "",
		"appTitle": "",
		"appDescription": "",
		"blockchainTitle": "",
		"blockchainDescription": "",
		"brandTitle": "",
		"brandDescription": "",
		"marketingTitle": "",
		"marketingDescription": "",
		"ecommerceTitle": "",
		"ecommerceDescription": ""
	} as ServicesSectionText,
	ta: {
		"title": "",
		"sysTitle": "",
		"sysDescription": "",
		"appTitle": "",
		"appDescription": "",
		"blockchainTitle": "",
		"blockchainDescription": "",
		"brandTitle": "",
		"brandDescription": "",
		"marketingTitle": "",
		"marketingDescription": "",
		"ecommerceTitle": "",
		"ecommerceDescription": ""
	} as ServicesSectionText,
}

export default function (): ServicesSectionText {
    return TextData[lang];
}