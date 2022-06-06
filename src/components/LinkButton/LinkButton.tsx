import React from 'react';
import './LinkButton.css';
export interface LinkButtonProps {
    link: string,
    width: number,
    name: string,
    style: string,
}
const Button = (props: LinkButtonProps) => {
    return <button style= {{width: props.width}} className={props.style}><a href={props.link} onClick={() => {window.location.href = props.link}}>{props.name}</a></button>
}
export default Button;