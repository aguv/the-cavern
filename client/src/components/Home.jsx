import React from 'react';
import MiniView from './MiniView';
import {useSelector, useDispatch} from 'react-redux';
import {getCategories} from '../store/categories';
import {useEffect} from 'react';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
        .then( _ => console.log('GOT CATEGORIES'));

    }, [])


    const categories = useSelector(state => state.categories);

    return (
        <div className='bg-gray-600 border-4 border-gray-700 h-full w-full lg:w-8/12 lg:mx-auto p-4 rounded-md shadow-lg'>
            {categories?.map(cat => <MiniView key={cat.id} cat={cat}/>)}
        </div>
    )
}

export default Home;
