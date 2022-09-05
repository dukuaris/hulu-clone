import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Nav from '../components/Nav';


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Hulu Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      {/* Body */}
    </div>
  )
}

export default Home
