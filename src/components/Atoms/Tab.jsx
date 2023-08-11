function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  
function Tab({tab, onTabClick}) {

  const handleTabClick = (e, key) =>{
    onTabClick(key)
  }

  return (
    <>
     <a
              href="#"
              key={tab.key}
              onClick={(e) => handleTabClick(e, tab.key)}
              aria-current="page"
              className={classNames(
                tab.current ? "underline text-black " : " text-gray-500",
                "text-md py-2  font-medium  bg-white "
              )}
            >
              {tab.name}
            </a>
    </>
  )
}

export default Tab