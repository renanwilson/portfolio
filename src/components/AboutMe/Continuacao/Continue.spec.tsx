import React from "react";
import { Continue } from "./Continue";
import { CONTINUE_MESSAGES } from "./messages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "jest-canvas-mock";

const container = () => render(<Continue />);

describe("is render Continue", () => {
  it("is render TITLE", () => {
    container();

    const TITLE = screen.getByText(CONTINUE_MESSAGES.TITLE);
    expect(TITLE).toBeInTheDocument();
  });
  it("is render TEXT", () => {
    container();

    const TEXT = screen.getByText(CONTINUE_MESSAGES.TEXT);
    expect(TEXT).toBeInTheDocument();
  });
});
