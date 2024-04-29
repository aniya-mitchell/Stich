import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar';

export default function Layout() {
    return React.createElement('div', { className: 'app-container' },
        React.createElement(NavBar, null),
        React.createElement(Outlet, null)
    );
}