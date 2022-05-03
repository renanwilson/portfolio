import '@testing-library/jest-dom'
import { render, screen  } from "@testing-library/react";
import { Closure } from "./Closure";
import { CLOSURE_MESSAGES } from "./messages";

const setup = () => render(<Closure />)

describe('Is render Closure', ()=> {
    it('is render title', () => {
        setup()

        const TITLE = (screen.getByText(CLOSURE_MESSAGES.TITLE))
        expect(TITLE).toBeInTheDocument()
    })
    it('Is render text', ()=> {
        setup()

        const TEXT = (screen.getByText(CLOSURE_MESSAGES.FECHAMENTO))
        expect(TEXT).toBeInTheDocument()
    })
})