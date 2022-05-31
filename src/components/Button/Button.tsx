import React from 'react';

export interface ButtonProps {
    onClick: () => void;
    width: number,
    name: string,
    dark: boolean,
}
const Button = (props: ButtonProps) => {
    return <button style= {{width: props.width}} onClick={props.onClick}>{props.name}</button>
}
export default Button;