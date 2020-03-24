import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './List';
import './style.css';


class App extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      term: '',
      items: []
    };
  }
    
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  render (){
    return (
      <div className="container" style={{padding: 10, height: '100vh', backgroundColor: '#303a52'}}>
        <div className="title has-text-centered" style={{color: 'white'}}>To Do List</div>
        <form className="has-text-centered" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange}/>
        </form>
        <List items={this.state.items} />
        <hr style={{backgroundColor: '#fc85ae'}}/>
      </div>
    );
  }
}

render(<App />, root);

