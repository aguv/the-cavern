import React from 'react';
import {Link} from 'react-router-dom';

const MiniView = ({cat}) => {

    return (
        <button className='bg-gray-700 w-full h-48 flex p-4 hover:bg-gray-500 hover:text-yellow-300 rounded-md shadow-md mb-4'>
            <Link className='flex' to={`/cat/${cat.id}`}>
                <div className='w-9/12 flex flex-col justify-between items-start'>
                    <h1 className='text-4xl'>{cat.title}</h1>
                    <hr className='my-2 border-gray-500 w-full' />
                    <p className='text-sm text-justify'>{cat.description}</p>
                    <p className='text-sm text-yellow-500 my-2'><span className='underline'>Mods</span>: aguv, enzoperez14</p>
                </div>
                <div className='flex justify-center items-center flex-1'>
                    <h1>THREADS: {cat.threads.length}</h1>
                </div>
            </Link>
        </button>
            
    )
}

export default MiniView;
