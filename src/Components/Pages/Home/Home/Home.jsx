import React from 'react';
import Counter from '../../Counter/Counter';
import dhakaApp from '../Calculate';
import Banner from './Banner/Banner';

const Home = () => {
   const dhakaApp = ()=>{
    let lunch = 0;
    let dinner = 0;
    let ot = 0;
    let cng = 0;

   const calculate = lunch + dinner + ot + cng;
   console.log(calculate);
   }
    console.log(dhakaApp);
    return (
        <div>
           <section className='mt-10'> <Banner/> </section>
            {/* <Counter></Counter> */}
        </div>
    );
};

export default Home;