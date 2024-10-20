import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [picture, setPicture] = useState<string | null>(null)

  const fetchRandomPicture = async () => {
    const response = await fetch('/api/random-picture')
    const data = await response.json()
    setPicture(data.picture)
  }

  useEffect(() => {
    fetchRandomPicture()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Random Picture Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-8">Random Picture Generator</h1>
        {picture && (
          <div className="mb-8">
            <Image src={picture} alt="Random Picture" width={300} height={300} className="rounded-lg shadow-lg" />
          </div>
        )}
        <button
          onClick={fetchRandomPicture}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Another Picture
        </button>
        <a
          href="https://mofundo1.github.io/random-picture-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-500 hover:text-blue-700"
        >
          Request a Signed Copy
        </a>
      </main>
    </div>
  )
}