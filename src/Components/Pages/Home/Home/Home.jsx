import React from 'react';
import Counter from '../../Counter/Counter';
import Banner from './Banner/Banner';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';
import Faq from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
           <section className='mt-10'> <Banner/> </section>
           {/* <section className='mt-10'> <Testimonials/> </section> */}
           <section className='mt-10'> <Faq/> </section>
           <section className='my-10'> <Contact/> </section>
            {/* <Counter></Counter> */}
            
        </div>
    );
};

export default Home;