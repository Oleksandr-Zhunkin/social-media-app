'use client'

import React from 'react'
import { Video } from '@imagekit/next'

interface VideoProps {
   src: string
   className?: string
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT

const OptimizerVideo = (props: VideoProps) => {
   return (
      <Video
         urlEndpoint={urlEndpoint}
         src={props.src}
         className={props.className}
         transformation={[
            { width: 1920, height: 1080, quality: 80 },
            {
               overlay: {
                  type: 'text',
                  text: 'AlexDev',
                  //input: '/general/avatar.jpg',
                  //transformation: [{ width: 100, height: 100 }],
                  position: {
                     focus: 'top_right',
                  },
               },
            },
         ]}
         controls
      />
   )
}

export default OptimizerVideo
