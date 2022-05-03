import React from "react";
import '@testing-library/jest-dom'
import { Fortext, FortextProps } from "./ForTexts";
import { render, screen, RenderResult } from "@testing-library/react";

const defaultProps: FortextProps = {
    Texto:'Teste'
}

const setup = (props?: FortextProps): RenderResult => render(<Fortext {...{...defaultProps, ...props}} />)

describe('Is render ForText', () => {
    it('render text', () => {
    setup();

    expect(screen.getByText(defaultProps.Texto)).toBeInTheDocument()
})
})