import '@testing-library/jest-dom'
import { render, screen,  RenderResult} from "@testing-library/react";
import { Card, CardProps } from "./Card";

const defaultProps:  CardProps = {
    TITLE: 'Titulo',
    TEXT: 'Texto',
    ICON: false,
}

const setup = (props?: CardProps): RenderResult => render(<Card {...{...defaultProps, ...props}} />)

describe('Is render Card', () => {
    it('Is render Title', () => {
        setup()

        expect(screen.getByText(defaultProps.TITLE)).toBeInTheDocument()
    })
    it('Is render Text', () => {
        setup()

        expect(screen.getByText(defaultProps.TEXT)).toBeInTheDocument()
    })
})
