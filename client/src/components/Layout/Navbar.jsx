import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/user';

const Navbar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogOut = _ => {
        dispatch(logOut());
    }

    return (
        <div className='bg-gray-900 h-20 w-auto shadow-lg flex items-center p-4 justify-between'>
            <Link to='/'>
                <div className='flex flex-col p-2 shadow-lg hover:text-yellow-300'>
                    <h6 className='lg:text-4xl'>JavaScripting the Web</h6>
                    <p className='ml-1 text-sm'>We talk about JavaScript...</p>
                </div>
            </Link>
            {!user.username ? 
                (
                    <div>
                        <Link to='/login' className='hover:bg-yellow-400 hover:text-gray-700 bg-yellow-600 rounded-md border-2 border-solid border-gray-600 p-2 mr-2'>Login</Link>
                        <Link to='/register' className='hover:bg-yellow-400 hover:text-gray-700 bg-yellow-600 rounded-md border-2 border-solid border-gray-600 p-2'>Register</Link>
                    </div>
                ) : 
                (
                    <div className='flex'>
                        <p className='self-end mr-5'>Welcome back, {user.username}...</p>
                        <button onClick={handleLogOut} className='hover:bg-yellow-400 hover:text-gray-700 bg-yellow-600 rounded-md border-2 border-solid border-gray-600 p-2'>Logout</button>
                    </div>
                )
            }
            
        </div>
    )
}

export default Navbar