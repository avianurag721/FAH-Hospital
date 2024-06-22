import React from 'react'
import Poster1 from './Poster1'
import ConsultToggle from './ConsultToggle'
import Speciality from '../Common/Speciality'
import Poster2 from './Poster2'
import Services from '../Common/Services'
import Footer from '../Common/Footer';

const HomePage = () => {
  return (
    <div className=' font-serif bg-slate-200'>
      <Poster1 />
      <ConsultToggle />
      <Speciality />
      <Poster2 />
      <Services />
      <Footer/>
    </div>
  )
}

export default HomePage
