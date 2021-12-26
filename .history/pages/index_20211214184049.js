import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widger from '../components/Widger'

export default function Home() {
  return (
    <div className='flex max-w-7xl bg-black my-0 mx-auto min-h-screen'>
      <Sidebar />
      <Feed />
      <Widger />
    </div>

  )
}
