
// "." is the root language. Pages should alias it to English.
export let Langs = [".", "en", "si"]
export let defaultLang = "en"

// Additional Static Routes that are
// not detected from link crawling or directory structure
// Typically these are routes with path parameters
export let AdditionalStaticRoutes = [
]

export let RemovePaths = [
    "/about",
]

export let ExcludeInSiteMap = [
    "/error",
]

export let OriginURL = "https://bitzquad.com"

export let TextFolder = "./src/lib/Text"
export let TextTSV_URL = "https://docs.google.com/spreadsheets/d/1KskuvNHKYRGvoMbk4izAkUITJB7mKAgDLcDm_2mVeBQ/export?format=tsv&id=1KskuvNHKYRGvoMbk4izAkUITJB7mKAgDLcDm_2mVeBQ&gid=0"
export let TextTSV_Header_Section = "Section"
export let TextTSV_Header_Identifier = "Identifier"

export let TextTSV_Header_Languages = {
    "English": "en",
    "Sinhala": "si",
    "Italian": "it",
    "Japanese": "ja",
    "Chinese": "zh",
    "Tamil": "ta",
}