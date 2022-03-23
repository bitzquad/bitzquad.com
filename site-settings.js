
// "." is the root language. Pages should alias it to English.
export let Langs = [".", "en", "si", "fr"]
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