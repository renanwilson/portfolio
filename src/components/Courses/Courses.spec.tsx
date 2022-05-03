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

const setup = () => render(<Courses />);

describe("Is render icons", () => {
  it("is render DiReact", () => {
    setup();

    expect(DiReact).toHaveBeenCalled();
  });
  it("is render AiFillHtml5", () => {
    setup();

    expect(AiFillHtml5).toHaveBeenCalled();
  });
  it("is render Sitypescript", () => {
    setup();

    expect(SiTypescript).toHaveBeenCalled();
  });
  it("is render IoLogoCss3", () => {
    setup();

    expect(IoLogoCss3).toHaveBeenCalled();
  });
  it("is render IoLogoJavaScript", () => {
    setup();

    expect(IoLogoJavascript).toHaveBeenCalled();
  });
});

describe("Is render Courses", () => {
  it("is render title", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.TITLE)).toBeInTheDocument();
  });

  it("is render first title", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.FIRST.TITLE)).toBeInTheDocument();
  });

  it("Is render first text", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.FIRST.TEXT)).toBeInTheDocument();
  });

  it("Is render second title", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.SECOND.TITLE)).toBeInTheDocument();
  });
  it("Is render second text", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.SECOND.TEXT)).toBeInTheDocument();
  });

  it("is render thirt title", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.THIRD.TITLE)).toBeInTheDocument();
  });
  it("Is render third text", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.THIRD.TEXT)).toBeInTheDocument();
  });
  it("Is render fourth title", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.FOURTH.TITLE)).toBeInTheDocument();
  });
  it("Is render fourth text", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.FOURTH.TEXT)).toBeInTheDocument();
  });
  it("Is render fifth title", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.FIFTH.TITLE)).toBeInTheDocument();
  });
  it("Is render fifth text", () => {
    setup();

    expect(screen.getByText(COURSES_MESSAGES.FIFTH.TEXT)).toBeInTheDocument();
  });
});
