import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-gray-900 h-20 w-auto shadow-lg flex items-center p-4 justify-between'>
            <Link to='/'>
                <div className='flex flex-col p-2 shadow-lg hover:text-yellow-300'> 
                    <h6 className='lg:text-4xl'>JavaScripting the Web</h6>
                    <p className='ml-1 text-sm'>We talk about JavaScript...</p>
                </div>
            </Link>
            <div>
                <button className='hover:bg-yellow-300 hover:text-gray-700 bg-yellow-600 rounded-md border-2 border-solid border-gray-600 p-2 mr-2'>Login</button>
                <button className='hover:bg-yellow-300 hover:text-gray-700 bg-yellow-600 rounded-md border-2 border-solid border-gray-600 p-2'>Register</button>
            </div>
        </div>
    )
}

export default Navbar