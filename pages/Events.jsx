import { Footer2, Navbar2} from '../components';

import React from 'react'
import '../styles/globals.css';


import Image from 'next/image';

import {RoboCarousel} from '../components';


function Events() {
  return (
    <div className="bg-primary-black overflow-hidden">
      
        <Navbar2 />
        <RoboCarousel />
        <div className="" />
        <Footer2 />
    </div>
  )
}

export default Events;