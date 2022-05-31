import React from 'react';
import './Button.css';
export interface ButtonProps {
    onClick: () => void;
    width: number,
    name: string,
    style: string,
}
const Button = (props: ButtonProps) => {
    return <button style= {{width: props.width}} onClick={props.onClick} className={props.style}>{props.name}</button>
}
export default Button;