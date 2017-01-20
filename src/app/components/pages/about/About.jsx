import React from 'react';
import axios from 'axios'
import { testApi, jobHelpers } from '../../utils/helpers'


// const About = () => {
//   testApi().then(data => console.log(data))
//   return (
//     <div className="container about">
//       <h1>About Us</h1>
//     </div>
//   )
// }
// export default About;

const getJobs = () => {
  jobHelpers.getJobs().then(data => console.log(data))
  return (
    <div className="container about">
      <h1>Andy's Jobs</h1>
    </div>
  )
}

export default getJobs;
