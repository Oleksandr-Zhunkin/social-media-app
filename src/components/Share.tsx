'use client'

import React from 'react'
import OptimizerImage from '@/components/Image'
import Image from 'next/image'
import { shareAction } from '@/actions'
import ImageEditor from '@/components/ImageEditor'

const Share = () => {
   const [media, setMediaSet] = React.useState<File | null>(null)
   const [isEditorOpen, setEditorOpen] = React.useState<boolean>(false)
   const [settings, setSettings] = React.useState<{
      type: 'original' | 'wide' | 'square'
      sensitive: boolean
   }>({
      type: 'original',
      sensitive: false,
   })

   const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         setMediaSet(e.target.files[0])
      }
   }

   const previewMedia = media ? URL.createObjectURL(media) : null

   return (
      <form
         className="p-4 flex gap-4"
         action={(formData) => shareAction(formData, settings)}
      >
         {/*Avatar*/}
         <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <OptimizerImage
               src="general/avatar.jpg"
               alt="Avatar"
               width={100}
               height={100}
               transformation={true}
            />
         </div>
         {/*Others*/}
         <div className="flex-1 flex flex-col gap-4">
            <input
               type="text"
               name="description"
               placeholder="What is happening?"
               className="bg-transparent outline-none placeholder:text-textGray"
            />
            {/*Preview Image*/}
            {media?.type.includes('image') && previewMedia && (
               <div className="relative rounded-xl overflow-hidden">
                  <Image
                     src={previewMedia}
                     alt="preview image"
                     width={600}
                     height={600}
                     className={`w-full ${
                        settings.type === 'original'
                           ? 'h-full object-contain'
                           : settings.type === 'square'
                             ? 'aspect-square object-cover'
                             : 'aspect-video object-cover'
                     }`}
                  />
                  <div
                     className="absolute top-2 left-2 bg-black/50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
                     onClick={() => setEditorOpen(true)}
                  >
                     Edit
                  </div>
                  <div
                     className="absolute top-2 right-2 bg-black/50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                     onClick={() => setMediaSet(null)}
                  >
                     X
                  </div>
               </div>
            )}
            {/*Preview Video*/}
            {media?.type.includes('video') && previewMedia && (
               <div className="relative rounded-xl overflow-hidden">
                  <video
                     src={previewMedia}
                     controls
                     className={`w-full ${
                        settings.type === 'original'
                           ? 'h-full object-contain'
                           : settings.type === 'square'
                             ? 'aspect-square object-cover'
                             : 'aspect-video object-cover'
                     }`}
                  />
                  <div
                     className="absolute top-2 right-2 bg-black/50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                     onClick={() => setMediaSet(null)}
                  >
                     X
                  </div>
               </div>
            )}
            {/*Image Editor*/}
            {isEditorOpen && previewMedia && (
               <ImageEditor
                  onClose={() => setEditorOpen(false)}
                  previewMedia={previewMedia}
                  settings={settings}
                  setSettings={setSettings}
               />
            )}
            {/*Actions*/}
            <div className="flex items-center justify-between gap-4 flex-wrap">
               <div className="flex gap-2 flex-wrap">
                  <input
                     type="file"
                     name="file"
                     onChange={handleMediaChange}
                     className="hidden"
                     id="file"
                     accept="image/*,video/*"
                  />
                  <label htmlFor="file" className="cursor-pointer">
                     <OptimizerImage
                        src="icons/image.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="cursor-pointer"
                     />
                  </label>
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
               <button className="bg-white text-black font-bold rounded-full py-2 px-4">
                  Post
               </button>
            </div>
         </div>
      </form>
   )
}

export default Share
