import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import utils from '../utils';
import { registerRequest } from '../store/user';
import { useDispatch } from 'react-redux';
import Spin from './Spin';
import Alert from './Alert';

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [spin, setSpin] = useState(false);

    const [alert, setAlert] = useState({
        title: '',
        message: '',
        color: ''
    });

    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const handleFormChange = e => {
        setNewUser(newUser => ({ ...newUser, [e.target.name]: e.target.value }))
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        if (!utils.checkEmptyFields(newUser)) {
            utils.handleAlert('Error', 'You must fill all the inputs', 'bg-red-600', setAlert);
            return;
        }
        else if (!utils.validPasswordLength(newUser.password)) {
            utils.handleAlert('Error', 'Your password must have 8 characters', 'bg-red-600', setAlert);
            return
        }
        else if (!utils.samePasswords(newUser.password, newUser.password2)) {
            utils.handleAlert('Error', 'Check your passwords', 'bg-red-600', setAlert);
            return
        };

        setSpin(spin => !spin);

        dispatch(registerRequest(newUser))
            .then( data => {
                setSpin(spin => !spin);
                if(data.error) {
                    utils.handleAlert('Error', data.payload.message, 'bg-red-600', setAlert);
                    setNewUser({username: '', email: '', password: '', password2: ''});
                    return;
                }
                history.push('/login');
            });
    }

    return (
        <div className='flex items-center text-gray-900 flex-col'>
            <form
                className='flex flex-col h-auto w-4/12 p-4 bg-gray-500 border-4 border-gray-600 rounded-md'
                onSubmit={handleFormSubmit}
            >
                <input
                    type='text'
                    name='username'
                    value={newUser.name}
                    placeholder='name'
                    onChange={handleFormChange}
                    className='p-2 shadow-md rounded-sm border-t-4 border-gray-300'
                />
                <input
                    type='email'
                    name='email'
                    value={newUser.email}
                    placeholder='email'
                    onChange={handleFormChange}
                    className='my-4 p-2 shadow-md rounded-sm border-t-4 border-gray-300'
                />
                <input
                    type='password'
                    name='password'
                    value={newUser.password}
                    placeholder='password'
                    onChange={handleFormChange}
                    className='p-2 shadow-md rounded-sm border-t-4 border-gray-300'
                />
                <input
                    type='password'
                    name='password2'
                    value={newUser.password2}
                    placeholder='repeat your password'
                    onChange={handleFormChange}
                    className='my-4 p-2 shadow-md rounded-sm border-t-4 border-gray-300'
                />
                <input
                    type='submit'
                    value='REGISTER'
                    className='mb-4 p-2 shadow-md bg-yellow-600 text-gray-100 rounded-sm border-b-4 border-yellow-700 hover:bg-yellow-800 cursor-pointer'
                />
                <Link to='/login' className='italic text-sm self-end text-gray-100 hover:text-yellow-400'>
                    already have an account?
                </Link>
                {alert.message ? <Alert title={alert.title} message={alert.message} color={alert.color}/> : null}
            </form>
            {spin ? <Spin text={'Creating account...'}/> : null}
        </div>
    )
}
export default Register
