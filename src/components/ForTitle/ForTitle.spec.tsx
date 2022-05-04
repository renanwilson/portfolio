import React from "react";
import '@testing-library/jest-dom'
import { render, screen, RenderResult} from "@testing-library/react";
import {ForTitle, ForTitleProps} from './ForTitle'

const defaultProps: ForTitleProps ={
    TITLE: 'Teste',
    left: false,
}

const container = (props? : ForTitleProps): RenderResult => render(<ForTitle {...{...defaultProps, ...props}} />)

describe('Is render ForTitle', () => {
    it('render Title', () => {
        container()

        const TITLE = screen.getByText(defaultProps.TITLE)
        expect(TITLE).toBeInTheDocument()
    })
})