import React, { useState } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { GrNext } from 'react-icons/gr'
import { MdManageSearch } from'react-icons/md'

import { FaGithub, FaLink } from 'react-icons/fa'
import { BsLink, BsLink45Deg } from 'react-icons/bs'
import { CiLink } from 'react-icons/ci'
import { HiLink } from 'react-icons/hi'
import { LuListEnd } from 'react-icons/lu'

export default function Demo() {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const handleSubmit = async (e) => {
    alert('submit')
  }

  return (
    <section className="mt-12 w-full max-w-xl">
      <div className="w-full-gap-2 flex flex-col">
        <form onSubmit={handleSubmit} className="peer relative flex items-center justify-center">
          {/* <img src={linkIcon} alt="linkicon" className="absolute left-0 my-2 ml-3 w-5" /> */}
          <input
            type="url"
            placeholder="Enter a link to an article"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value })
            }}
            className="peer block w-full rounded-xl border-2 border-gray-400 bg-[#fcfcff] p-1.5 px-3 py-2.5 pl-10 pr-12 font-satoshi text-md font-medium shadow-lg transition-all hover:rounded-xl  hover:bg-white hover:pl-10 hover:text-black focus:bg-white"
          />
          <HiLink className="absolute left-0 flex w-10 items-center justify-center rounded rounded-r-lg text-gray-400 hover:text-gray-800 peer-focus:text-gray-700 ml-1" size={25}/>

          <button type="submit" className="submit_btn border-2 hover:bg-slate-200 peer-focus:border-gray-700 peer-focus:text-gray-700">
            {/* <MdManageSearch size={25}/> */}
            <LuListEnd size={25} />

          </button>
        </form>

        {/* Summarized URLS History */}
      </div>

      {/* Dispaly the summary */}
    </section>
  )
}
