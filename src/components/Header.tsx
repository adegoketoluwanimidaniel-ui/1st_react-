import React from 'react';

const Header = () => {
   
    return (
        <header className='flex justify-between item-center bg-blue-600 text-white p-4 '>
            <div className='flex'>
                <p className='flex gap-2'>Tolu's <main className='text-blue-300 flex'>Website</main></p></div>
            <div className='flex gap-4'>
                <p >Home</p>
                <p>Services</p>
                <p>Contact</p>
            </div>
        </header>
    )
}

export default Header;