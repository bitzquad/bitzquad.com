import { Langs, DefaultLang } from "$lib/siteSettings";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {

  let path = MapPath(request.url.pathname);

  console.log("HOOK : ", request.url.pathname, " -> ", path);

  request.url.pathname = path;

  const response = await resolve(request);

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
