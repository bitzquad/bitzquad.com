import { lang } from "$lib/siteUtils";

// Do not edit this file manually, it is an auto-generated file.
// If you want to edit this file, please edit the source file in Google Sheets
// and run 'npm run text' command.

export interface ServiceSoftwareText {
	featureTitle: string
	featureDescription: string
}

let TextData = {
	en: {
		"featureTitle": "Fast Powerful & Instinctive",
		"featureDescription": "We develop desktop and mobile apps that run on every platform identically using modern technologies. Your app will look and feel the same way on desktops, laptops, and mobile phones. These apps outperform the traditional platform-dependent apps. "
	} as ServiceSoftwareText,
}

export default function (): ServiceSoftwareText {
    return TextData[lang];
}