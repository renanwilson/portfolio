import React from "react";
import '@testing-library/jest-dom'
import { Fortext, FortextProps } from "./ForTexts";
import { render, screen, RenderResult } from "@testing-library/react";

const defaultProps: FortextProps = {
    Texto: 'Teste'
}

const container = (props?: FortextProps): RenderResult => render(<Fortext {...{...defaultProps, ...props}} />)

describe('Is render ForText', () => {
    it('render text', () => {
    container();

    const TEXT = screen.getByText(defaultProps.Texto)
    expect(TEXT).toBeInTheDocument()
})
})