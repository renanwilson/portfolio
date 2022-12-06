import React from "react";
import "@testing-library/jest-dom";
import { TextsContainer, TextsContainerProps } from "./TextsContainer";
import { render, screen, RenderResult } from "@testing-library/react";
import "jest-canvas-mock";

const defaultProps: TextsContainerProps = {
  Text: "Teste",
};

const container = (props?: TextsContainerProps): RenderResult =>
  render(<TextsContainer {...{ ...defaultProps, ...props }} />);

describe("Is render TextsContainer", () => {
  it("render text", () => {
    container();

    const TEXT = screen.getByText(defaultProps.Text);
    expect(TEXT).toBeInTheDocument();
  });
});
