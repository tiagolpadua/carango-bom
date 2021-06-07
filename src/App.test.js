import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router';
import ListagemVeiculos from './pages/ListagemVeiculos';
import ListagemUsuarios from './pages/ListagemUsuarios';
import Pagina404 from './pages/Pagina404';
import Login from './pages/Login';

jest.mock('./pages/ListagemVeiculos');
jest.mock('./pages/ListagemUsuarios');
jest.mock('./pages/Login');
jest.mock('./pages/Pagina404');

describe('Componente principal', () => {
  it('Deve renderizar o título', () => {

    ListagemVeiculos.mockImplementation(() => <div>Listagem de Veículos</div>);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getByText(/Veículos - Carango Bom/i))
      .toBeInTheDocument();

    expect(screen.getByText(/Listagem de Veículos/i))
      .toBeInTheDocument();
  });

  it('Deve exibir nome do usuário quando estiver logado', () => {

    ListagemVeiculos.mockImplementation(() => <div>Listagem de Veículos</div>);

    localStorage.setItem('dadosAutenticacao', JSON.stringify(
      {
        "usuario": {
          "username": "admin",
          "perfis": ["ADMIN"]
        },
        "token": "xxxxxxxx"
      }
    ));

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/admin/i)).toBeInTheDocument();
  });

  it('Deve exibir erro 404 para página inválida', () => {

    Pagina404.mockImplementation(() => <div>Página 404</div>);

    render(
      <MemoryRouter initialEntries={['/rota/invalida']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Página 404/i)).toBeInTheDocument();
  });

  it('Deve exibir a listagem de usuários quando estiver logado e acessar a rota', () => {

    ListagemUsuarios.mockImplementation(() => <div>Listagem de Usuários</div>);

    render(
      <MemoryRouter initialEntries={['/usuarios']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Listagem de Usuários/i)).toBeInTheDocument();
  });

  it('Deve redirecionar para o login se tentar acessar rota que exige autenticação', () => {

    localStorage.clear();

    Login.mockImplementation(() => <div>Login</div>);

    render(
      <MemoryRouter initialEntries={['/usuarios']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});

