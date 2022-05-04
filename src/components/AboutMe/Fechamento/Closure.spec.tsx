import '@testing-library/jest-dom'
import { render, screen  } from "@testing-library/react";
import { Closure } from "./Closure";
import { CLOSURE_MESSAGES } from "./messages";

const container = () => render(<Closure />)

describe('Is render Closure', ()=> {
    it('is render title', () => {
        container()

        const TITLE = (screen.getByText(CLOSURE_MESSAGES.TITLE))
        expect(TITLE).toBeInTheDocument()
    })
    it('Is render text', ()=> {
        container()

        const TEXT = (screen.getByText(CLOSURE_MESSAGES.FECHAMENTO))
        expect(TEXT).toBeInTheDocument()
    })
})