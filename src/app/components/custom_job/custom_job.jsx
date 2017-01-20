import React from 'react';

import {jobHelpers} from '../utils/helpers'


class Custom_job extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      url: '',
      summary: '',
      location: '',
      job_id: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(e){
    //console.log(e.target.value)
	var newState = {};
	newState[e.target.name] = e.target.value;
    console.log(newState)
    this.setState(newState);

	}

  handleSubmit(e){
		e.preventDefault()
		jobHelpers.saveJob(this.state.title, this.state.url, this.state.summary, this.state.location).then(function(){
            console.log("4 state values sent to DB through saveJob helper")
		}.bind(this));
		this.setState({
			title: '',
			url: '',
            summary: '',
            location: ''            
		})
	}
    //-- TO TEST DELETE FUNCTION --
    handleDelete(e){
		e.preventDefault()
		jobHelpers.deleteJob(this.state.job_id).then(function(data){
            console.log("job_id sent to db for DELETION")
            console.log(data)
		}.bind(this));
		this.setState({
			job_id: ''       
		})
	}


  render () {
    return (
      <div className="container home">
        <h1>Create a Custom Job</h1>

        <form onSubmit={ this.handleSubmit }>
        
            {/* Title field */}
            <div className="form-element">
                <label htmlFor='title' className="form-label">Job Title</label>
                <input
                    value={ this.state.title } 
                    onChange={ this.handleChange }  
                    label='Job Title'
                    type='text'
                    name='title'
                    placeholder='Job Title' />
            </div>
                
            
            {/* URL */}
            <div className="form-element">
                <label htmlFor='url' className="form-label">URL</label>
                <input
                    value={ this.state.url } 
                    onChange={ this.handleChange }  
                    label='Link to job posting'
                    type='text'
                    name='url'
                    placeholder='www.myjobposting.com' />
            </div>
            
            {/* Summary Field */}
            <div className="form-element">
                <label htmlFor='summary' className="form-label">Summary</label>
                <textarea
                    value={ this.state.summary } 
                    onChange={ this.handleChange } 
                    label='Job Summary'
                    name='summary'
                    placeholder='Front End job requires knowledge of SASS' />
            </div>

            {/* Location field */}
            <div className="form-element">
                <label htmlFor='location' className="form-label">Location</label>
                <input
                    value={ this.state.location } 
                    onChange={ this.handleChange } 
                    label='Job Location'
                    type='text'
                    name='location'
                    placeholder='Austin, TX' />
            </div>

            {/*Seems like we are missing Company name. *Check data from API call */}

            <button type="submit">
                Save Job
            </button>

            
        </form>
        
        {/*can delete below this, only for testing*/}

        <h2>Test - Delete Job Function</h2>

        <form onSubmit={ this.handleDelete }>
            {/* Location field */}
            <div className="form-element">
                <label htmlFor='job_id' className="form-label">Just the number from Object ID</label>
                <input
                    value={ this.state.job_id } 
                    onChange={ this.handleChange } 
                    label='job_id'
                    type='text'
                    name='job_id'
                    placeholder='58822a7016bedeae03c955e8' />
            </div>
            <button type="submit">
                Delete Job
            </button>

        </form>
      </div>
    )  
  }
  
}

export default Custom_job;