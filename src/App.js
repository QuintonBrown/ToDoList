import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list'

export default class App extends React.Component {
  //state -- setState
  //list of items
  //onsubmit
  
  //bind????(maybe)
  constructor(props) {
    super(props)
    this.state = {
      //property that holds an empty sting or value
      term: '',
      //array of items
      items: []
    }
  }
  //onChange
  onChange = (event) => {
    //state -- setState
    this.setState({term: event.target.value})
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
    term: '',
    items: [...this.state.items, this.state.term]
    })
  }
  render(){
    return (
      <div>
        <div className="header">
          <div className="wrapper">
            <img src={logo} />
            <p className="title">Road 2 Hire</p>
          </div>
        </div>
        <div className="app">
          <div className="app-wrapper">
            <p className="app-title">To-Do List</p>
            <form className="App" onSubmit= {this.onSubmit}>
              <input value = {this.state.term} onChange = {this.onChange} placeholder="Type here to add a task" type="text" id="box" />
              <br />
            </form>
            <br />
            <List items = {this.state.items} />
          </div>
          </div>
       </div>
    );
  }

}
