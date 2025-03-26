import React from 'react'
import logo from '../assets/hicraft.png'

const Navbar = () => {
    return (
        <div className='flex justify-around items-center border-b-2'>
            <img src={logo} alt="logo" className='w-[4em]'/>
            <div>
                <ul className='flex justify-center space-x-5'>
                    <li>Freelancing</li>
                    <li>Team</li>
                    <li>Offers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex space-x-4'>
                <button>Submit a Need</button>
                <button className='bg-black text-white px-4 py-2 '>I'm a Freelancing</button>
            </div>
        </div>
    )
}

export default Navbar