import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente principal', () => {
  it('Deve renderizar o título', () => {
    render(<App />);
    const linkElement = screen.getByText(/Veículos - Carango Bom/i);
    expect(linkElement).toBeInTheDocument();
  });
});

