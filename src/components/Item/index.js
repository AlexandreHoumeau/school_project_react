import React, { Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Checkbox from '@material-ui/core/Checkbox';
import { ListItemIcon } from '@material-ui/core';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


class Item extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props
    this.state = data
    this.onHandleClick = this.onHandleClick.bind(this)
  }

  onHandleClick() {
    const { checked } = this.state;
    this.setState({
      checked: !checked
    })
  }

  removeItem() {
    const { id } = this.state;
    this.props.parentCallback(id);
  }

  render() {
    const { checked, text } = this.state;
  return(
    <ListItem>
      <ListItemIcon>
        <DeleteOutlinedIcon onClick={() => this.removeItem()}/>
      </ListItemIcon>
    <ListItemIcon>
    <Checkbox
        edge="start"
        checked={checked}
        tabIndex={-1}
        disableRipple
        onClick={this.onHandleClick}
      />
    </ListItemIcon>
    <ListItemText primary={text} />
    </ListItem>
  )
  }
}

export default Item;
