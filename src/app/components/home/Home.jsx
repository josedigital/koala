import React from 'react';

import TextInput from '../forms/TextInput'
import TextArea from '../forms/TextArea'
import Select from '../forms/Select'
import CheckboxOrRadio from '../forms/CheckboxOrRadio'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textInputValue: '',
      textAreaValue: '',
      selectedValue: '',
      checkboxValue: []
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleTextArea = this.handleTextArea.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }


  handleTextInput (e) {
    this.setState({
      textInputValue: e.target.value
    })
  }

  handleTextArea (e) {
    this.setState({
      textAreaValue: e.target.value
    })
  }

  handleSelect (e) {
    this.setState({
      selectedValue: e.target.value
    })
  }

  handleCheckbox (e) {
    console.log('checkbox checked', e.target.value)
    this.setState({
      checkboxValue: [e.target.value]
    })
  }

  render () {
    return (
      <div className="container home">
        <h1>Form element components:</h1>

        <form>
          <TextInput 
            label={'To Do'}
            inputType={'text'}
            name={'todo'}
            content={this.state.textInputValue}
            controlFunction={this.handleTextInput}
            placeholder={'enter a todo item'} />
          
          <TextArea
            label={'A text area'}
            name={'textareaName'}
            controlFunction={this.handleTextArea}
            content={this.state.textAreaValue} />
          
          
          <p>This is a select:</p>
          <Select 
            name={'select'}
            controlFunction={this.handleSelect}
            selectedValue={this.state.selectedValue}
            options={['one','two','three']} />
          

          <CheckboxOrRadio
            title={'Please select one'}
            type={'checkbox'}
            name={'choices'}
            options={['one','two','three','four']}
            selectedOptions={this.state.checkboxValue}
            controlFunction={this.handleCheckbox} />

        </form>
      </div>
    )  
  }
  
}

export default Home;
