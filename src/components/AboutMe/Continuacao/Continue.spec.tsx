import React from "react";
import { Continue } from "./Continue";
import { CONTINUE_MESSAGES } from "./messages";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

const setup = () => render(<Continue />)

describe('is render Continue', () => {
    it('is render TITLE', () => {
        setup()

        const TITLE = (screen.getByText(CONTINUE_MESSAGES.TITLE))
        expect(TITLE).toBeInTheDocument()
    })
    it('is render TEXT', () => {
        setup()

        const TEXT = (screen.getByText(CONTINUE_MESSAGES.TEXT))
        expect(TEXT).toBeInTheDocument()
    })
})