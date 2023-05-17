import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookingUpdate = () => {
    const booking = useLoaderData()
    console.log(booking.data)
    return (
        <div>
            <h1>Booking updating here</h1>
            <p></p>
        </div>
    );
};

export default BookingUpdate;