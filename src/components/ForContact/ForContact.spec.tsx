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

const setup = () => render(<ForContact />);

describe("is render Forcontact icons", () => {
  it("render AiFillLinkedIs", () => {
    setup();
    expect(AiFillLinkedin).toHaveBeenCalled();
  });
  it("render AiOutlineMail", () => {
    setup();

    expect(AiOutlineMail).toHaveBeenCalled();
  });
  it("render BsWhatsapp", () => {
    setup();

    expect(BsWhatsapp).toHaveBeenCalled();
  });
});

describe("is render ForContact", () => {
  it("render LinkedIn", () => {
    setup();

    expect(screen.getByText(FOR_CONTACT.LINKEDIN)).toBeInTheDocument();
  });
  it("render Whatsapp", () => {
    setup();

    expect(screen.getByText(FOR_CONTACT.WHATSAPP)).toBeInTheDocument();
  });
  it("render Email", () => {
    setup();

    expect(screen.getByText(FOR_CONTACT.EMAIL)).toBeInTheDocument();
  });
});
