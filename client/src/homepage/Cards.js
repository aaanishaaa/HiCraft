import React from 'react';

const Cards = ({ icon,title, value }) => {
    return (
        <div className='border p-5 m-7 w-[15rem] flex'>
            <div>
            <img src={icon} alt='icon' className='w-20'/></div>
            <div className='p-5'>
            <p className='font-bold text-lg'>{value}</p>
            <h2 className='text-gray-600'>{title}</h2></div>
        </div>
    );
};

export default Cards;
