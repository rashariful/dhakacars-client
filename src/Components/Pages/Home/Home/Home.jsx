import React from 'react';
import Counter from '../../Counter/Counter';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <section className='mt-10'> <Banner/> </section>
            {/* <Counter></Counter> */}
        </div>
    );
};

export default Home;