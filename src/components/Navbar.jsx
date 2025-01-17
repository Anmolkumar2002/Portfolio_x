import React, { useState } from 'react'
import pics from "../../public/photo.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        },
    ]

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0'>
            <div className='flex justify-between h-16 items-center'>
                <div className='flex space-x-2'>
                    <img src={pics} className='h-12 w-12 rounded-full' alt="" />
                    <h1 className='font-semibold text-xl cursor-pointer'>
                        Anmo<span className='text-green-500 text-2xl'>l</span>
                        <p className='text-sm'>Web Developer</p>
                    </h1>
                </div>
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {
                            navItems.map(({id, text}) => ( 
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>
                            ))
                        }
                    </ul>
                    <div onClick={() => setMenu(!menu)} className='md:hidden'>
                        {menu ? <IoCloseSharp size={24}/> : <AiOutlineMenu size={24}/>}
                    </div>
                </div>
            </div>
            {menu && (
                <div>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                        {
                            navItems.map(({id, text}) => ( 
                                <li className='hover:scale-105 duration-200 font-medium cursor-pointer' key={id}>{text}</li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    </>
  )
}

export default Navbar
