import React from 'react'
import Tab from '../Atoms/Tab'

function TabSection() {
  return (
    <>
     <div class="col-span-1">
            <Tab  tabName={`All Beers`} onTabClick={handleTabSelection} tab={1}/>
            {/* <a
              href="#"
              onClick={() => setTab(1)}
              aria-current="page"
              className={classNames(
                tab === 1 ? "underline text-black " : " text-gray-500",
                "text-md px-4 py-2  font-medium  bg-white"
              )}
            >
              All Beers
            </a> */}
          </div>
          <div class="col-span-2">
          <Tab  tabName={`My Beers`} onTabClick={handleTabSelection} tab={2}/>

            {/* <a
              href="#"
              onClick={() => setTab(2)}
              className={classNames(
                tab === 2 ? " underline  text-black" : " text-gray-500",
                "px-4 py-2 text-md font-medium  bg-white"
              )}
            >
              My Beers
            </a> */}
          </div>
    </>
  )
}

export default TabSection