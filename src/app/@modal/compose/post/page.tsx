'use client'

import React from 'react'
import OptimizerImage from '@/components/Image'
import { useRouter } from 'next/navigation'

const PostModal = () => {
   const router = useRouter()

   const closeModal = () => {
      router.back()
   }

   return (
      <div className="absolute w-screen h-screen top-0 left-0 bg-[#8d95a1a6] z-20 flex justify-center">
         <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
            {/*Top*/}
            <div className="flex items-center justify-between">
               <div className="cursor-pointer " onClick={closeModal}>
                  X
               </div>
               <div className="text-iconBlue font-bold">Drafts</div>
            </div>
            {/*Center*/}
            <div className="py-6 flex gap-4">
               <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <OptimizerImage
                     src="general/avatar.jpg"
                     alt="Alex Dev"
                     width={100}
                     height={100}
                     transformation={true}
                  />
               </div>
               <input
                  className="flex-1 bg-transparent outline-none text-lg"
                  type="text"
                  placeholder="What is happening?!"
               />
            </div>
            {/*Bottom*/}
            <div className="flex items-center justify-between gap-4 flex-wrap border-t border-t-borderGray pt-4">
               <div className="flex gap-4 flex-wrap">
                  <OptimizerImage
                     src="icons/image.svg"
                     alt=""
                     width={20}
                     height={20}
                     className="cursor-pointer"
                  />
                  <OptimizerImage
                     src="icons/gif.svg"
                     alt=""
                     width={20}
                     height={20}
                     className="cursor-pointer"
                  />
                  <OptimizerImage
                     src="icons/poll.svg"
                     alt=""
                     width={20}
                     height={20}
                     className="cursor-pointer"
                  />
                  <OptimizerImage
                     src="icons/emoji.svg"
                     alt=""
                     width={20}
                     height={20}
                     className="cursor-pointer"
                  />
                  <OptimizerImage
                     src="icons/schedule.svg"
                     alt=""
                     width={20}
                     height={20}
                     className="cursor-pointer"
                  />
                  <OptimizerImage
                     src="icons/location.svg"
                     alt=""
                     width={20}
                     height={20}
                     className="cursor-pointer"
                  />
               </div>
               <button className="py-2 px-5 text-black bg-white rounded-full font-bold">
                  Post
               </button>
            </div>
         </div>
      </div>
   )
}

export default PostModal
