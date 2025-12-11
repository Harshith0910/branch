"use client"
import React, { useState, Suspense } from 'react'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const GenerateContent = () => {

  const searchParams = useSearchParams()

  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get('handle') || "");
  const [pfp, setpfp] = useState("")

  const handleChange = (index, link, linktext) => {
    setlinks((prevLinks) => {
      return prevLinks.map((item, i) => {
        if (i === index) {
          return { link, linktext };
        }
        else {
          return item;
        }
      })
    })
  }

  const addLink = () => {
    setlinks(links.concat({ link: "", linktext: "" }))
  }

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pfp": pfp
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/add`, requestOptions)
    const result = await r.json()

    if (result.success) {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      })
      setlinks([{ link: "", linktext: "" }])
      sethandle("")
      setpfp("")
    }
    else {
      toast.error(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    }
  }

  return (
    <div className='min-h-screen bg-[#ced821] grid grid-cols-1 lg:grid-cols-2 items-center'>

      <div className="col-1 flex flex-col gap-4 justify-center items-center mt-20 lg:mt-[5vh] mb-10 px-4">

        <Link href={"/"}>
          <div className="logo flex items-center cursor-pointer hover:scale-110 transition-transform duration-300">
            <img src="./assets/branch.png" height={40} width={40} alt="branch" />
          </div>
        </Link>

        <h1 className='text-3xl lg:text-4xl font-bold mb-5 text-center'>Create your branch!</h1>

        <h2 className='font-semibold text-xl w-full max-w-lg'>Step-1: Claim your Handle</h2>

        <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='w-full max-w-lg px-4 py-2.5 bg-gray-100 outline-blue-700 rounded-lg' type="text" placeholder='Enter your handle' />

        <h2 className='font-semibold text-xl w-full max-w-lg'>Step-2: Add Links</h2>

        <div className="links flex flex-col gap-3 max-h-[40vh] lg:max-h-[25vh] overflow-y-auto w-full max-w-lg p-1">
          {links && links.map((item, index) => {
            return <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='px-4 py-2.5 bg-gray-100 outline-blue-800 rounded-lg w-full' type="text" placeholder='Enter link' />
              <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className='px-4 py-2.5 bg-gray-100 outline-blue-700 rounded-lg w-full' type="text" placeholder='Enter link text' />
            </div>
          })}
        </div>
        <button onClick={() => addLink()} className='px-4 py-2.5 bg-blue-800 font-semibold text-white rounded-full cursor-pointer hover:bg-black transition hover:scale-105'> + Link</button>

        <h2 className='font-semibold text-xl w-full max-w-lg'>Step-3: Add profile picture</h2>

        <input value={pfp || ""} onChange={e => { setpfp(e.target.value) }} className='w-full max-w-lg px-4 py-2.5 bg-gray-100 outline-blue-700 rounded-lg' type="text" placeholder='Enter picture link' />

        <button disabled={handle == "" || links[0].linktext == "" || pfp == ""} onClick={() => submitLinks()} className='disabled:bg-slate-500 px-4 py-3 bg-blue-800 font-semibold text-white rounded-full cursor-pointer hover:bg-black transition hover:scale-110 w-full max-w-lg mt-4'>Generate Branch</button>

      </div>

      <div className="col-2 w-full h-64 lg:h-screen hidden lg:flex justify-center items-center">
        <img src="./assets/generate.jpg" alt="" className='h-full w-full object-cover' />
        <ToastContainer />
      </div>
      <div className='lg:hidden'>
        <ToastContainer />
      </div>

    </div>

  )
}

const Generate = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateContent />
    </Suspense>
  )
}

export default Generate