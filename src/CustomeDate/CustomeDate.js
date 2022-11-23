// import React from 'react'

// const CustomeDate = () => {
//     return (
//         <div>CustomeDate</div>
//     )
// }

// export default CustomeDate

import React, { useState } from 'react';
import ModernDatepicker from 'react-modern-datepicker';
import './CustomeDate.css'

const CustomeDate = () => {
    const [startDate, setStartDate] = useState()




    function handleChange(date) {
        setStartDate(date)
    }


    return (
        <ModernDatepicker
            date={startDate}
            format={'DD-MM-YYYY'}
            showBorder
            onChange={date => handleChange(date)}
            placeholder={'Select a date'}
        />
    );
}

export default CustomeDate