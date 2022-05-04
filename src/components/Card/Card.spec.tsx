import "@testing-library/jest-dom";
import { render, screen, RenderResult } from "@testing-library/react";
import { Card, CardProps } from "./Card";

const defaultProps: CardProps = {
  TITLE: "Titulo",
  TEXT: "Texto",
  ICON: false,
};

const container = (props?: CardProps): RenderResult =>
  render(<Card {...{ ...defaultProps, ...props }} />);

describe("Is render Card", () => {
  it("Is render Title", () => {
    container();
    
    const TITLE = screen.getByText(defaultProps.TITLE);
    expect(TITLE).toBeInTheDocument();
  });
  it("Is render Text", () => {
    container();

    const TEXT = screen.getByText(defaultProps.TEXT);
    expect(TEXT).toBeInTheDocument();
  });
});
