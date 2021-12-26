import { getSession, getProviders, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widger from '../components/Widger'

export default function Home({ provider }) {
  const { data: session } = useSession()
  if (!session) {
    return <Login provider={provider} />
  }
  return (
    <div className='flex max-w-7xl bg-black my-0 mx-auto min-h-screen'>
      <Sidebar />
      <Feed />
      <Widger />
    </div>

  )
}

export async function getSeversideProps(context) {
  const provider = await getProvider();
  const session = await getSession(context);

  return {
    props: {
      provider,
      // session
    }
  }
}
