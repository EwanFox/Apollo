/// <reference types="react" />
interface ButtonProps {
    onClick: () => void;
    width: number;
    name: string;
    dark: boolean;
}
declare const Button: (props: ButtonProps) => JSX.Element;

export { Button };
