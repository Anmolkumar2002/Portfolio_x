import axios from 'axios';
import React from 'react'
import { useForm} from "react-hook-form"

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = async(data) => {
        const userInfo = {
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
            await axios.post("https://getform.io/f/axooqlzb", userInfo);
            alert("Your message has been sent");
        } catch (error) {
            console.log(error);
            
        }
      };
    return (
        <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='text-3xl font-bold mb-4'>Contact me</div>
            <span>Please fill out the form below to contact me</span>
            <div className='flex flex-col items-center justify-center mt-10'>
                <form onSubmit={handleSubmit(onSubmit)} action=""/*"https://getform.io/f/axooqlzb"*/ className='bg-slate-300 w-96 px-8 py-6 rounded-xl' /*method="POST"*/>
                    <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700' htmlFor="">Full Name</label>
                        <input 
                            {...register("name", { required: true })}
                            name='name' className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='name' placeholder='Enter Your Full Name' />
                            {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700' htmlFor="">Email Address</label>
                        <input
                            {...register("email", { required: true })}
                            name='email' className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='email' placeholder='Enter Your Email Address' />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-gray-700' htmlFor="">Message</label>
                        <textarea 
                            {...register("message", { required: true })}
                            name='message' className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id='message' placeholder='Type Your Message here' />
                        {errors.message && <span>This field is required</span>}
                    </div>
                    <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
