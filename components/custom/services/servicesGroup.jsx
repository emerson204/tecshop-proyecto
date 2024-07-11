import React from 'react'
import Image from 'next/image';
import Services from './services';

export default function ServicesGroup() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 py-16 md:flex-row md:justify-around md:px-10" >
        <Services image='/services/transport.png' title='FREE AND FAST DELIVERY' subtitle='Free delivery for all orders over $140' />
        <Services image='/services/contact.png' title='24/7 CUSTOMER SERVICE' subtitle='Friendly 24/7 customer support' />
        <Services image='/services/segury.png' title='MONEY BACK GUARANTEE' subtitle='We reurn money within 30 days' />
      </div>
    </>
  );
}
