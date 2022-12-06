import React from "react";

import { ABOUT_ME } from "./messages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "jest-canvas-mock";
import { AboutMe } from "./AboutMe";

const container = () => render(<AboutMe />);

describe("Is render About Me", () => {
  it("is render About Me Title", () => {
    container();

    const TITLE = screen.getByText(ABOUT_ME.TITLE);
    expect(TITLE).toBeInTheDocument();
  });
  it("is render About Me Text", () => {
    container();

    const TEXT = screen.getByText(ABOUT_ME.TEXT);
    expect(TEXT).toBeInTheDocument();
  });
  it("is render Continue Title", () => {
    container();

    const TITLE = screen.getByText(ABOUT_ME.CONTINUE_MESSAGES.TITLE);
    expect(TITLE).toBeInTheDocument();
  });
  it("is render Continue Text", () => {
    container();

    const TEXT = screen.getByText(ABOUT_ME.CONTINUE_MESSAGES.TEXT);
    expect(TEXT).toBeInTheDocument();
  });
  it("is render Closure Title", () => {
    container();

    const TITLE = screen.getByText(ABOUT_ME.CLOSURE_MESSAGES.TITLE);
    expect(TITLE).toBeInTheDocument();
  });
  it("is render Closure Text", () => {
    container();

    const TEXT = screen.getByText(ABOUT_ME.CLOSURE_MESSAGES.TEXT);
    expect(TEXT).toBeInTheDocument();
  });
});
