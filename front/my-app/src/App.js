import React, { Component } from 'react';
import { Tag } from "./Tag"
import './App.css';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {inch : 0 ,cm : 0}
  }
  render(){
    return(
      <div>
        <Tag/>
        kaisetu
      </div>
    )
  }
}
