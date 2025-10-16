"use client"

import React from 'react'

const Error = () => {
  return (
    <div className='bg-red-300 border-1-2 border-red-400 text-red-700 mt-4 rounded shadow'>
      <h1>エラーが発生しました。</h1>
      <button className='bg-red-500 text-white hover:bg-red-900 transition duration-300 px-4 py-2 rounded'>もう一度試す</button>
    </div>

  )
}

export default Error
