import React, { useState } from 'react';
import ServicesBanner from './ServicesBanner/ServicesBanner';
import ServicesOptions from './ServicesOptions/ServicesOptions';
import SpecialTreatment from '../Home/SpecialTreatment/SpecialTreatment';

const Services = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <ServicesBanner selected={selected} setSelected={setSelected}></ServicesBanner>
            <ServicesOptions selected={selected}></ServicesOptions>
            <SpecialTreatment></SpecialTreatment>
        </div>
    );
};

export default Services;