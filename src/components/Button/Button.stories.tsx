import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react'
import Button, { ButtonProps } from "./Button";

export default {
    title: "Apollo/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: JSX.IntrinsicAttributes & ButtonProps) =><Button {...args}/>
export const ClickMe = Template.bind({});
ClickMe.args = {
    name: "Click me",
    style: "light",
    onClick: () => {},
    width: 400
}