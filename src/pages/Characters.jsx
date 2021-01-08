import React, { Component } from 'react'
import CharacterCard from '.././components/character-card/CharacterCard'
import json from '../data/genshin.json';
import './Characters.css';

export default class Characters extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: json.characters
        }

        
    }
    render() {
        const charList = this.state.data.map((character) =>{
            return (
                <CharacterCard character={character} />
            )
        })

        return(
            <div className="card-container">
                {charList}
            </div>
        )
    }
}
