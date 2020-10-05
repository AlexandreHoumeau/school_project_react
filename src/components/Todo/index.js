import React, { Component } from 'react';
import Data from './initialState';

import List from '@material-ui/core/List';

import Item from "../Item/index";
import Input from '../Input/index';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state=({
      data: Data
    });
  }

  removeItem = (id) => {
    const { data } = this.state;
    this.setState({
      data: data.filter(item => {
        if(item.id === id) {
          return false;
        }
        return item;
      })
    })
  }

  addItem = (value) => {
    const newItem = {
      id: Math.round(Math.random() * 100),
      text: value,
      checked: false
    }
    const { data } = this.state;
    this.setState({
      data: [...data, newItem]
    })
  }
  
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>My Todo</h1>
        <Input addItem={this.addItem} />
        <List style={{width: '10%'}}>
        {data.map((value, index) => {
            return (
            <Item parentCallback={this.removeItem} key={value.id} data={value} />
            )
        })}
      </List>
      </div>
    )
  }
}


export default Todo;

