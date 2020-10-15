import React , { Component } from 'react';
import {CardList} from './components/card-list/card-list.components'
import {SearchBox} from './components/search- box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField: ''
    };
    //this.handleChange= this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then
      (response =>response.json())
      .then(users => this.setState({monsters: users}))
    
  }
  handleChange =(e)=>{
     this.setState({searchField: e.target.value })
  }
  render(){
    // destructure allow us to pull the properties of an object and set them to constants
    //so the syntax is 
    const {monsters, searchField} = this.state;  // it is equal to const.monsters = this.state.monsters
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
          <div className="App">
            <h1>Monster Rolodex</h1>
          <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}

          />
            <CardList monsters={filteredMonsters}/>
          </div>
        );
      }

  }


export default App;
