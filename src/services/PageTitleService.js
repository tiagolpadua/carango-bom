function getPageTitle(path) {
    return [
        ['/login', 'Entrar'],
        ['/', 'Veículos'],
        ['/dashboard', 'Dashboard'],
        ['/cadastro-veiculo', 'Cadastro de Veículo'],
        ['/usuarios', 'Usuários'],
        ['/cadastro-usuario', 'Cadastro de Usuário'],
        ['/marcas', 'Marcas'],
        ['/cadastro-marca', 'Cadastro de Marca']
    ].find(i => i[0] === path)[1];
}

export default getPageTitle;