
import React, { useState } from 'react';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
      <div className="shadow-md w-full  sticky top-0 left-0 z-50">
        <div className="md:flex items-center justify-between bg-[rgb(18,30,54)] py-4 md:px-10 px-7 text-white">
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <span>{"<MK/>"}</span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[rgb(18,30,54)] md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link , index) => (
              <li key={Math.random()} className="md:ml-8 md:my-0 my-7 font-semibold">
                <a
                  href={link.link}
                  className="text-white-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
              Get Started
            </button> */}
          </ul>
        </div>
      </div>
    );
};

export default Nav;