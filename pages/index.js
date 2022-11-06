import Head from 'next/head'
import Image from 'next/image'
import App from '../components/App'

export default function Home() {
  return (
    <>
      <Head>
        <title>Timify</title>
        <meta name='description' content='If Yelp and Waze had a baby...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <App />
      </main>

      <footer className='w-full h-40 bg-zinc-800 flex justify-center items-center'>
        <p className='text-xl'>©Timify</p>
      </footer>
    </>
  )
}
