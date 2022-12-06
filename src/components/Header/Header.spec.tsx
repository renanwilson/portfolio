import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-canvas-mock";
import { Header } from "./Header";
import { HEADER_MESSAGES } from "./messages";

const container = () => render(<Header />);

describe("Is render Header", () => {
  it("render img", () => {
    container();

    expect(screen.getByAltText("Está aqui é minha foto")).toHaveAttribute(
      "src"
    );
  });
  it("render about", () => {
    container();

    const SOBRE = screen.getByText(HEADER_MESSAGES.SOBRE);
    expect(SOBRE).toHaveAttribute("href");
  });
  it("render contacts", () => {
    container();

    const contato = screen.getByText(HEADER_MESSAGES.CONTATOS);
    expect(contato).toHaveAttribute("href");
  });
  it("render git", () => {
    container();

    const git = screen.getByText(HEADER_MESSAGES.GIT);
    expect(git).toHaveAttribute("href");
  });
});
