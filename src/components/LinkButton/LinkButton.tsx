import React from 'react';
import './LinkButton.css';
export interface ButtonProps {
    link: string,
    width: number,
    name: string,
    style: string,
}
const Button = (props: ButtonProps) => {
    return <button style= {{width: props.width}} className={props.style}><a href={props.link}>{props.name}</a></button>
}
export default Button;