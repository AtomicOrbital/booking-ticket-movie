import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'



export default function Header() {
    return (
        <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-opacity-40 bg-black text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src='./img/headTixLogo.png' alt='logo' className='h-20 '></img>

                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink  to="/home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 dark:border-violet-400 text-white" activeClassName="border-b-2 border-white" >Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink  to="/contact" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white" activeClassName="border-b-2 border-white">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink  to="/news" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"  activeClassName="border-b-2 border-white">News</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
