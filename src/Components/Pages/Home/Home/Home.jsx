import React from 'react';
import Counter from '../../Counter/Counter';
import Banner from './Banner/Banner';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';
import Faq from '../FAQ/FAQ';
import WhyChooseUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
           <section className='mt-20'> <Banner/> </section>
           <section className='mt-10'> <WhyChooseUs/> </section>
           <section className='mt-10'> <Faq/> </section>
          
            {/* <Counter></Counter> */}
            
        </div>
    );
};

export default Home;