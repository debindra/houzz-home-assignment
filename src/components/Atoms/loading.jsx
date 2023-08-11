export default function Loading() {
    // Or a custom loading skeleton component
    return (
  
  
    <div  className="grid gap-4 mx-auto sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-2   mt-5">
       <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
        <div class="flex items-center justify-center w-full h-32 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div class="w-full">
            <div class="h-3 bg-gray-200 rounded-full  w-32 mb-3"></div>
            <div class="h-2.5 bg-gray-200 rounded-full w-44 mb-3"></div>
            <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        </div>
        <span class="sr-only">Loading...</span>
        </div>

        <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
        <div class="flex items-center justify-center w-full h-32 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div class="w-full">
            <div class="h-3 bg-gray-200 rounded-full  w-32 mb-3"></div>
            <div class="h-2.5 bg-gray-200 rounded-full w-44 mb-3"></div>
            <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        </div>
        <span class="sr-only">Loading...</span>
        </div>
  </div>
  
  
    );
  }
  