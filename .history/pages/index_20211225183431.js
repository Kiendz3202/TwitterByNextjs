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

  const ctx = useContext(AppContext)

  const { data: session } = useSession()
  if (!session) {
    return <Login providers={providers} />
  }
  console.log(ctx.isOpened)

  return (
    <Fragment>
      <div className='flex max-w-7xl bg-black my-0 mx-auto min-h-screen'>
        <Sidebar session={session.user} />
        <Feed session={session.user} />
        <Widger trending={trendingResults} follow={followResults} />
      </div>
      {ctx.isOpened && <Modal />}
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



