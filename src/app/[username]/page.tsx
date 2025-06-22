import React from 'react'
import Link from 'next/link'
import OptimizerImage from '@/components/Image'
import Feed from '@/components/Feed'

const UserPage = () => {
   return (
      <div className="">
         {/*Profile Title*/}
         <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
            <Link href="/">
               <OptimizerImage
                  src="icons/back.svg"
                  alt="back"
                  width={24}
                  height={24}
               />
            </Link>
            <h1 className="font-bold text-lg">Alex Dev</h1>
         </div>

         {/*Profile Info*/}
         <div className="">
            {/*Cover and Avatar*/}
            <div className="relative w-full">
               {/*Cover*/}
               <div className="w-full aspect-[3/1] relative">
                  <OptimizerImage
                     src="general/cover.jpg"
                     alt=""
                     width={600}
                     height={200}
                  />
               </div>
               {/*Avatar*/}
               <div className="w-1/6 aspect-square rounded-full overflow-hidden border-2 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
                  <OptimizerImage
                     src="general/avatar.jpg"
                     alt="avatar"
                     width={100}
                     height={100}
                     transformation={true}
                  />
               </div>
            </div>
            <div className="flex w-full justify-end items-center gap-2 p-2">
               <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
                  <OptimizerImage
                     src="icons/more.svg"
                     alt="more"
                     width={20}
                     height={20}
                  />
               </div>
               <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
                  <OptimizerImage
                     src="icons/explore.svg"
                     alt="more"
                     width={20}
                     height={20}
                  />
               </div>
               <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer">
                  <OptimizerImage
                     src="icons/message.svg"
                     alt="more"
                     width={20}
                     height={20}
                  />
               </div>
               <button className="py-2 px-4 bg-white text-black font-bold rounded-full cursor-pointer">
                  Follow
               </button>
            </div>
            {/*User Info*/}
            <div className="p-4 flex flex-col gap-2">
               {/*Username & Handle*/}
               <div className="">
                  <h1 className="text-2xl font-bold text-textGrayLight">
                     Alex Dev
                  </h1>
                  <span className="text-textGray text-sm">@alexDev</span>
               </div>
               <p>Alex Dev Code For You</p>
               {/*Job & Location & Date*/}
               <div className="flex gap-4 text-textGray text-[15px]">
                  <div className="flex items-center gap-2">
                     <OptimizerImage
                        src="icons/userLocation.svg"
                        alt="location"
                        width={20}
                        height={20}
                     />
                     <span>UKRAINE</span>
                  </div>

                  <div className="flex items-center gap-2">
                     <OptimizerImage
                        src="icons/date.svg"
                        alt="date"
                        width={20}
                        height={20}
                     />
                     <span>Joined November 1990</span>
                  </div>
               </div>
               {/*Followers & Following*/}
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                     <span className="font-bold text-textGrayLight">1.2K</span>
                     <span className="text-textGray text-[15px]">
                        Followers
                     </span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="font-bold text-textGrayLight">1.2K</span>
                     <span className="text-textGray text-[15px]">
                        Followings
                     </span>
                  </div>
               </div>
            </div>
         </div>
         {/*Feed*/}
         <Feed />
      </div>
   )
}

export default UserPage
