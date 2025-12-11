"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")
  const createBranch = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main >
      <section className="bg-amber-500 min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-20 lg:pt-0">
        <div className="flex flex-col justify-center px-6 lg:ml-[7vw] gap-3 mt-10 lg:mt-[10vh] order-2 lg:order-1 pb-10">
          <p className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-orange-900 leading-tight">
            A link in bio built
            for you.
          </p>
          <p className="text-lg lg:text-xl py-3 font-semibold text-orange-900">
            Join 70M+ people using Branch for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, YouTube and other social media profiles.
          </p>
          <div className="input flex flex-col sm:flex-row gap-3 sm:gap-5 w-full">
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="bran.ch/" className="p-4 rounded-lg w-full sm:w-1/3 bg-white focus:outline-orange-900 placeholder:font-bold" />
            <button onClick={() => createBranch()} className="cursor-pointer w-full sm:w-1/3 bg-orange-900 text-white p-4 rounded-full font-bold">Get started for free</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:mr-[7vw] mt-10 lg:mt-[10vh] order-1 lg:order-2 px-4">
          <video src="./assets/vid.webm" autoPlay loop muted className="w-full max-w-[654px] rounded-xl"></video>
        </div>

      </section>
      <section className="bg-pink-700 min-h-screen grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-0">
        <div className="flex flex-col justify-center items-center mt-10 lg:mt-[10vh] px-4">
          <img src="./assets/home2.png" className="w-full max-w-[500px]" alt="" />
        </div>
        <div className="flex flex-col justify-center px-6 lg:mr-[7vw] gap-3 mt-10 lg:mt-[10vh]">
          <p className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-amber-400 leading-tight">
            Share every type of content, your way.
          </p>
          <p className="text-lg lg:text-xl py-3 font-semibold text-amber-300">
            Add your unique Branch URL to all the platforms and places you find your audience. Then use them to drive your offline traffic back to your link in bio.
          </p>
        </div>
      </section>
    </main>
  );
}