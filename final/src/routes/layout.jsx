import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from 'src/components/navbar.jsx'
import { Route } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='app-container'>
            <NavBar></NavBar>
            <Outlet />
        </div>
    )
}
