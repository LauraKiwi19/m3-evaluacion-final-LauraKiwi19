import React from "react"
import CharacterCard from "./CharacterCard";
import "../styles/_characterlist.scss"



const CharacterList = (props) => {
    return (
        <ul className="list__container">
            {props.characters
                .filter(character => character.name.toUpperCase().includes(props.inputValue.toUpperCase()))
                .map(character => {
                    return (
                        <CharacterCard character={character} key={character.id} />
                    )
                })}
        </ul>
    )
}

export default CharacterList;