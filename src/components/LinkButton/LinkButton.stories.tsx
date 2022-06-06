import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react'
import LinkButton, { LinkButtonProps } from "./LinkButton";

export default {
    title: "Apollo/LinkButton",
    component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args: JSX.IntrinsicAttributes & LinkButtonProps) =><LinkButton {...args}/>
export const ClickMe = Template.bind({});
ClickMe.args = {
    name: "Click me",
    style: "light",
    link: "https://ewanfox.com",
    width: 400
}