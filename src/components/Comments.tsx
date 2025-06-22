import React from 'react'
import Post from '@/components/Post'
import OptimizerImage from '@/components/Image'

const Comments = () => {
   return (
      <div className="">
         <form className="flex items-center justify-between gap-4 p-4">
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
               type="text"
               className="flex-1 bg-transparent outline-none p-2 text-xl"
               placeholder="Write a comment..."
            />
            <button className="py-2 px-4 font-bold bg-white text-black rounded-full cursor-pointer">
               Reply
            </button>
         </form>
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
      </div>
   )
}

export default Comments
