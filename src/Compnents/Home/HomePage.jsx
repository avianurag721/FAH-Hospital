import React from 'react'
import Poster1 from './Poster1'
import ConsultToggle from './ConsultToggle'
import Speciality from '../Common/Speciality'

const HomePage = () => {
  return (
    <div className=' bg-slate-200'>
      <Poster1 />
      <ConsultToggle />
      <Speciality/>
    </div>
  )
}

export default HomePage
