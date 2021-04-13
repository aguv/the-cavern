import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Spin from './Spin';
import Alert from './Alert';
import utils from '../utils';
import { loginRequest } from '../store/user';
import { useDispatch } from 'react-redux';

const Login = () => {
    const history = useHistory('/')

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const dispatch = useDispatch();

    const [spin, setSpin] = useState(false);

    const [alert, setAlert] = useState({
        title: '',
        message: '',
        color: ''
    });

    const handleFormChange = e => {
        setForm(form => ({ ...form, [e.target.name]: e.target.value }));
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        if (!utils.checkEmptyFields(form)) {
            utils.handleAlert('Error', 'You must fill all the inputs', 'bg-red-600', setAlert);
            return;
        } else if (!utils.validPasswordLength(form.password)) {
            utils.handleAlert('Error', 'Your password must have 8 characters', 'bg-red-600', setAlert);
            return;
        }

        setSpin(spin => !spin);

        dispatch(loginRequest(form))
            .then(data => { 
                setSpin(spin => !spin);
                if(data.error) {
                    utils.handleAlert('Error', data.payload.message, 'bg-red-600', setAlert);
                    setForm({username: '', password: ''});
                    return;
                }
                history.push('/');
            });

    }

    return (
        <div className='flex justify-center text-gray-900 flex-col items-center'>
            <form className='flex flex-col h-auto w-4/12 p-4 bg-gray-500 border-4 border-gray-600 rounded-md' onSubmit={handleFormSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    onChange={handleFormChange}
                    value={form.email}
                    className='my-4 p-2 shadow-md rounded-sm border-t-4 border-gray-300'
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={handleFormChange}
                    value={form.password}
                    className='p-2 shadow-md rounded-sm border-t-4 border-gray-300'
                />
                <input
                    type='submit'
                    value='LOGIN'
                    className='my-4 p-2 shadow-md bg-yellow-600 text-gray-100 rounded-sm border-b-4 border-yellow-700 hover:bg-yellow-800 cursor-pointer'
                />
                <Link to='/register' className='italic text-sm self-end text-gray-100 hover:text-yellow-400'>
                    don't have an account?
                </Link>
                {alert.message ? <Alert title={alert.title} message={alert.message} color={alert.color} /> : null}
            </form>
            {spin ? <Spin text={'Connecting...'} /> : null}
        </div>
    )
}

export default Login
