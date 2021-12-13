import Head from 'next/head';
import Link from 'next/link';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/layout';
import Social from '../components/Social';

export default function Home() {
  return (
    <Layout>
      <div className="w-screen">
        <Head>
          <title>Bitzquad</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main">
          <div className="col-left">
            <div className=" bg-gray-900 bg-opacity-40 rounded-lg shadow-xl ">
              <Countdown />
            </div>
          </div>
          <div className="col-right">
            <Header />
            <div className="w-3/4 mt-20 ml-10">
              <h3 className="text-gray-100 font-semibold text-5xl ">
                COMMING SOON
              </h3>
              <p className="text-gray-300 font-light mt-2">
                Our website is currently undergoing scheduled maintenance. We
                Should be back shortly. Thank you for your patience.
              </p>
              <div className="socialContainer">
                <Social
                  svg={
                    <svg
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                  }
                  title="Facebook"
                  url="https://facebook.com/bitzquad"
                />
                <Social
                  svg={
                    <svg
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                  }
                  title="Github"
                  url="https://github.com/bitzquad"
                />
              </div>
            </div>
          </div>
        </main>

        <style jsx>
          {`
            .code {
              font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
                Courier, monospace;
              color: #444;
              background-color: #f6f8fa;
              padding: 0.2em 0.4em;
              border-radius: 3px;
            }
          `}
        </style>
      </div>
    </Layout>
  );
}
