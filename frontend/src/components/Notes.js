import React from 'react'
import Navbar from './Navabar'
import Note from './Note'

function Notes() {
  return (
    <div className='min-h-screen flex flex-col bg-black text-white'>
    <Navbar/>
    <Note/>
    </div>
  )
}

export default Notes