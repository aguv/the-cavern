import React from 'react';
import {Link} from 'react-router-dom';

const MiniView = () => {
    return (
        <Link className='bg-gray-700 w-full h-48 flex p-4 hover:bg-gray-500 hover:text-yellow-300 rounded-md shadow-md mb-4'>
            <div className='w-9/12 flex flex-col justify-between'>
                <h1 className='text-4xl'>Category name</h1>
                <hr className='my-2 border-gray-500'/>
                <p className='text-sm text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, enim temporibus placeat modi nesciunt laudantium quod quae a pariatur illo deleniti natus eos? Voluptatibus quod adipisci repellendus maxime. Numquam, rerum.</p>
                <p className='text-sm text-yellow-500'><span className='underline'>Mods</span>: aguv, enzoperez14</p>
            </div>
            <div className='flex flex-col justify-center items-center flex-1'>
                <h1>POSTS: 30</h1>
                <h1>COMMENTS: 125</h1>
            </div>
        </Link>
    )
}

export default MiniView;
