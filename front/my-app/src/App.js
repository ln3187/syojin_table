import React, { Component } from 'react';
import Valin from "./SimpleFrom"
import './App.css';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {inch : 0 ,cm : 0}
  }

  inch_change(e){
    const inch_val = e.value
    const cm_val = inch_val*2.54

    this.setState({inch:inch_val,cm:cm_val})
  }

  cm_change(e){
    const inch_val = e.value
    const cm_val = inch_val*2.54

    this.setState({inch:inch_val,cm:cm_val})
  }
  

  render(){
    return(
      <div>
        <Valin onChange = {e => this.inch_change(e)} value = {this.state.inch}/><br></br>
        <Valin onChange = {e => this.cm_change(e)} value = {this.state.cm} />
      </div>
    )
  }
}
