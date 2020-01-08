import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import '../Quiz.css';

function Answer(props){
    let classes = ['answer'];

    if (props.selected){
        classes.push('selected');
    }

    return (
        <Button
            value = {props.letter} 
            className = {classes.join(' ')} 
            onClick = {props.handleClick}>
            <span className="letter">{props.letter}.</span>
            <span className="btn-primary">
                {props.answer}
            </span>
        </Button>
    );
}

export default Answer;