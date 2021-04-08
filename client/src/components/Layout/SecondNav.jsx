import React from 'react'
import {Link} from 'react-router-dom'

const categories = ["Algorithms & ADTS", "Front-end", "Back-end", "Fullstack", "Databases", "Other technologies", "Free zone"]

const SecondNavbar = () => {
    return (
        <div className='bg-gray-800 h-16 w-auto shadow-lg flex justify-around items-center invisible lg:visible'>
            {categories.map((cat, index) => (
                    <Link key={index} className='flex items-center hover:text-yellow-300 hover:border-b-4 h-full border-b-2 border-transparent hover:border-yellow-500'>
                        <p>
                            {cat}
                        </p>
                    </Link>
                ))}
        </div>
    )
}

export default SecondNavbar;