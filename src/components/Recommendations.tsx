import React from 'react'
import Link from 'next/link'
import OptimizerImage from '@/components/Image'

const Recommendations = () => {
   return (
      <div className="p-4 rounded-2xl border border-borderGray flex flex-col gap-4">
         {/* User Card */}
         <div className="flex items-center justify-between">
            {/*Image and User Info*/}
            <div className="flex items-center gap-2">
               <div className="relative rounded-full overflow-hidden w-10 h-10">
                  <OptimizerImage
                     src="general/olha.jpg"
                     alt="Olha designer"
                     width={100}
                     height={100}
                     transformation={true}
                  />
               </div>
               <div className="">
                  <h1 className="text-lg font-bold">Olha Zhynkina</h1>
                  <span className="text-textGray text-sm">@olhaSavvz</span>
               </div>
            </div>
            {/*Follow Button*/}
            <button className="bg-white text-black rounded-full px-4 py-1 font-semibold text-sm cursor-pointer">
               Follow
            </button>
         </div>

         <div className="flex items-center justify-between">
            {/*Image and User Info*/}
            <div className="flex items-center gap-2">
               <div className="relative rounded-full overflow-hidden w-10 h-10">
                  <OptimizerImage
                     src="general/olha.jpg"
                     alt="Olha designer"
                     width={100}
                     height={100}
                     transformation={true}
                  />
               </div>
               <div className="">
                  <h1 className="text-lg font-bold">Olha Zhynkina</h1>
                  <span className="text-textGray text-sm">@olhaSavvz</span>
               </div>
            </div>
            {/*Follow Button*/}
            <button className="bg-white text-black rounded-full px-4 py-1 font-semibold text-sm cursor-pointer">
               Follow
            </button>
         </div>

         <div className="flex items-center justify-between">
            {/*Image and User Info*/}
            <div className="flex items-center gap-2">
               <div className="relative rounded-full overflow-hidden w-10 h-10">
                  <OptimizerImage
                     src="general/olha.jpg"
                     alt="Olha designer"
                     width={100}
                     height={100}
                     transformation={true}
                  />
               </div>
               <div className="">
                  <h1 className="text-lg font-bold">Olha Zhynkina</h1>
                  <span className="text-textGray text-sm">@olhaSavvz</span>
               </div>
            </div>
            {/*Follow Button*/}
            <button className="bg-white text-black rounded-full px-4 py-1 font-semibold text-sm cursor-pointer">
               Follow
            </button>
         </div>

         <Link className="text-iconBlue" href="/">
            Show More
         </Link>
      </div>
   )
}

export default Recommendations
