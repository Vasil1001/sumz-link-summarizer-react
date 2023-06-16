import React from 'react'
import logo from '../assets/logo.svg'

export default function Hero() {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <nav className="mb-10 flex w-full items-center justify-between pt-3">
        <img src={logo} className="w-24 object-contain" alt="logo" />

        <button
          type="button"
          onClick={() => window.open('https://github.com/Vasil1001?tab=repositories&type=source')}
          className=" text-extrabold rounded-lg border-2 border-black bg-[#202124]  p-1.5 px-3 text-white transition-all hover:rounded-xl hover:bg-white hover:px-4 hover:text-black"
        >
          GitHub
        </button>
      </nav>
      <h1 className="mt-3 text-center text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        Summarize <br className="max-2xl:hidden" />
        Article links <br className="max-md:hidden" />
        <span className="orange_gradient"> with GPT-4</span>
      </h1>
      <h2 className="desc">Turn a lengthy article or general text content of a page into a clear and concise summary using GPT.</h2>
    </header>
  )
}
