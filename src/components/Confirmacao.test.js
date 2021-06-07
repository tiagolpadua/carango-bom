import { render, screen } from '@testing-library/react';
import Confirmacao from './Confirmacao';

describe('Componente Confirmação', () => {
  it('Deve renderizar o componente', () => {
    const noop = () => { };

    render(
      <Confirmacao open={true}
        onClose={noop}
        onConfirm={noop}
        title='Excluir Veículo'
        content='Confirma a exclusão?' />
    );

    expect(screen.getByText(/Confirma a exclusão?/i))
      .toBeInTheDocument();
  });
});

