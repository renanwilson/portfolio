import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ForContact } from "./ForContact";
import { FOR_CONTACT } from "./messages";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

jest.mock("react-icons/ai", () => ({
  AiFillLinkedin: jest.fn(() => null),
  AiOutlineMail: jest.fn(() => null),
}));
jest.mock("react-icons/bs", () => ({
  BsWhatsapp: jest.fn(() => null),
}));

const container = () => render(<ForContact />);

describe("is render Forcontact icons", () => {
  it("render AiFillLinkedIs", () => {
    container();
    expect(AiFillLinkedin).toHaveBeenCalled();
  });
  it("render AiOutlineMail", () => {
    container();

    expect(AiOutlineMail).toHaveBeenCalled();
  });
  it("render BsWhatsapp", () => {
    container();

    expect(BsWhatsapp).toHaveBeenCalled();
  });
});

describe("is render ForContact", () => {
  it("render LinkedIn", () => {
    container();

    const LINKEDIN = screen.getByText(FOR_CONTACT.LINKEDIN)
    expect(LINKEDIN).toBeInTheDocument();
  });
  it("render Whatsapp", () => {
    container();

    const WHATSAPP =  screen.getByText(FOR_CONTACT.WHATSAPP)
    expect(WHATSAPP).toBeInTheDocument();
  });
  it("render Email", () => {
    container();

    const EMAIL = screen.getByText(FOR_CONTACT.EMAIL)
    expect(EMAIL).toBeInTheDocument();
  });
});
