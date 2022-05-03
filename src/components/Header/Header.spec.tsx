import {  render, screen } from "@testing-library/react";
import  '@testing-library/jest-dom'
import { Header } from "./Header";
import { HEADER_MESSAGES } from "./messages";


const setup = ()=> render(<Header />)

describe('Is render Header', () => {
    it('render img', () => {
        setup()

        expect(screen.getByAltText('Está aqui é minha foto')).toHaveAttribute('src')
    })
    it('render about', () => {
        setup()
        
        const SOBRE = (screen.getByText(HEADER_MESSAGES.SOBRE));
        expect(SOBRE).toHaveAttribute('href');
    })
    it('render contacts', ()=> {
        setup()

        const contato = (screen.getByText(HEADER_MESSAGES.CONTATOS));
        expect(contato).toHaveAttribute('href');
    })
    it('render git', ()=> {
        setup()

        const git = (screen.getByText(HEADER_MESSAGES.GIT));
        expect(git).toHaveAttribute('href');
    })
})