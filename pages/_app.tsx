import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { SearchProvider } from '../components/context/SearchContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  )
}

export default MyApp
