import { Tooltip } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

function MyBeerCard({item}) {
   
  return (
<div className="container grid gap-4   mx-auto sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2   mt-10"> 
<a
    href="#"
    key={item.id}
    className="  flex  items-center bg-white border border-gray-200 rounded-md shadow md:flex-row sm:flex-row  hover:bg-blue-50 hover:shadow-none"
  >
    <div className=" px-7 w-30 max-w-screen-lg">
    <Tooltip content={`ingredients: ${item.ingredients?.malt? ' malt': ''  }  ${item.ingredients?.grain? 'grain': ''} ${item.ingredients?.hops? ', hops': ''} ${item.ingredients?.yeast? ', yeast': ''} ${item.ingredients?.water? ', water': ''}`} placement="top">
      <Image
        className="max-w-full h-auto"
        // className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={item.image_url}
        alt=""
        width={40}
        height={30}
      />
      </Tooltip>
    </div>
    <div className="flex h-30 pr-5 flex-col justify-between py-5 leading-normal">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {item?.name}
      </h5>
      <h6 className="mb-2 text-sm font-normal tracking-tight text-yellow-400 dark:text-white">
        {item?.tagline}
      </h6>
      <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
        {item?.description?.slice(0, 110)}
      </p>
    </div>
  </a>
  </div>
  )
}

export default MyBeerCard