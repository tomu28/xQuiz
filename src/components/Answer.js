import React from 'react';

function Answer(props){
    let classes = ['answer'];

    if (props.selected){
        classes.push('selected');
    }

    return (
        <button 
            value = {props.letter} 
            className = {classes.join(' ')} 
            onClick = {props.handleClick}>
            <span className="letter">{props.letter}.</span> {props.answer}
        </button>
    );
}

export default Answer;