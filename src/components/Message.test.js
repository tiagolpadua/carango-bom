import { render, screen } from '@testing-library/react';
import React from 'react';
import MensagemContext from '../contexts/MensagemContext';
import Message from './Message';
import userEvent from '@testing-library/user-event';

describe('Componente Message', () => {
  it('Deve renderizar Olá', () => {
    const mensagem = "Olá!";
    const setMensagem = jest.fn();
    render(
      <MensagemContext.Provider value={{ mensagem, setMensagem }}>
        <Message />
      </MensagemContext.Provider>
    );

    // screen.debug();

    expect(screen.getByText(/Olá/i))
      .toBeInTheDocument();
  });

  it('Deve renderizar duas mensagens', () => {
    const mensagem = [{ parametro: "foo", mensagem: "bar" }];
    const setMensagem = jest.fn();
    render(
      <MensagemContext.Provider value={{ mensagem, setMensagem }}>
        <Message />
      </MensagemContext.Provider>
    );

    // screen.debug();

    expect(screen.getByText(/foo: bar/i))
      .toBeInTheDocument();
  });

  it('Deve fechar', () => {
    const mensagem = "Olá!";
    const setMensagem = jest.fn();
    render(
      <MensagemContext.Provider value={{ mensagem, setMensagem }}>
        <Message />
      </MensagemContext.Provider>
    );

    userEvent.click(screen.getByRole("button"));

    // screen.debug();


    // console.log(setMensagem.mock);

    expect(setMensagem.mock.calls.length)
      .toBe(1);
  });
});

