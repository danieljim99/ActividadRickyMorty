import React from "react";
const searchBar = (props)=>{
    return (
        <input className ="SearchBar" id="searchBar" type="Text" onChange={props.searchBarHandler.bind()}></input>
    )
}
export default searchBar;