import React from 'react';
import loading from '../../assets/images/loading.gif'

const Loading = () => {
    return (
        <div className='flex items-center min-h-screen justify-center'>
            <img className='w-50 h-50' src={loading} alt="loader" />
        </div>
    );
};

export default Loading;
