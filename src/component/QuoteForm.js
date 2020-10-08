
import React from 'react'
import './QuoteForm.css'

const MAX_LENGTH = 30;
class QuoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            character : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        if(event.target.value.length < MAX_LENGTH){
            this.setState({ character: event.target.value })
        }else{
            event.target.className = 'length-maximum-reached';
        }
    }
    handleSubmit(event){
        event.preventDefault();
    }
    render() {
        const maximumReached = this.state.character.length >= MAX_LENGTH ;
        const numRemaining = MAX_LENGTH - this.state.character.length;
        return (
            <form
                onSubmit={this.handleSubmit}
                className="QuoteForm">
                <label htmlFor="character">Character:</label>
                <input
                    id="character"
                    name="character"
                    className = {maximumReached ? 'length-maximum-reached' : 'length-ok'}
                    type="text"
                    value= {this.state.character}
                    onChange={this.handleChange}
                />
                <p>Nombre de charactères restant : {numRemaining} </p>
                <p>{this.state.character} </p>
            </form>
        );
    }
}

export default QuoteForm;