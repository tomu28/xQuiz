import React from 'react';
import Answer from './Answer';

function Answers(props){

    return(
        <>
        <Answer 
            letter = "a" 
            answer = {props.question.answer_a}
            handleClick = {props.handleClick}
            selected = {props.currentAnswer === 'a'}
        />
        
        <Answer 
            letter = "b"
            answer = {props.question.answer_b} 
            handleClick = {props.handleClick}
            selected = {props.currentAnswer === 'b'}
        />
        
        <Answer 
            letter = "c" 
            answer = {props.question.answer_c} 
            handleClick = {props.handleClick}
            selected = {props.currentAnswer === 'c'}
        />
        
        <Answer 
            letter = "d" 
            answer = {props.question.answer_d} 
            handleClick = {props.handleClick}
            selected = {props.currentAnswer === 'd'}
        />
        </>
    );
}

export default Answers;