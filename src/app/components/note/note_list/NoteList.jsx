import React, {Component} from 'react'

import {noteHelpers} from '../../utils/helpers'

import Note from '../Note'
import TextArea from '../../forms/TextArea'
import TextInput from '../../forms/TextInput'
import Select from '../../forms/Select'

class NoteList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobId:'',
      jobNote: '',
      noteId:'',
      noteCategory: ''
    }

     this.handleJobId = this.handleJobId.bind(this)
     this.handleJobNote = this.handleJobNote.bind(this)
     this.handleNoteId = this.handleNoteId.bind(this)
     this.handleCategory = this.handleCategory.bind(this)
     this.handleSubmitNote = this.handleSubmitNote.bind(this)
     this.handleSubmitDelete = this.handleSubmitDelete.bind(this)
    
  }
  handleJobId (e) {
    this.setState({
      jobId: e.target.value
    })
  }

  handleJobNote (e) {
    this.setState({
      jobNote: e.target.value
    })
  }

  handleNoteId (e) {
    this.setState({
      noteId: e.target.value
    })
  }

  handleCategory (e) {
    this.setState({
      noteCategory: e.target.value
    })
  }

  handleSubmitNote(e){
    e.preventDefault()
    noteHelpers.saveNote(this.state.jobId, this.state.noteCategory, this.state.jobNote).then(function(){
      console.log("jobId & jobNote sent into db")
    }.bind(this));
    this.setState({
      jobId: '',
      jobNote: '',
      noteCategory: ''
    })
  }

  handleSubmitDelete(e){
    e.preventDefault()
    noteHelpers.deleteNote(this.state.jobId, this.state.noteId).then(function(){
      console.log("jobId & noteId sent into db for deletion")
    }.bind(this));
    this.setState({
      jobId: '',
      noteId: ''
    })
  }

  render () {
    return (
      
        <div className="container list">

            <h1>List</h1>
            <Note />

            <hr />

            <h1>Create Note</h1>

            <form onSubmit={ this.handleSubmitNote }>
              <TextInput 
                label='Enter a job_id that note belongs to'
                inputType='text'
                name='jobId'
                controlFunction={this.handleJobId}
                content={this.state.jobId}
                placeholder='55689900083355' />

              <p>Select a Note Category:</p>
              <Select 
                name='category'
                controlFunction={this.handleCategory}
                selectedValue={this.state.noteCategory}
                options={['Position Research','Company Information', 'Project Highlights', 'Interview Questions']} />

              <TextArea
                label='Create a note for the job_id above'
                name='jobNote'
                controlFunction={this.handleJobNote}
                content={this.state.jobNote} />

              <button type="submit">
                Create Note
              </button>

            </form>

            <h1>Delete Note </h1>
            <form onSubmit={ this.handleSubmitDelete }>
              <TextInput 
                label='Enter a job_id that note belongs to'
                inputType='text'
                name='jobId'
                controlFunction={this.handleJobId}
                content={this.state.jobId}
                placeholder='55689900083355' />

             <p>Select the Notes Category:</p>
              <Select 
                name='category'
                controlFunction={this.handleCategory}
                selectedValue={this.state.noteCategory}
                options={['Position Research','Company Information', 'Project Highlights', 'Interview Questions']} />

              <TextInput 
                label='Enter the note_id you want to delete'
                inputType='text'
                name='noteId'
                controlFunction={this.handleNoteId}
                content={this.state.noteId}
                placeholder='2480928709872' />

              <button type="submit">
                Delete Note
              </button>

            </form>


        </div>

    )
  }
}

export default NoteList
