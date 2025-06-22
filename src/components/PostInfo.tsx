import React from 'react';
import OptimizerImage from "@/components/Image";

interface PostInfoProps {
}

const PostInfo = (props: PostInfoProps) => {
    return (
        <div className='cursor-pointer w-4 h-4 relative'>
           <OptimizerImage src='icons/infoMore.svg' alt='more info icon' width={16} height={16} />
        </div>
    );
};

export default PostInfo;