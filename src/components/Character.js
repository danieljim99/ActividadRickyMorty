import React from 'react';

const character = (props) => {
    if(props.fullScreen){
        return (
            <div className="Character" style={{width: "fit-content"}}>
                <img className="ImageFullScreen" src={props.character.image} alt=""/>
                <div>Name: {props.character.name}</div>
                <div>Status: {props.character.status}</div>
                <div>Species: {props.character.species}</div>
                <div>Type: {props.character.type}</div>
                <div>Gender: {props.character.gender}</div>
                <div>Origin: {props.character.origin.name}</div>
                <div>Location: {props.character.location.name}</div>
            </div>
        );
    } else {
        return (
            <div className="Character" onClick={props.clickCharacter.bind(this, props.character.id)}>
                <img className="Image" src={props.character.image} alt=""/>
                <div>{props.character.name}</div>
            </div>
        );
    }
};

export default character;