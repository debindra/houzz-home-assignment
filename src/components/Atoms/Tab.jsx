import React, { useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  
function Tab({tabName, tab, onTabClick}) {
    const [selected, setSelected] = useState(1)

    const setTablValue = ()=> {
        // setSelected(tab)
        onTabClick(tab)
    }

    console.log(`slected ${selected} ${tab}`)

  return (
    <>
     <a href="#"
              onClick={() => setTablValue(1)}
              aria-current="page"
              className={classNames(
                tab === selected ? "underline text-black " : " text-gray-500",
                "text-md px-4 py-2  font-medium  bg-white"
              )}
            >
             {tabName}
            </a>
    </>
  )
}

export default Tab