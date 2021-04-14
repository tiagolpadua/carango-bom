function getPageTitle(path) {
    return [
        ['/login', 'Entrar'],
        ['/', 'Lista de Veículos'],
        ['/dashboard', 'Dashboard'],
        ['/cadastro-veiculo', 'Cadastro de Veículo'],
        ['/cadastro-marca', 'Cadastro de Marca']
    ].find(i => i[0] === path)[1];
}

export default getPageTitle;