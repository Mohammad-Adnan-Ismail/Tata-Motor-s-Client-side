import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    
    return (
        <div>
            
            <AvailableAppointments ></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;