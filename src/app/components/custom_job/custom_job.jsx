import React from 'react';

import helpers from '../utils/helpers.jsx'


class Custom_job extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      url: '',
      summary: '',
      location: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
		helpers.createCustomJob(this.state.title, this.state.url, this.state.summary, this.state.location).then(function(){
			console.log("New Custom Job SAVED to DB")
		}.bind(this));
		this.setState({
			title: '',
			url: '',
            summary: '',
            location: ''
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
      </div>
    )  
  }
  
}

export default Custom_job;