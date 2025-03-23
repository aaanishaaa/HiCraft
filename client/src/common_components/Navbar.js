import React from 'react'
import logo from '../assets/hicraft.png'

const Navbar = () => {
    return (
        <div className='flex justify-around items-center p-2 bg-gray-200'>
            <img src={logo} alt="logo" className='w-[7em]'/>
            <div>
                <ul className='flex justify-center space-x-4'>
                    <li>Freelancing</li>
                    <li>Team</li>
                    <li>Offers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex space-x-4'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Submit a Need</button>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>I'am a Freelancing</button>
            </div>
        </div>
    )
}

export default Navbar