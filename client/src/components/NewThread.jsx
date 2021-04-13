import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createThread } from '../store/selectedCategory';
import axios from 'axios';
import utils from '../utils';
import Alert from './Alert';

const NewThread = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [form, setForm] = useState({ title: '', content: '' })
    const [alert, setAlert] = useState({
        title: '',
        message: '',
        color: ''
    });


    const handleFormChange = e => setForm(form => ({ ...form, [e.target.name]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();

        if (!utils.checkEmptyFields(form)) {
            utils.handleAlert('Error', 'You must fill all the inputs', 'bg-red-600', setAlert);
            return;
        }

        const completedForm = { ...form, categoryId: match.params.id }

        dispatch(createThread(completedForm))
            .then(_ => {
                console.log(`THREAD CREATED`);
                history.push(`/cat/${match.params.id}`);
            });
    }

    return (
        <div className='bg-gray-600 w-8/12 mx-auto px-12 py-6 flex flex-col rounded-md border-t-4 rounded-gray-400'>
            <p className='text-lg'>Add your thread:</p>
            <hr className='mt-2 mb-4 border-gray-200' />
            <form className='flex flex-col text-gray-900' onSubmit={handleSubmit}>
                <input className='p-3 border-sm border-b-4 border-gray-400' placeholder='title' name='title' onChange={handleFormChange} value={form.title} />
                <textarea placeholder='content' name="" id="" cols="30" rows="10" name='content' className='my-4 p-3 rounded-sm border-b-4 border-gray-400' onChange={handleFormChange} value={form.content} />
                <div className='flex justify-evenly my-4 text-gray-100'>
                    <button className='bg-yellow-600 w-3/12 p-2 rounded-sm border-t-4 border-yellow-700 hover:bg-yellow-800' onClick={() => history.goBack()}>
                        BACK
                    </button>
                    <input value='POST' type='submit' className='bg-green-600 w-3/12 p-2 rounded-sm border-t-4 border-green-700 hover:bg-green-800 text-center cursor-pointer' />
                </div>
            </form>
            {alert.message ? <Alert title={alert.title} message={alert.message} color={alert.color} /> : null}
        </div>
    )
}

export default NewThread
