'use client'

import React from 'react'
import { Image } from '@imagekit/next'

interface ImageProps {
   src: string
   width?: number
   height?: number
   alt: string
   className?: string
   transformation?: boolean
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT

const OptimizerImage = (props: ImageProps) => {
   return (
      <Image
         urlEndpoint={urlEndpoint}
         src={props.src}
         alt={props.alt}
         width={props.width}
         height={props.height}
         {...(props.transformation
            ? { transformation: [{ width: props.width, height: props.height }] }
            : { width: props.width, height: props.height })}
         className={props.className}
      />
   )
}

export default OptimizerImage
