import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PostView from './PostView';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getThread, cleanThread } from '../store/selectedThread';
import PostPopUp from './PostPopUp';

const ThreadView = ({ match }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [createPost, setCreatePost] = useState(false);

    useEffect(() => {
        dispatch(getThread(match.params.id))
            .then(_ => console.log(`GOT THREAD ID: ${match.params.id}`));

        return dispatch(cleanThread());
    }, [match]);

    const selectedThread = useSelector(state => state.selectedThread);
    const user = useSelector(state => state.user);

    const handlePopUp = () => {
        setCreatePost(bool => !bool);
    }

    return (
        <div className='bg-gray-600 mx-auto flex flex-col items-center w-9/12 border-4 border-gray-700 rounded-md p-4' id='top'>
            <div className='bg-gray-700 w-full mb-4 p-2 flex justify-between items-center rounded-sm'>
                <div className=''>
                    <p className='text-xl text-yellow-500'>{selectedThread.title}</p>
                    <p className='text-yellow-500'>{selectedThread.createdAt?.slice(0, 10)} - {selectedThread.createdAt?.slice(11, 16)}hs</p>
                    <p className='cursor-pointer' onClick={() => history.push(`/cat/${selectedThread.categoryId}`)}><span className='italic underline'>Go back</span>...</p>
                </div>
                {user.username ?
                    (
                        <button className='bg-yellow-600 p-2 rounded-sm border-t-4 border-yellow-700 hover:bg-yellow-800 shadow-md self-start' onClick={handlePopUp}>
                            <p>CREATE POST</p>
                        </button>
                    ) : null
                }
            </div>
            {createPost ? <PostPopUp threadId={selectedThread.id} handlePopUp={handlePopUp} username={user.username}/> : null}
            {selectedThread.posts?.map((post, index) => (
                <PostView key={post.id} post={post} index={index + 1} />
            ))}
            <a href='#top' className='bg-blue-600 p-2 rounded-sm border-t-4 border-blue-900 hover:bg-blue-800 shadow-md self-start'>
                BACK TO TOP
            </a>
        </div>
    )
}

export default ThreadView
