import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Courses } from "./Courses";
import { COURSES_MESSAGES } from "./messages";
import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";

jest.mock("react-icons/io", () => ({
  IoLogoCss3: jest.fn(() => null),
  IoLogoJavascript: jest.fn(() => null),
}));

jest.mock("react-icons/di", () => ({
  DiReact: jest.fn(() => null),
}));

jest.mock("react-icons/ai", () => ({
  AiFillHtml5: jest.fn(() => null),
}));
jest.mock("react-icons/si", () => ({
  SiTypescript: jest.fn(() => null),
}));

const container = () => render(<Courses />);

describe("Is render icons", () => {
  it("is render DiReact", () => {
    container();

    expect(DiReact).toHaveBeenCalled();
  });
  it("is render AiFillHtml5", () => {
    container();

    expect(AiFillHtml5).toHaveBeenCalled();
  });
  it("is render Sitypescript", () => {
    container();

    expect(SiTypescript).toHaveBeenCalled();
  });
  it("is render IoLogoCss3", () => {
    container();

    expect(IoLogoCss3).toHaveBeenCalled();
  });
  it("is render IoLogoJavaScript", () => {
    container();

    expect(IoLogoJavascript).toHaveBeenCalled();
  });
});

describe("Is render Courses", () => {
  it("is render title", () => {
    container();

    const TITLE = screen.getByText(COURSES_MESSAGES.TITLE)
    expect(TITLE).toBeInTheDocument();
  });

  it("is render first title", () => {
    container();

    const FIRST_TITLE = screen.getByText(COURSES_MESSAGES.FIRST.TITLE)

    expect(FIRST_TITLE).toBeInTheDocument();
  });

  it("Is render first text", () => {
    container();

    const FIRST_TEXT = screen.getByText(COURSES_MESSAGES.FIRST.TEXT)
    expect(FIRST_TEXT).toBeInTheDocument();
  });

  it("Is render second title", () => {
    container();

    const SECOND_TITLE =  screen.getByText(COURSES_MESSAGES.SECOND.TITLE)
    expect(SECOND_TITLE).toBeInTheDocument();
  });
  it("Is render second text", () => {
    container();

    const SECOND_TEXT =  screen.getByText(COURSES_MESSAGES.SECOND.TEXT)
    expect(SECOND_TEXT).toBeInTheDocument();
  });

  it("is render thirt title", () => {
    container();

    const THIRD_TITLE = screen.getByText(COURSES_MESSAGES.THIRD.TITLE)
    expect(THIRD_TITLE).toBeInTheDocument();
  });
  it("Is render third text", () => {
    container();

    const THIRD_TEXT = screen.getByText(COURSES_MESSAGES.THIRD.TEXT)
    expect(THIRD_TEXT).toBeInTheDocument();
  });
  it("Is render fourth title", () => {
    container();

    const FOURTH_TITLE = screen.getByText(COURSES_MESSAGES.FOURTH.TITLE)
    expect(FOURTH_TITLE).toBeInTheDocument();
  });
  it("Is render fourth text", () => {
    container();

    const FOURTH_TEXT = screen.getByText(COURSES_MESSAGES.FOURTH.TEXT)
    expect(FOURTH_TEXT).toBeInTheDocument();
  });
  it("Is render fifth title", () => {
    container();

    const FIFTH_TITLE = screen.getByText(COURSES_MESSAGES.FIFTH.TITLE)
    expect(FIFTH_TITLE).toBeInTheDocument();
  });
  it("Is render fifth text", () => {
    container();

    const FIFTH_TEXT =  screen.getByText(COURSES_MESSAGES.FIFTH.TEXT)
    expect(FIFTH_TEXT).toBeInTheDocument();
  });
});
