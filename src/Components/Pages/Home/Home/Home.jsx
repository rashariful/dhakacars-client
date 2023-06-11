import React from 'react';
import Counter from '../../Counter/Counter';
import Banner from './Banner/Banner';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';
import Faq from '../FAQ/FAQ';
import WhyChooseUs from '../WhyUs/WhyUs';
import Support from '../Support/Support';
import CarSearch from '../CarSearch/CarSearch';

const Home = () => {
    return (
        <main>
           <section className='mt-20 relative'> <Banner/> </section>
           <section className='mt-10 lg:absolute bottom-[212px] left-80'> <CarSearch/> </section>
           <section className='mt-10 bg-slate-300'> <WhyChooseUs/> </section>
           <section className='mt-10'> <Faq/> </section>
           <section className='mt-10'> <Support/> </section>      
        </main>
    );
};

export default Home;