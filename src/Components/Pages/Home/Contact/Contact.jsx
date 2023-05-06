import React from 'react';
import '../../../../styles/ContactUsStyles.css';
import COLORS  from "../../../../assets/COLORS/COLORS"
import {FaPhoneAlt,FaEnvelope,FaEnvelopeOpenText,FaMapMarkedAlt} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact-sec'>
        <div className='contact-bg'>
            <div className='contact-con'>

                <div className='left-con'>
                    <h2 className='text-4xl font-extrabold mb-10 leading-normal'>Need additional information?</h2>
                    <p className='mb-10'>A multifaceted professional skilled
                         in multiple fields of research, development 
                         as well as a learning specialist. Over 15 years 
                         of experience.
                    </p>

                    <span className='flex gap-3 mb-3'>
                <FaPhoneAlt size={19}/>
                <p  className='font-semibold'> +8801850-273117</p>
                </span>
                <span className='flex gap-3 mb-3'>
                <FaEnvelope size={19}/>
                <p className='font-semibold'>dhakacars.com@gmail.com</p>
                </span>
                 <span className='flex gap-3 mb-3'>
                <FaMapMarkedAlt size={19}/>
                <p className='font-semibold'>Road # 03, House # 03, Nikunja 02, <br/> <span>Dhaka Bangladesh 1229</span> </p>
                </span>


                </div>

                 <div className='right-con'>

                    <form>
                        <label>Full Name <span className='text-rose-600'>*</span></label>
                        <input type='text' className='border border-slate-400 rounded-md focus:border-rose-600 transition duration-75' placeholder='EG: "Sam OJeyinka"'/>
                        <br/><br/>

                        <label>Email <span className='text-rose-600'>*</span></label>
                        <input className='border border-slate-400 rounded-md focus:border-rose-600 transition duration-75'  type='email' placeholder='youremail@example.com'/>
                        <br/><br/>
                        <label>Message <span className='text-rose-600'>*</span></label>
                        <br/><br/>
                        <textarea className='border border-slate-400 rounded-md focus:border-rose-600 transition duration-75' placeholder='Write here..'>
                        
                        </textarea>
                        <button className='btn mt-5 bg-[#FF4C30] border-none w-full hover:bg-[#FF4C40]' ><FaEnvelopeOpenText className='mr-5'/> Send message</button>
                    </form>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Contact