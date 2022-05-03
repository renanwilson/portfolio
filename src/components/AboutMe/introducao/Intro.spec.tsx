import React from "react";
import { Intro } from "./Intro";
import { ABOUT_ME } from "./messages";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

const setup = () => render(<Intro />)

describe('Is render Intro', () => {
    it('is render title', () => {
        setup()

        const TITLE = (screen.getByText(ABOUT_ME.TITLE))
        expect(TITLE).toBeInTheDocument()
    })
    it('is render SOBRE', () => {
        setup()

        const SOBRE = (screen.getByText(ABOUT_ME.SOBRE_MIM))
        expect(SOBRE).toBeInTheDocument()
    })
})