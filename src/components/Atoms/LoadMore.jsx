import React from 'react'

function LoadMore({currentPage, onClickLoadMore}) {
    const handleLoadMoreClick = (currentPage)=> {
        onClickLoadMore( currentPage + 1)
    }

  return (
    <>
    <div className="flex justify-center items-center h-full mt-7">
            <a
              href="#"
              onClick={() => handleLoadMoreClick(currentPage)}
              // onClick={() => fetchNextPage()}
              class="font-semibold text-xs text-blue-500"
            >
              {/* <a href="#" onClick={loadMoreBeer} class="font-semibold text-xs text-blue-500"> */}
              Load More
              <svg
                className="pl-1 w-3 h-3 text-blue-500 inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </a>
          </div>
    </>
  )
}

export default LoadMore