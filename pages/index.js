import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="twitter:site" content="@themetags" />
        <meta name="twitter:creator" content="@themetags" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quiety - Creative SAAS Technology & IT Solutions Bootstrap 5 HTML Template"
        />
        <meta
          name="twitter:description"
          content="Quiety creative Saas, software technology, Saas agency & business Bootstrap 5 Html template. It is best and famous software company and Saas website template."
        />
        <meta name="twitter:image" content="#" />

        <meta property="og:url" content="#" />
        <meta
          name="twitter:title"
          content="Quiety - Creative SAAS Technology & IT Solutions Bootstrap 5 HTML Template"
        />
        <meta
          property="og:description"
          content="Quiety creative Saas, software technology, Saas agency & business Bootstrap 5 Html template. It is best and famous software company and Saas website template."
        />
        <meta property="og:image" content="#" />
        <meta property="og:image:secure_url" content="#" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta
          name="description"
          content="Quiety creative Saas, software technology, Saas agency & business Bootstrap 5 Html template. It is best and famous software company and Saas website template."
        />
        <meta name="author" content="ThemeTags" />

        <title>Bitzquad - Software & IT Solutions</title>

        <link
          rel="icon"
          href="img/favicon.png"
          type="image/png"
          sizes="16x16"
        />
      </Head>

      <main>
        <img
          src="/images/bitz.png"
          height="100rem"
          width="100rem"
          alt="Bitzqaud"
        />
        <div className="text"></div>

        <h1 className="text-blue-500">
          Sample{" "}
          <Link href="/posts/first-post">
            <a>Link to a page</a>
          </Link>
        </h1>

        <p className="text-sky-600 text-xl ">
          Get started by editing <code>pages/index.js</code>
        </p>
        <br />
        <p>
          Add new pages to <font className="code">/pages</font> as{" "}
          <font className="code">.js</font> files and they'll automatically
          appear in our website.
          <br />
          For example, you can create a{" "}
          <font className="code">pages/post/bitz.js</font> and it will generate{" "}
          <font className="code">bitzquad.com/post/bitz.html</font>
        </p>
      </main>

      <style jsx>{`
        .code {
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo,
            Courier, monospace;
          color: #444;
          background-color: #f6f8fa;
          padding: 0.2em 0.4em;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
