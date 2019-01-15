import React, { Component, Fragment } from 'react';
import './css/AutoComplete.css';

class AutoComplete extends Component {
  
    constructor(props){
        super(props);

        this.state={
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput:""

        };
    }
    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
    
        // Filter our suggestions that contain the user's input
        const filteredSuggestions = suggestions.filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            );
    
        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          userInput: e.currentTarget.value
        });
      };
    onClick = e =>{
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions:[],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    }

    onKeyDown = e => {
        const { activeSuggestion,filteredSuggestions} = this.state;

        if(e.keyCode === 13){
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion] 
            });
        }else if(e.keyCode === 38){
            if(activeSuggestion === 0)
            return;

            this.state({
                activeSuggestion: activeSuggestion -1
            });
        }else if(e.keyCode === 40){
            if(activeSuggestion - 1 === filteredSuggestions.length)
                return;
            
                this.state({
                    activeSuggestion: activeSuggestion + 1
                })
        }
    }

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        }= this;
        let suggestionsListComponent;

        if(showSuggestions && userInput){
            if(filteredSuggestions.length){
                suggestionsListComponent = (
                    <ul className="suggestions">
                    {filteredSuggestions.map((suggestion, index)=>{
                        let className;

                        if(index === activeSuggestion){
                            className = "suggestion-active";
                        }
                        return(
                            <li className={className}
                                key={suggestion}
                                onClick={onClick}
                            >
                                {suggestion}
                            </li>
                        );
                      })
                    }
                    </ul>
                );
            }else{
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions, you're on your own!</em>
                    </div>
                )
            }
        }
        return (
            <Fragment>
                <input 
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </Fragment>
        );
    }
}

AutoComplete.propTypes = {
}

export default AutoComplete;