import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Character from "./Character";
const header = (props)=>{
    const character = props.characters.find(character => character.fullScreen === true);
    return(
        <div className="Header">
            <div>
                <SearchBar searchBarHandler = {props.searchBarHandler}></SearchBar>
                <Filter clickFilter = {props.clickFilter} ></Filter>
                {character ? <Character character={character} fullScreen={character.fullScreen}/> : null}
            </div>
        </div>
    );
}
export default header;

