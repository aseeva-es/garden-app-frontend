import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Trial() {
  return (
    <>
    {/** 
     *  If you want to try writing plain HTML yourself, 
     *  feel free to modify everything and add anything
     *  below this comment.
     * 
     *  CSS can be modified by either editing src/styles/global.css,
     *  or by addinc Tailwind classess to your elements.
     *  Learn more about Tailwind CSS here:
     *  https://tailwindcss.com/
     */}

    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <Image
          className="relative mb-6"
          src="/logo.svg"
          alt="Garden App Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className={`mb-3 text-5xl font-semibold relative`}>Hello from Garden App!</h1>
    </main>

    {/**
     *  No HTML after this comment please!
     */}
    </>
  )
}
