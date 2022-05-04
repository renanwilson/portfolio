import React from "react";
import { Intro } from "./Intro";
import { ABOUT_ME } from "./messages";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

const container = () => render(<Intro />)

describe('Is render Intro', () => {
    it('is render title', () => {
        container()

        const TITLE = (screen.getByText(ABOUT_ME.TITLE))
        expect(TITLE).toBeInTheDocument()
    })
    it('is render SOBRE', () => {
        container()

        const SOBRE = (screen.getByText(ABOUT_ME.SOBRE_MIM))
        expect(SOBRE).toBeInTheDocument()
    })
})