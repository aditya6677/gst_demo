import React, { Component } from 'react';
import axios from 'axios';
import Show from './dashboard/Show';
//Trust Checker
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {name:'',amount:0,gst:0,data:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target=event.target;
    if(target.name==="name"){
      this.setState({name:target.value});
    }
    else if(target.name==="amount"){
      this.setState({amount:target.value});
    }
    if(target.name==="gst"){
      this.setState({gst:target.value});
    }
  }

  handleSubmit = async (event)=>{
    event.preventDefault();
      axios.post('/api/additems', {
        name: this.state.name,
        amount: this.state.amount,
        gst: this.state.gst
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
      this.refs.name.value='',
      this.refs.amount.value='',
      this.refs.gst.value=''
      
  }

  render(){
    return (
      <div className="container text-center">
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref="name" name="name" value={this.state.value} onChange={this.handleChange} required/><br/>
          Price:
          <input type="text" ref="amount" name="amount" value={this.state.value} onChange={this.handleChange} required/><br/>
          GST:
          <input type="text" ref="gst" name="gst" value={this.state.value} onChange={this.handleChange} required/><br/>
        </label>
        <input type="submit" value="Submit" />
      </form>

      <Show/>
    </div>
    );
  }
}
export default App;