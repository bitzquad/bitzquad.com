import { Langs, DefaultLang } from "./siteSettings";

export let lang: string = DefaultLang;

export function DetectLanguage(para: string) {
	if (para == ".") {
		para = DefaultLang;
	}

	if (Langs.includes(para)) {
		lang = para;
		return lang;
	} else {
		lang = DefaultLang;
		return lang;
	}
}

// Returns normalized path without the language. Format : path/to/page
export function NormalizePath(path: string): string {
	// Ideal path format : path/to/page

	if (path.startsWith("/")) {
		path = path.substring(1);
	}

	if (path.endsWith("/")) {
		path = path.substring(0, path.length - 1);
	}

	let upath: string;

	let pathsegs = path.split("/");
	if (pathsegs.length == 1) {
		if (Langs.includes(pathsegs[0])) {
			upath = "";
		} else {
			upath = path;
		}
	} else {
		if (Langs.includes(pathsegs[0])) {
			upath = pathsegs.slice(1).join("/");
		} else {
			upath = path;
		}
	}

	return upath;
}

export function PathForLanguage(path: string, language: string): string {
	let upath = NormalizePath(path);

	if (language == DefaultLang) {
		return "/" + upath;
	} else {
		return "/" + language + "/" + upath;
	}
}

// Formats a path for the current language. Should be used for all links.
export function Path(absolutePath: string) {
	return PathForLanguage(absolutePath, lang);
}

export function GetLanguageFromPath(path: string): string {
	if (path.startsWith("/")) {
		path = path.substring(1);
	}

	let pathsegs = path.split("/");

	if (pathsegs.length == 0) {
		return DefaultLang;
	} else {
		return DetectLanguage(pathsegs[0]);
	}
}
