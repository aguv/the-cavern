import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

const SecondNavbar = () => {
    const categories = useSelector(state => state.categories);

    return (
        <div className='bg-gray-800 h-16 w-auto shadow-lg flex justify-around items-center invisible lg:visible'>
            {categories?.map((cat, index) => (
                    <button key={cat.id} className='h-full'>
                        <Link className='flex items-center hover:text-yellow-300 hover:border-b-4 h-full border-b-2 border-transparent hover:border-yellow-500' to={`/cat/${cat.id}`}>
                            <p>
                                {cat.title}
                            </p>
                        </Link>
                    </button>
                ))}
        </div>
    )
}

export default SecondNavbar;