import React, {Component} from 'react'
import note from '../note/Note'

class NoteList extends Component {
  render () {
    return (
      <div className="container list">
        <h1>List</h1>
        <Note />
      </div>
      
    )
  }
}

export default NoteList
