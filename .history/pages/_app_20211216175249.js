import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
export default MyApp