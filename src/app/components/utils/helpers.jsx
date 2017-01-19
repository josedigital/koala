const axios = require('axios')

const helpers = {

    //------ Jobs -----
    saveJob: function(/*this will need the id*/) {},

    createCustomJob: (newTitle, newUrl, newSummary, newLocation) => { 
        return axios.post('newjob', { 
            title: newTitle,
            url: newUrl,
            summary: newSummary,
            location: newLocation })
    },

    deleteJob: function(/*this will need the id*/) {},

    getJobs: () => {
        return axios.get('/xx/xx')
    },

    //----- Notes ------

    createNote: function(/*this will need the id*/) {},

    updateNote: function(/*this will need the id*/) {},

    deleteNote: function(/*this will need the id*/) {},

    getNotes: () => {
        return axios.get('/xx/xx')
    }

}

module.exports = helpers