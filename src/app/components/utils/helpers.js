const axios = require('axios')


// ----------------- USERS --------------------------------

export const userHelpers = {

    saveUser: (/*not sure what/if we need to pass in here*/) => {
        return axios.post('http://localhost:8080/saveUser')
    },

    deleteUser: (/*this will need the id*/) => {
        return axios.delete('http://localhost:8080/deleteUser')
    },
   
}


// ----------------- JOBS --------------------------------

export const jobHelpers = {

    saveApiJob: (/*will require the same data as saveJob*/) => {},//this function and createjob might be able to be the same

    saveJob: (newTitle, newUrl, newSummary, newLocation)=>{ 
        return axios.post('http://localhost:8080/savejob', { 
            title: newTitle,
            url: newUrl,
            summary: newSummary,
            location: newLocation 
        })
    },

    getJobs: () => {
        return axios.get('http://localhost:8080/getJobs',)
    },
    
    //this will require a job _id - built on a guess for now
    editJob: (job_id,newTitle, newUrl, newSummary, newLocation) => {
        return axios.put('http://localhost:8080/editJob',{
            job_id: job_id,
            title: newTitle,
            url: newUrl,
            summary: newSummary,
            location: newLocation 
        })
    },

    //this will require a job _id
    deleteJob: (job_id) => {
        console.log('helper', job_id)
        return axios.put('http://localhost:8080/deleteJob',{
            job_id: job_id
        })
    },
}


// ----------------- NOTES --------------------------------

export const noteHelpers = {

    saveNote: (jobId, noteCategory, jobNote) => {
        return axios.post('http://localhost:8080/saveNote', {
            Jobs_id: jobId,
            Jobs_Notes_Category: noteCategory,
            Jobs_Notes_NoteText: jobNote
        })
    },

    //This job id might not even be necessary because we get back the enire object
    getNotes: (jobId) => {
        return axios.get('http://localhost:8080/getNotes',{
            job_id: jobId
        })
    },

    editNote: (jobId, noteCategory, noteId) => {
        return axios.put('http://localhost:8080/editNote', {
            Jobs_id: jobId,
            // Jobs_Notes_Category: noteCategory,
            Jobs_Notes_id: noteId
        })
    },

    deleteNote: (jobId, noteId) => {
        return axios.put('http://localhost:8080/deleteNote', {
            Jobs_id: jobId,
            Jobs_Notes_id: noteId
        })
    },

    
}

// ----------------- TESTING --------------------------------

export function jobsApi () {
  return axios.get('http://localhost:8080/api/jobs/all')
}
