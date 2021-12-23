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

// /** @type {import('@sveltejs/kit').RequestHandler} */
// export async function get({ params }) {
//   // the `slug` parameter is available because this file
//   // is called [slug].json.js
//   const { resolver } = params;

//   if (!resolver) {
//     return {
//       status: 404,
//     };
//   }


//   let Mirror = true;

//   let paths = resolver.split("/");
//   if (paths && paths.length > 0) {
//     let lang = paths[0];
//     if (Langs.includes(lang)) {
//       Mirror = false;
//     }
//   }

//   if (Mirror) {
//     let murl = "http://localhost:3000/" + DefaultLang + "/" + resolver;
//     console.log(`Mirroring ${murl}`);
//     let mres = await fetch(murl);
//     let mdata = await mres.text();
//     return {
//       status: 200,
//       body: mdata,
//     };

//   } else {
//     return {
//       status: 404,
//     };
//   }


// }

