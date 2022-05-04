import  '@testing-library/jest-dom'
import { Explication } from "./Explication";
import { EXPLICATION_MESSAGES } from "./messages";
import { render, screen } from "@testing-library/react";

const container = () => render( <Explication />)

describe('Is render Explication', () => {
    it('render sobre', () => {
        container()

        const SOBRE = (screen.getByText(EXPLICATION_MESSAGES.SOBRE))
        expect(SOBRE).toBeInTheDocument()
    })
})