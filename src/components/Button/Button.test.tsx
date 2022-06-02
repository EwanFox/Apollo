import React from "react";
import {render} from '@testing-library/react'
import Button from "./Button";
describe("Button", () => {
    test("Render button", () => {
        render(<Button name="Test Button" style='light' width={400} onClick={() => {}}/>)
    })
})