import React from 'react';
import Character from './Character';

const characterMatrix = (props) => {
    const characters = props.characters.filter(character => character.appear[0] && character.appear[1]);
    return (
        <div className="CharacterMatrix">
            {characters.map(character => {
                return (
                    <Character character={character} fullScreen={false} clickCharacter={props.clickCharacter} clickBack={props.clickBack}/>
                );
            })}
        </div>
    );
}

export default characterMatrix;