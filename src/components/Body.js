import React from 'react';
import CharacterMatrix from './CharacterMatrix';

const body = (props) => {
    return(
        <div>
            <CharacterMatrix characters={props.characters} clickCharacter={props.clickCharacter} clickBack={props.clickBack}/>
        </div>
    )
}

export default body;