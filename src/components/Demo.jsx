import React, { useState } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { GrNext } from 'react-icons/gr'
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
        <form onSubmit={handleSubmit} className="relative flex items-center justify-center">
          <img src={linkIcon} alt="linkicon" className="absolute left-0 my-2 ml-3 w-5" />
          <input
            type="url"
            placeholder="Enter a link to an article"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value })
            }}
            className="peer block w-full rounded-xl border-2 border-gray-400 bg-[#fcfcff] p-1.5 px-3 py-2.5 pl-10 pr-12 font-satoshi text-sm font-medium shadow-lg transition-all hover:rounded-xl  hover:bg-white hover:pl-10 hover:text-black focus:bg-white"
          />

          <button type="submit" className="submit_btn border-2  peer-focus:border-gray-700 peer-focus:text-gray-700">
            <GrNext />
          </button>
        </form>

        {/* Summarized URLS History */}
      </div>

      {/* Dispaly the summary */}
    </section>
  )
}
