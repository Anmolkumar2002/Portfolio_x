import React from 'react'
import java from "../image/java.png";
import python from "../image/python.webp";
import mongoDB from "../image/mongodb.jpg";
import express from "../image/express.png";
import reactjs from "../image/reactjs.png";
import nodejs from "../image/node.png";

const Portfolio = () => {
    const cardItem = [
        {
            id:1,
            logo:mongoDB,
            name:"MongoDB"
        },
        {
            id:2,
            logo:express,
            name:"Express"
        },
        {
            id:3,
            logo:reactjs,
            name:"ReactJS"
        },
        {
            id:4,
            logo:nodejs,
            name:"NodeJS"
        },
        {
            id:5,
            logo:python,
            name:"Python"
        },
        {
            id:6,
            logo:java,
            name:"Java"
        }
    ]
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
                <span className='underline font-semibold'>Featured Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {
                        cardItem.map(({id,logo,name}) => (
                            <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg sgadow-lg p-1 cursor-pointer hover:scale-110 duration-200' key={id}>
                                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px] ' alt="" />
                                <div>
                                    <div className='font-bold text-xl mb-2 px-6'>{name}</div>
                                    <p className='px-6 text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, officia?</p>
                                </div>
                                <div className='px-6 py-4 space-x-3'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
