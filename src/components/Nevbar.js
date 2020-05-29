import React from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-10 flex mt-2">
            <div classNam="m-2">
                <button class="bg-gray-300 text-xl text-black rounded-full hover:bg-gray-100 focus:outline-none w-10 h-10 flex items-center justify-center">
                    <FiMenu />
                </button>
            </div>
            <div class="bg-white flex items-center rounded-full shadow-xl w-full">
                <input class="rounded-l-full w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                <div class="pr-2">
                    <button class="bg-blue-500 text-white rounded-full hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center">
                        <FiSearch />
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar