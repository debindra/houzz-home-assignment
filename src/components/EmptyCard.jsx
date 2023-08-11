import Link from 'next/link'
import React from 'react'

function EmptyCard({openModle}) {
  function myModal(){
    openModle()
  }

  return (
    <div className="container mx-auto h-96 px-40 bg-slate-100 w-auto">
        <p className="text-center pt-10 text-gray-500 font-sm">Nothing to see yet. <br/>
         <Link href={`#`}     onClick={myModal} className='hover:underline text-blue-400'>Click here</Link> to add your first beer!
        
        </p>
    </div>
  )
}

export default EmptyCard