/// <reference types="react" />
export interface ButtonProps {
    onClick: () => void;
    width: number;
    name: string;
    dark: boolean;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
