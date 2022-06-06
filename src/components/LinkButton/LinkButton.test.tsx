import React from "react";
import {render} from '@testing-library/react'
import LinkButton from "./LinkButton";
describe("Button", () => {
    test("Render button", () => {
        render(<LinkButton name="Test Button" style='light' width={400} link="https://ewanfox.com"/>)
    })
})