import React from 'react'
import OptimizerImage from '@/components/Image'
import Link from 'next/link'

const PopularTags = () => {
   return (
      <div className="p-4 rounded-2xl border border-borderGray flex flex-col gap-4">
         <h1 className="text-xl font-bold text-textGrayLight">
            What&apos;s Happening
         </h1>
         {/*Trends*/}
         <div className="flex gap-4">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden">
               <OptimizerImage
                  src="general/cover.jpg"
                  alt="event banner"
                  width={120}
                  height={120}
                  transformation={true}
               />
            </div>
            <div className="flex-1">
               <h2 className="font-bold text-textGrayLight">
                  Meeting: &quot;Save our nature&quot;
               </h2>
               <span className="text-sm text-textGray">Yesterday</span>
            </div>
         </div>
         {/*Topics*/}
         <div className="">
            <div className="flex items-center justify-between">
               <span className="text-textGray text-sm ">
                  Technology * Trending
               </span>
               <OptimizerImage
                  src="icons/infoMore.svg"
                  alt="info"
                  width={16}
                  height={16}
               />
            </div>

            <h2 className="font-bold text-textGrayLight">
               AI is the future of technology
            </h2>
            <span className="text-sm text-textGray">20K posts</span>
         </div>
         <div className="">
            <div className="flex items-center justify-between">
               <span className="text-textGray text-sm ">
                  Technology * Trending
               </span>
               <OptimizerImage
                  src="icons/infoMore.svg"
                  alt="info"
                  width={16}
                  height={16}
               />
            </div>

            <h2 className="font-bold text-textGrayLight">
               AI is the future of technology
            </h2>
            <span className="text-sm text-textGray">20K posts</span>
         </div>
         <div className="">
            <div className="flex items-center justify-between">
               <span className="text-textGray text-sm ">
                  Technology * Trending
               </span>
               <OptimizerImage
                  src="icons/infoMore.svg"
                  alt="info"
                  width={16}
                  height={16}
               />
            </div>

            <h2 className="font-bold text-textGrayLight">
               AI is the future of technology
            </h2>
            <span className="text-sm text-textGray">20K posts</span>
         </div>
         <div className="">
            <div className="flex items-center justify-between">
               <span className="text-textGray text-sm ">
                  Technology * Trending
               </span>
               <OptimizerImage
                  src="icons/infoMore.svg"
                  alt="info"
                  width={16}
                  height={16}
               />
            </div>

            <h2 className="font-bold text-textGrayLight">
               AI is the future of technology
            </h2>
            <span className="text-sm text-textGray">20K posts</span>
         </div>
         <Link className="text-iconBlue" href="/">
            Show More
         </Link>
      </div>
   )
}

export default PopularTags
