import React, { Component } from "react";
import { TextField } from '@material-ui/core';
class Input extends Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }


  addItem = event => {
    event.preventDefault()
    const { input } = this.state;
    this.props.addItem(input);
    this.setState({
      input: ""
    })
  }


  render() {
    return(
      <form onSubmit={this.addItem} autoComplete="off">
        <TextField onChange={(value) => this.handleInput(value)} value={this.state.input} id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
    )
  }
}

export default Input