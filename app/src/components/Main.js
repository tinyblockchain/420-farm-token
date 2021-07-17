import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Main/Navbar'
import Landing from './Main/Landing'

export default function Main({ drizzle, drizzleState }) {
    return (
        <Router>
            <div className='screen'>
                <Navbar/>
                <main>
                    <Landing/>
                </main>
            </div>
        </Router>
    )
}