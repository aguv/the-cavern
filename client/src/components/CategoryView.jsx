import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

const threads = [1, 1, 1, 1, 1, 1, 1, 1, 1];

const CategoryView = () => {
    return (
        <div className='bg-gray-600 w-full lg:w-8/12 lg:mx-auto p-4 rounded-md shadow-lg'>
            <div>
                <div className='bg-gray-500 rounded-md h-auto m-3 h-40 border-2 border-gray-700 p-4 flex flex-col justify-between'>
                    <p className='text-3xl'>Category's name</p>
                    <p className='text-justify w-11/12 self-center my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corporis, asdasdsadasdasvel voluptatem blanditiis cum at id recusandae illo dicta, dignissimos amet sint nemo enim. Reprehenderit totam perspiciatis quam velit eaque?</p>
                    <button className='self-end'>
                        <FontAwesomeIcon icon={faHeart} className='w-4 hover:text-red-500' />
                    </button>
                </div>
                <div className='m-2 flex justify-between px-5'>
                    <p>Threads</p>
                    <p>Posts</p>
                </div>
                <hr className='border-gray-400'/>
                {threads.map( _ => (
                    <div className='m-3 hover:text-yellow-400 bg-gray-800 p-2 rounded-md border-b-4 border-gray-500 shadow-lg transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-130'>
                        <Link className='flex justify-between mx-4'>
                            <div>
                                <p>Con 2 goles de Federico Girotti, River le gano 2 a 0 a Atletico Tucuman</p>
                                <p className='text-sm italic'>Marcelo Gallardo, 24-05-1990</p>
                            </div>
                            <p>15</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>        
    )
}

export default CategoryView
