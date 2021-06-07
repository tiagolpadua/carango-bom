import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router';
import UsuarioLogadoContext from '../contexts/UsuarioLogadoContext';
import Menu from './Menu';

describe('Componente Menu', () => {
  it('Deve renderizar', () => {
    const usuarioLogado = "foo";
    const setUsuarioLogado = jest.fn();

    render(
      <MemoryRouter>
        <UsuarioLogadoContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
          <Menu />
        </UsuarioLogadoContext.Provider >
      </MemoryRouter>
    );

    // screen.debug();

    // const button = screen.getByText(/Sair/i);

    // button.simulate('click');

    expect(screen.getByText(/Veículos/i))
      .toBeInTheDocument();
  });

  it('Deve fazer logoff', () => {
    const usuarioLogado = "foo";
    const setUsuarioLogado = jest.fn();

    render(
      <MemoryRouter>
        <UsuarioLogadoContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
          <Menu />
        </UsuarioLogadoContext.Provider >
      </MemoryRouter>
    );

    // screen.debug();

    userEvent.click(screen.getByText(/Sair/i));

    expect(setUsuarioLogado.mock.calls.length)
      .toBe(1);
  });
});

