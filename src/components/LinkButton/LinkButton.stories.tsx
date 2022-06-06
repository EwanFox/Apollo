import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react'
import LinkButton, { ButtonProps } from "./LinkButton";

export default {
    title: "Apollo/LinkButton",
    component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args: JSX.IntrinsicAttributes & ButtonProps) =><LinkButton {...args}/>
export const ClickMe = Template.bind({});
ClickMe.args = {
    name: "Click me",
    style: "light",
    link: "https://ewanfox.com",
    width: 400
}