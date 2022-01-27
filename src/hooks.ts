import { Langs, DefaultLang } from "$lib/siteSettings";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

  let path = MapPath(event.url.pathname);

  console.log("HOOK : ", event.url.pathname, " -> ", path);

  event.url.pathname = path;

  const response = await resolve(event);

  return response;
}


function MapPath(path: string) {


  if (!path) {
    return "/" + DefaultLang;
  }

  let pathsegs = path.split("/");
  if (pathsegs.length == 0) {
    return "/" + DefaultLang;

  } else {
    if (Langs.includes(pathsegs[1])) {
      return path;
    } else {
      return "/" + DefaultLang + path;
    }
  }

}
