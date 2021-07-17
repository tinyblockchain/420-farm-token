import React from 'react'
import '../../index.css'

export default function Navbar() {
    return (
        <header className='nav'>
            <div className='nav-section'>
                <h1>420 Farm</h1>
            </div>
            <div className='nav-section'>
                <button className='button'>Open App</button>
            </div>
        </header>
    )
}