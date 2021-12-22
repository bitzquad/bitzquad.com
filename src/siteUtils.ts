// "." is the root language. Pages should alias it to English.
// export default [".", "en", "si", "fr"];

import { Langs, DefaultLang } from "./siteSettings";

export function GetLanguage(para: string) {
    let lang = para == "." ? DefaultLang : para;
    if (Langs.includes(lang)) {
        return lang;
    } else {
        return DefaultLang;
    }
}