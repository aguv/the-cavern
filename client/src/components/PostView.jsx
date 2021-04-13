import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostView = ({post, index}) => {

    return (
        <div className='bg-gray-700 w-full mb-4 rounded-lg flex'>
            <div className='border-r-4  rounded-sm w-2/12 border-gray-600'>
                <img src='https://images.clarin.com/2020/10/20/marceo-gallardo-cumple-300-partidos___pjBYcQrDW_340x340__1.jpg' className='w-full h-56 border-b-4 border-gray-600'/>
                <div className='p-2'>
                    <p className='text-red-300 text-md'>{post.user.username}</p>
                    <p className='text-sm'>Since: {post.user.createdAt.slice(0, 10)}</p>
                </div>
            </div>
            <div className='p-3 flex flex-col w-10/12 justify-between'>
                <div className='flex w-full justify-between'>
                    <p className='text-sm'>{post.createdAt.slice(11, 16)}hs - {post.createdAt.slice(0, 10)}</p>
                    <p>#{index}</p>
                </div>
                <hr className='border-gray-400 w-full my-2'/>
                <p className='text-justify flex-1'>
                   {post.content}
                </p>
                <button className='self-end hover:text-red-500'>
                    <FontAwesomeIcon icon={faHeart}/>
                </button>
            </div>
        </div>
    )
}

export default PostView
