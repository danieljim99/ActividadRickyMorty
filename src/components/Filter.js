import React from "react";

const filter = (props)=>{
    return (
        <div className="FilterBox">
            <select id="select" onChange={props.clickFilter.bind(this)}>
                <option value="0">All</option>
                <option value="1">Alive</option>
                <option value="2">Dead</option>
            </select>
        </div>
    );
}

export default filter;