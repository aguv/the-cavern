import React, {useEffect} from 'react'
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {getCategory} from '../store/selectedCategory';

const CategoryView = ({match}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory(match.params.id))
            .then(_ => console.log('GOT CATEGORY'));
    }, [match.params.id])

    const selectedCategory = useSelector(state => state.selectedCategory)
    const user = useSelector(state => state.user);

    return (
        <div className='bg-gray-600 border-4 border-gray-700 w-full lg:w-8/12 lg:mx-auto p-4 rounded-md shadow-lg flex flex-col'>
            {user.username ? 
                (
                    <Link to={`/new-thread/${selectedCategory.id}`} className='flex self-end justify-evenly w-2/12 bg-yellow-700 p-2 rounded-sm border-t-4 border-yellow-900 hover:bg-red-200 hover:bg-red-700 shadow-lg'>
                        <span className='text-lg'>CREATE THREAD</span>
                        <FontAwesomeIcon icon={faPlus} className='mt-1'/>
                    </Link>
                ) : null                
            }
            
            <div>
                <div className='bg-gray-500 rounded-md h-auto m-3 h-40 border-2 border-gray-700 p-4 flex flex-col justify-between'>
                    <p className='text-3xl'>{selectedCategory.title}</p>
                    <hr />
                    <p className='text-justify w-11/12 self-center my-2'>{selectedCategory.description}</p>
                    <button className='self-end'>
                        <FontAwesomeIcon icon={faHeart} className='w-4 hover:text-red-500' />
                    </button>
                </div>
                <div className='m-2 flex justify-between px-5'>
                    <p>Threads</p>
                    <p>Posts</p>
                </div>
                <hr className='border-gray-400'/>
                {selectedCategory.threads?.map( thread => (
                    <div key={thread.id} className='m-3 hover:text-yellow-400 bg-gray-800 p-2 rounded-md border-b-4 hover:border-yellow-500 border-gray-500 shadow-lg transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-130'>
                        <Link className='flex justify-between mx-4' to={`/thread/${thread.id}`}>
                            <div>
                                <p>{thread.title}</p>
                                <p className='text-sm italic'>{thread.user.username}, {thread.createdAt.slice(0, 10)}</p>
                            </div>
                            <p>{thread.posts.length}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>        
    )
}

export default CategoryView
