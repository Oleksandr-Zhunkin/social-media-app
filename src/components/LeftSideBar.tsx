import React from 'react'
import Link from 'next/link'
import OptimizerImage from '@/components/Image'

const menuList = [
   {
      id: 1,
      name: 'Homepage',
      link: '/',
      icon: 'home.svg',
   },
   {
      id: 2,
      name: 'Explore',
      link: '/',
      icon: 'explore.svg',
   },
   {
      id: 3,
      name: 'Notification',
      link: '/',
      icon: 'notification.svg',
   },
   {
      id: 4,
      name: 'Messages',
      link: '/',
      icon: 'message.svg',
   },
   {
      id: 5,
      name: 'Bookmarks',
      link: '/',
      icon: 'bookmark.svg',
   },
   {
      id: 6,
      name: 'Jobs',
      link: '/',
      icon: 'job.svg',
   },
   {
      id: 7,
      name: 'Communities',
      link: '/',
      icon: 'community.svg',
   },
   {
      id: 8,
      name: 'Premium',
      link: '/',
      icon: 'logo.svg',
   },
   {
      id: 9,
      name: 'Profile',
      link: '/',
      icon: 'profile.svg',
   },
   {
      id: 10,
      name: 'More',
      link: '/',
      icon: 'more.svg',
   },
]

const LeftSideBar = () => {
   return (
      <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
         {/* Logo menu btn */}
         <div className=" flex flex-col gap-4 text-lg items-center xxl:items-start">
            <Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
               <OptimizerImage
                  src="/icons/logo.svg"
                  alt="logo"
                  height={24}
                  width={24}
               />
            </Link>
            {/* Menu list */}
            <div className="flex flex-col gap-2">
               {menuList.map((item) => (
                  <Link
                     href={item.link}
                     className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
                     key={item.id}
                  >
                     <OptimizerImage
                        src={`icons/${item.icon}`}
                        alt={`${item.name}`}
                        width={24}
                        height={24}
                     />
                     <span className="hidden xxl:inline">{item.name}</span>
                  </Link>
               ))}
            </div>
            {/* button */}
            <Link
               href="/compose/post"
               className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
            >
               <OptimizerImage
                  src="icons/post.svg"
                  alt="new post icon"
                  width={24}
                  height={24}
               />
            </Link>
            <Link
               href="/compose/post"
               className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
            >
               Post
            </Link>
         </div>
         {/* USER */}
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 ">
               <div className="w-10 h-10 relative rounded-full overflow-hidden">
                  <OptimizerImage
                     src="general/avatar.jpg"
                     alt="oleksandr zhynkin"
                     width={100}
                     height={100}
                     transformation={true}
                  />
               </div>
               <div className="hidden xxl:flex flex-col">
                  <span className="font-bold">Alex Dev</span>
                  <span className="text-textGray">@alexDev</span>
               </div>
            </div>
            <div className="hidden xxl:block cursor-pointer font-bold">...</div>
         </div>
      </div>
   )
}

export default LeftSideBar
