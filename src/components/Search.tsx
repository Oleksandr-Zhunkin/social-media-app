import React from 'react'
import OptimizerImage from '@/components/Image'

interface SearchProps {}

const Search = (props: SearchProps) => {
   return (
      <div className="bg-inputGray px-4 py-2 flex items-center gap-4 rounded-full">
         <OptimizerImage
            src="icons/explore.svg"
            alt="search"
            width={16}
            height={16}
         />
         <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-textGray text-sm outline-none placeholder:text-textGray"
         />
      </div>
   )
}

export default Search
