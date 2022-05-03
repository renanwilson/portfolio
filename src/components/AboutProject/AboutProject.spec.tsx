import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { AboutProject } from "./AboutProject";
import { ABOUT_PROJECT_MESSAGES } from "./messages";

const setup = () => render(<AboutProject />)

describe('Is render AboutProject', () => {
    it('render TITLE', () =>{
        setup()

        const TITLE = (screen.getByText(ABOUT_PROJECT_MESSAGES.TITLE))
        expect(TITLE).toBeInTheDocument()
    })
    it('render TEXT', () => {
        setup()
        
        const TEXT = (screen.getByText(ABOUT_PROJECT_MESSAGES.TEXT))
        expect(TEXT).toBeInTheDocument()
    })
})