import React from 'react'

import { DataTableDemo } from './components/leaderboard'

function page() {
  return (
    <div>
    
    <div className="mx-10 my-5 flex items-end justify-end">
        <nav className="flex items-end flex space-x-4">
          <a href="/home" className="text-black">
            Home
          </a>
          <a href="/leaderboard" className="text-black" >
            Leaderboard
          </a>
          <a href="/profile" className="text-black" >
            Profile
          </a>
        </nav>
      </div>

    <div className="-my-7 flex flex-col items-center gap-4"></div>
      {/* <div className='text-6xl'>
        <h1>Leaderboard</h1>
      </div> */}
      <div> 
        <DataTableDemo/>
      </div>
    </div>

  )
}

export default page