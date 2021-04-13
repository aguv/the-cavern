import React from 'react'

const Spin = ({text}) => {
    return (
        <button type='button' className='bg-gray-500 w-2/12 flex flex-column p-4 mt-4 rounded-md border-t-4 border-yellow-500 shadow-md' disabled>
            <svg className="animate-spin w-5 text-yellow-500 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className='flex-1 text-yellow-400'>{text}</p>
        </button>
    )
}

export default Spin
