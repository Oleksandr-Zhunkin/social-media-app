import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";


const Homepage = () => {
    return (
        <div className=''>
            <div className='px-4 flex justify-between text-textGray font-bold border-b border-borderGray'>
                <Link className='pb-3 flex items-center border-b-4 border-iconBlue' href="/">For you</Link>
                <Link className='pb-3 flex items-center' href="/">Following</Link>
                <Link className='hidden pb-3 items-center sm:flex' href="/">React</Link>
                <Link className='hidden pb-3 items-center sm:flex' href="/">HTML</Link>
                <Link className='hidden pb-3 items-center sm:flex' href="/">CSS</Link>
            </div>
            <Share />
            <Feed />
        </div>
    )
}

export default Homepage

