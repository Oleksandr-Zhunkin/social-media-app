import "./globals.css";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <div className='max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between '>
            <div className='px-2 xsm:px-4 xxl:px-8'><LeftSideBar/></div>
            <div className='flex-1 lg:min-w-[600px] border-x border-borderGray'>{children}</div>
               <div className='hidden lg:flex ml-4 xl:ml-6 flex-1'><RightSideBar/></div>
        </div>
        </body>
        </html>
    );
}