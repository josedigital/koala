import React from 'react';
import axios from 'axios'
import { testApi } from '../utils/helpers'


const About = () => {
  testApi().then(data => console.log(data))
  return (
    <div className="container about">
      <h1>About Us</h1>
    </div>
  )
}

export default About;
