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
                <p className='font-semibold'>samuelojeyinka@gmail.com</p>
                </span>
                 <span className='flex gap-3 mb-3'>
                <FaMapMarkedAlt size={19}/>
                <p className='font-semibold'>Nigeria,Osun</p>
                </span>


                </div>

                 <div className='right-con'>

                    <form>
                        <label>Full Name <span>*</span></label>
                        <input type='text' className='bg-rose-500' placeholder='EG: "Sam OJeyinka"'/>
                        <br/><br/>

                        <label>Email <span>*</span></label>
                        <input type='email' placeholder='youremail@example.com'/>
                        <br/><br/>
                        <label>Compose text <span>*</span></label>
                        <br/><br/>
                        <textarea className='border border-slate-400 rounded-md' placeholder='Write here..'>
                        
                        </textarea>
                        <button className='btn btn-primary w-full' ><FaEnvelopeOpenText/> Send message</button>
                    </form>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Contact