import React from 'react'
import java from "../image/java.png";
import html from "../image/html.png";
import css from "../image/css.jpg";
import javascript from "../image/javascript.png";
import oracle from "../image/oracle.png";
import spring from "../image/spring.png";
import springBoot from "../image/springBoot.jpg";

const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: css,
            name: "CSS"
        },
        {
            id: 3,
            logo: java,
            name: "Java"
        },
        {
            id: 4,
            logo: javascript,
            name: "JavaScript"
        },
        {
            id: 5,
            logo: oracle,
            name: "Oracle"
        },
        {
            id: 6,
            logo: spring,
            name: "Spring"
        },
        {
            id: 7,
            logo: springBoot,
            name: "Spring Boot"
        }
    ]
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                <p className=''>I've work in college in below Technologies</p>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className='flex flex-col items-center justify-center md:w-[250px] md:h-[250px] border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 duration-200' key={id}>
                                <img src={logo} className='w-[150px] h-[150px] rounded-full ' alt="" />
                                <div>
                                    <div className='font-bold text-xl mb-2 px-2 my-2'>{name}</div>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
