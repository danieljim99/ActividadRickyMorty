import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

class App extends Component{
  state = {
    characters: [],
  };

  url = "https://rickandmortyapi.com/api/character/";

  

  componentDidMount = () => {
    axios.get(this.url).then(response => {
      let characters = response.data.results;
      characters.forEach(character => {
        character.appear = [true, true];
      });

      this.setState({characters});
    });
  };

  filterHandler = ()=>{
    let characters = this.state.characters.slice();
    let status = parseInt(document.getElementById("select").value);

    if(status === 0){
      characters.map(character => {
        character.appear[0] = true;
        return character;
      });
    } else if (status === 1){
      characters.map(character => {
        if(character.status === "Alive"){
          character.appear[0] = true;
        } else {
          character.appear[0] = false;
        }
        return character;
      });
    } else if (status === 2){
      characters.map(character => {
        if(character.status === "Dead"){
          character.appear[0] = true;
        } else {
          character.appear[0] = false;
        }
        return character;
      });
    }

    this.setState({characters});
  }

  searchBarHandler = () =>{
    let characters = this.state.characters.slice();
    const input = document.getElementById("searchBar").value;

    characters.map(character => {
      if(character.name.toUpperCase().includes(input.toUpperCase())){
        character.appear[1] = true;
      } else {
        character.appear[1] = false;
      }

      return character;
    });

    this.setState({characters});
  }

  clickCharacterHandler = (id) => {
    const characters = this.state.characters.slice();

    characters.map(character => {
      if(character.id === id){
        character.fullScreen = true;
      } else {
        character.fullScreen = false;
      }

      return character;
    });

    this.setState({characters});
  }

  render() {
    return (
      <div className="App">
        <Header className="Header" characters={this.state.characters} clickFilter = {this.filterHandler} searchBarHandler = {this.searchBarHandler}/>
        <Body className="Body" characters={this.state.characters} clickCharacter={this.clickCharacterHandler} clickBack={this.clickBackHandler}/>
      </div>
    )
  }
}

export default App;
