import React, {Component} from "react";
import { TextField } from '@material-ui/core';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  search = event => {
    event.preventDefault()
    const { input } = this.state;
    this.props.submitSearch(input);
    this.setState({
      input: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.search} autoComplete="off">
        <TextField onChange={(value) => this.handleInput(value)} value={this.state.input} id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    )  
  }
}

export default SearchBar