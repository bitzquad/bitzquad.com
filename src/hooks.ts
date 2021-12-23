import { Langs, DefaultLang } from "./siteSettings";
import { Path } from "./siteUtils";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, resolve }) {
  // request.locals.user = await getUserInformation(request.headers.cookie);


  let path = MapPath(request.path);

  console.log("HOOK : ", request.path, " -> ", path);

  request.path = path;



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
