import React from 'react';
import axios from 'axios'
import { testApi, jobHelpers, noteHelpers } from '../../utils/helpers'


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
jobHelpers.getJobs().then(data => console.log(data.data.Jobs[0].title))
  return (
    <div className="container about">
      <h1>Andy's Jobs</h1>
    </div>
  )
}
export default getJobs;

// const getNotes = () => {
//   var id = '5883bcf07270048fdcd1dd00'
//   noteHelpers.getNotes(id).then(data => console.log(data))
//   return (
//     <div className="container about">
//       <h1>Andy's Job Notes for job id 5883bcf07270048fdcd1dd00</h1>
//     </div>
//   )
// }

// export default getNotes;
