import React, {Component} from 'react'
import ListItem from '../listItem/ListItem'

class List extends Component {
  render () {
    return (
      <div className="container list">
        <h1>List</h1>
        <ListItem />
      </div>
      
    )
  }
}

export default List
