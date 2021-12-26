import { getSession, getProviders, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widger from '../components/Widger'
import Login from '../components/Login'

export default function Home({ providers }) {
  const { data: session } = useSession()
  if (!session) {
    return <Login providers={providers} />
  }
  if (session) {
    console.log(session)
  }
  return (
    <div className='flex max-w-7xl bg-black my-0 mx-auto min-h-screen'>
      <Sidebar session={session} />
      <Feed />
      <Widger />
    </div>

  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}



