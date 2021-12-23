// "." is the root language. Pages should alias it to English.
// export default [".", "en", "si", "fr"];

import { Langs, DefaultLang } from "./siteSettings";

export let LanguagePreference: string = DefaultLang;

export function DetectLanguage(para: string) {
    let lang = para == "." ? DefaultLang : para;

    if (Langs.includes(lang)) {
        LanguagePreference = lang;
        return LanguagePreference;

    } else {
        LanguagePreference = DefaultLang;
        return LanguagePreference;

    }
}


export function PathForLanguage(path: string, lang: string) {


    // Ideal path format : path/to/page

    if (path.startsWith("/")) {
        path = path.substring(1);
    }

    if (path.endsWith("/")) {
        path = path.substring(0, path.length - 1);
    }


    // Unique path withouth the language. Format : path/to/page
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

    if (lang == DefaultLang) {
        return "/" + upath;
    } else {
        return "/" + lang + "/" + upath;
    }

}

// Formats a path for the current language. Should be used for all links.
export function Path(absolutePath: string) {
    return PathForLanguage(absolutePath, LanguagePreference);
}