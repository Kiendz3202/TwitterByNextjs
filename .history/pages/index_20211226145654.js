import { getSession, getProviders, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widger from '../components/Widger'
import Login from '../components/Login'
import Modal from '../components/Modal'
import { Fragment, useState, useContext } from 'react'
import AppContext from "../store"

export default function Home({ providers, trendingResults, followResults }) {
  const [showModal, setShowModal] = useState(false)

  const ctx = useContext(AppContext)

  const { data: session } = useSession()
  if (!session) {
    return <Login providers={providers} />
  }

  return (
    <Fragment>
      <Head>
        <title>Twitter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="https://example.com/rock.jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image" content="https://example.com/rock2.jpg" />
        <meta property="og:image" content="https://example.com/rock3.jpg" />
        <meta property="og:image:height" content="1000" />
      </Head>
      <div className='flex max-w-7xl bg-black my-0 mx-auto min-h-screen z-10'>
        <Sidebar session={session.user} />
        <Feed session={session.user} />
        <Widger trending={trendingResults} follow={followResults} />
      </div>
      <Modal show={ctx.isOpened} close={ctx.close} />
    </Fragment>

  )
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
      trendingResults,
      followResults
    },
  };
}



