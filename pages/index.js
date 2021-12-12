import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/images/bitz.png" height="100rem" width="100rem" alt="Bitzqaud" />

        <h1 className="text-blue-500">
          Sample{' '}
          <Link href="/posts/first-post">
            <a>Link to a page</a>
          </Link>
        </h1>

        <p className="text-sky-600 text-xl ">
          Get started by editing <code>pages/index.js</code>
        </p>
        <br />
        <p>
          Add new pages to <font className="code">/pages</font> as <font className="code">.js</font> files and they'll automatically appear in our website.
          <br />
          For example, you can create a <font className="code" >pages/post/bitz.js</font> and it will generate <font className="code" >bitzquad.com/post/bitz.html</font>
        </p>


      </main>

      <style jsx>{`
      .code {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        color: #444;
        background-color: #f6f8fa;
        padding: 0.2em 0.4em;
        border-radius: 3px;
      }
    `}</style>

    </div>




  )
}
