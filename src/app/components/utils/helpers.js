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
            location: newLocation })
    },

    getJobs: () => {
        return axios.get('http://localhost:8080/getJobs',)
    },
    
    editJob: () => {
        return axios.put('http://localhost:8080/editJob',)
    },

    deleteJob: () => {
        return axios.delete('http://localhost:8080/deleteJob',)
    },
}


// ----------------- NOTES --------------------------------

export const noteHelpers = {

    saveNote: (/*need the job id and note category*/) => {
        return axios.post('http://localhost:8080/saveNote', {})
    },

    getNotes: (/*are we getting all categories or just category*/) => {
        return axios.get('http://localhost:8080/getNotes')
    },

    editNote: (/*NOT SURE WE NEED THIS, MAYBE THE SAME AS saveNote*/) => {
        return axios.put('http://localhost:8080/editNote', {})
    },

    deleteNote: (/*need the job id and note category*/) => {
        return axios.delete('http://localhost:8080/deleteNote', {})
    },

    
}

// ----------------- TESTING --------------------------------

export function testApi () {
  return axios.get('http://localhost:8080/api/testing')
}
