import React from "react";
import "@testing-library/jest-dom";
import { render, screen, RenderResult } from "@testing-library/react";
import "jest-canvas-mock";
import { TitlesContainer, TitlesContainerProps } from "./TitlesContainer";

const defaultProps: TitlesContainerProps = {
  Title: "Teste",
  Left: false,
};

const container = (props?: TitlesContainerProps): RenderResult =>
  render(<TitlesContainer {...{ ...defaultProps, ...props }} />);

describe("Is render TitlesContainer", () => {
  it("render Title", () => {
    container();

    const TITLE = screen.getByText(defaultProps.Title);
    expect(TITLE).toBeInTheDocument();
  });
});
