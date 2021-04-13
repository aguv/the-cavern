import React, { useState } from 'react';
import utils from '../utils';
import Alert from './Alert';
import { useDispatch } from 'react-redux';
import { createPost } from '../store/selectedThread';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const PostPopUp = ({ threadId, handlePopUp, username }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [form, setForm] = useState({
        content: '',
        threadId
    });

    const [alert, setAlert] = useState({
        title: '',
        message: '',
        color: ''
    });

    const handleChangeForm = e => {
        setForm(form => ({ ...form, [e.target.name]: e.target.value }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!utils.checkEmptyFields(form)) {
            utils.handleAlert('Error', 'You must fill all the inputs', 'bg-red-600', setAlert);
            return;
        }

        dispatch(createPost(form))
            .then(_ => {
                console.log('POST CREATED')
                handlePopUp();
                history.push(`/thread/${threadId}`);
            })
    }

    return (
        <div className='w-4/12 absolute right-6 top-72 bg-gray-600 border-4 border-gray-500 rounded-sm shadow-md p-4'>
            <div className='flex justify-between'>
                <p className='mb-2'>As user:<span className='text-yellow-500'> {username}</span></p>
                <button className='hover:text-red-600'>
                    <FontAwesomeIcon icon={faTimes} onClick={handlePopUp} />
                </button>
            </div>
            <form className='w-full flex h-48 flex-col' onSubmit={handleSubmit}>
                <textarea name="content" className='w-full flex-1 shadow-md rounded-sm p-4 text-gray-900' placeholder='content' onChange={handleChangeForm} />
                <button className='w-3/12 rounded-sm border-t-4 border-yellow-700 hover:bg-yellow-800 shadow-md bg-yellow-600 p-2 self-center my-4'>SEND!</button>
            </form>
            {alert.message ? <Alert title={alert.title} message={alert.message} color={alert.color} /> : null}
        </div>
    )
}

export default PostPopUp
