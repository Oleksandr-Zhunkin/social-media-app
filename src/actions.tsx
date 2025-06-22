'use server'

import { imagekit } from '@/utils'

export const shareAction = async (
   formData: FormData,
   settings: { type: 'original' | 'wide' | 'square'; sensitive: boolean }
) => {
   const file = formData.get('file') as File
   //const description = formData.get('description') as string;

   const bytes = await file.arrayBuffer()
   const buffer = Buffer.from(bytes)

   const transformation = `w-600, ${
      settings.type === 'square'
         ? 'ar-1-1'
         : settings.type === 'wide'
           ? 'ar-16-9'
           : ''
   }`

   console.log(file)
   imagekit.upload(
      {
         file: buffer,
         fileName: file?.name || 'default.jpg',
         folder: 'Posts',

         ...(file.type.includes('image') && {
            transformation: {
               pre: transformation,
            },
         }),
         customMetadata: {
            sensitive: settings.sensitive,
         },
      },
      (error, result) => {
         if (error) {
            console.error('Error uploading file:', error)
            //throw new Error('File upload failed');
         } else {
            console.log('File uploaded successfully:', result)
            //return result;
         }
      }
   )
}
