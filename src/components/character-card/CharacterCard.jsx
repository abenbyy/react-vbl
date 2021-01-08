import React, { Component } from 'react'
import './CharacterCard.css'

export default class CharacterCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            owned: false,
            character: props.character
        }
        
    }

    toggleOwned = () => {
        this.setState({
            owned: !this.state.owned,
        })
    }
    
    render() {
        var el;
        if(this.state.owned){
            el = <p style={{color: 'green'}}>Owned</p>
        }else{
            el = <p style={{color: 'red'}}>Not Owned</p>
        }
        console.log(el);

        return (
            <div className="ch">
               <div className="ch-img">
                   <img className="ch-img-portrait" src={this.state.character.image} alt=""/>
                   <img className="ch-img-element" src={this.state.character.elementimage} alt=""/>
               </div>
               <div>
                   <h3>{this.state.character.name}</h3>
                    {el}
                   <button onClick={this.toggleOwned}>Toggle Owned</button>
               </div>
            </div>
        )
    }
}
