import React from 'react'
import OptimizerImage from '@/components/Image'
import PostInfo from '@/components/PostInfo'
import PostInteractions from '@/components/PostInteractions'
import { imagekit } from '@/utils'
import OptimizerVideo from '@/components/Video'
import Link from 'next/link'

interface FileDetailsResponse {
   width: number
   height: number
   filePath: string
   url: string
   fileType: string
   customMetadata: {
      sensitive: boolean
   }
}

const Post = async ({ type }: { type?: 'status' | 'comment' }) => {
   const getFileDetails = async (
      fileId: string
   ): Promise<FileDetailsResponse> => {
      return new Promise((resolve, reject) => {
         imagekit.getFileDetails(fileId, function (error, result) {
            if (error) {
               reject(error)
            } else {
               resolve(result as unknown as FileDetailsResponse)
            }
         })
      })
   }

   const fileDetails = await getFileDetails('685803a5b13a10253771f38d')

   console.log('File Details:', fileDetails)
   return (
      <div className="p-4 border-y border-borderGray">
         {/* Post type */}
         <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="20"
               viewBox="0 0 24 24"
            >
               <path
                  fill="#71767b"
                  d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
               />
            </svg>
            <span>Alex reposted</span>
         </div>
         {/* Post content */}
         <div className={`flex gap-4 ${type === 'status' && 'flex-col'}`}>
            {/*Avatar*/}
            <div
               className={`${type === 'status' && 'hidden'} relative w-10 h-10 rounded-full overflow-hidden`}
            >
               <OptimizerImage
                  src="general/avatar.jpg"
                  alt="avatar image"
                  width={50}
                  height={50}
                  transformation={true}
               />
            </div>
            {/*Content*/}
            <div className="flex-1 flex flex-col gap-2">
               {/*Top*/}
               <div className="w-full flex justify-between">
                  <Link href={`/tests`} className="flex gap-4">
                     <div
                        className={`${type !== 'status' && 'hidden'} relative w-10 h-10 rounded-full overflow-hidden`}
                     >
                        <OptimizerImage
                           src="general/avatar.jpg"
                           alt="avatar image"
                           width={50}
                           height={50}
                           transformation={true}
                        />
                     </div>
                     <div
                        className={`flex items-center gap-2 flex-wrap ${type === 'status' && 'flex-col !gap-0 !items-start'}`}
                     >
                        <h1 className="text-md font-bold">Alex Dev</h1>
                        <span
                           className={`text-textGray ${type === 'status' && 'text-[15px]'}`}
                        >
                           @alexDev
                        </span>
                        {type !== 'status' && (
                           <span className="text-textGray">1 day ago</span>
                        )}
                     </div>
                  </Link>

                  <PostInfo />
               </div>
               {/*Text & Media*/}
               <Link href={`/AlexDev/status/12`}>
                  <p className={`${type === 'status' && 'text-lg'} `}>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
               </Link>

               {fileDetails && fileDetails.fileType === 'image' ? (
                  <OptimizerImage
                     src={fileDetails.filePath}
                     alt=""
                     width={fileDetails.width}
                     height={fileDetails.height}
                     className={
                        fileDetails.customMetadata.sensitive ? 'blur-sm' : ''
                     }
                  />
               ) : (
                  <OptimizerVideo
                     src={fileDetails.filePath}
                     className={
                        fileDetails.customMetadata.sensitive ? 'blur-sm' : ''
                     }
                  />
               )}
               {/*Interactions*/}
               {type === 'status' && (
                  <span className="text-textGray">6:15 AM Nov 3, 2020</span>
               )}
               <PostInteractions />
            </div>
         </div>
      </div>
   )
}

export default Post
