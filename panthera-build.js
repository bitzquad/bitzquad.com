import fs from "fs";
import { Langs, AdditionalStaticRoutes, OriginURL, ExcludeInSiteMap, RemovePaths } from "./site-settings.js";

let staticRoutesFromSvelteFiles = null
let siteMap = []

export let GetStaticRoutes = () => {

    if (staticRoutesFromSvelteFiles) {
        return
    }

    staticRoutesFromSvelteFiles = ["*"];


    function genStaticRoutes(dirpath, udirpath) {
        fs.readdirSync(dirpath).forEach(file => {

            if (file.startsWith(".") || file.startsWith("_")) {
                return


            } else if (file.indexOf("[") > -1 && file.endsWith(".svelte")) {
                // Parameraized route

                // Check .routes.js for list of routes
                let upath = file.substring(0, file.length - 7)

                let route = `/${udirpath}${upath}`
                if (RemovePaths.includes(route)) {
                    console.log("Excluding route : ", route)
                    return
                }

                let routesFile = `${dirpath}${upath}.routes.json`
                if (fs.existsSync(routesFile)) {
                    console.log({ routesFile })

                    let definedRoutes = JSON.parse(fs.readFileSync(routesFile))

                    definedRoutes.forEach(droute => {
                        genStaticRoutesForPath(`/${udirpath}${droute}`)
                    })
                } else {
                    console.log("No routes file found for " + file + ". Include " + routesFile + " to generate static routes")
                }

            } else if (file.indexOf("[") > -1 && !file.includes(".")) {
                // Parameraized route directory

                let routesFile = `${dirpath}${file}.routes.json`
                if (fs.existsSync(routesFile)) {
                    console.log({ routesFile })

                    let definedRoutes = JSON.parse(fs.readFileSync(routesFile))

                    definedRoutes.forEach(droute => {
                        // genStaticRoutesForPath(`/${udirpath}${droute}`)
                        genStaticRoutes(`${dirpath}${file}/`, `${udirpath}${droute}/`)
                        console.log({ "path": `${dirpath}${file}/`, "upath": `${udirpath}${droute}/` })
                    })
                } else {
                    console.log("No routes file found for " + file + ". Include " + routesFile + " to generate static routes")
                }



            } else if (file === "index.svelte") {

                let route = `/${udirpath}`

                genStaticRoutesForPath(route)

            } else if (file.endsWith(".svelte")) {

                // Remove extension
                let upath = file.substring(0, file.length - 7)
                let route = `/${udirpath}${upath}`

                if (RemovePaths.includes(route)) {
                    console.log("Excluding route : ", route)
                    return
                }
                genStaticRoutesForPath(route)

            } else if (!file.includes(".")) {
                // Treat as directory
                genStaticRoutes(`${dirpath}${file}/`, `${udirpath}${file}/`)
            }

        });
    }

    genStaticRoutes("src/routes/[pages]/", "")

    AdditionalStaticRoutes.forEach(route => {
        genStaticRoutesForPath(route)
    })

    saveSiteMap()

    console.log("Static Routes generated.")

    return staticRoutesFromSvelteFiles;
}

function genStaticRoutesForPath(route) {
    let langPaths = {}
    Langs.forEach(lang => {
        let filepath
        if (lang === ".") {
            filepath = `${route}`
        } else {
            filepath = `/${lang}${route}`
        }
        staticRoutesFromSvelteFiles.push(filepath)

        langPaths[lang] = filepath

        console.log("Static path : ", filepath)
    });

    addToSiteMap(langPaths)
}

function addToSiteMap(langPaths) {
    if (!ExcludeInSiteMap.includes(langPaths["."])) {
        siteMap.push(langPaths)
    }
}

function saveSiteMap() {
    let strSiteMap =
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:xhtml="http://www.w3.org/1999/xhtml">
`

    let lastMod = new Date().toISOString()

    siteMap.forEach(langPaths => {
        strSiteMap += `
<url>
    <loc>${OriginURL}${langPaths["."]}</loc>
    <lastmod>${lastMod}</lastmod>`

        Langs.forEach(lang => {
            if (lang !== ".") {
                strSiteMap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${OriginURL}${langPaths[lang]}"/>`
            }
        })

        strSiteMap += `
</url>
`
    })

    strSiteMap += `
</urlset>
`

    fs.writeFileSync("static/sitemap.xml", strSiteMap)

}