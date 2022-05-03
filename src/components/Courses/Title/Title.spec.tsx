import React from "react";
import '@testing-library/jest-dom'
import { render, RenderResult, screen } from "@testing-library/react";
import { Title, TitleProps } from "./Title";

const defaultProps: TitleProps = {
    TITLE: 'Aqui é um titulo'
}

const setup = (props?: TitleProps): RenderResult => render(<Title {...{...defaultProps, ...props}} />)

describe('is render Title', () => {
    it('Is render Title', () => {
        setup()

        expect(screen.getByText(defaultProps.TITLE)).toBeInTheDocument()
    })
})
