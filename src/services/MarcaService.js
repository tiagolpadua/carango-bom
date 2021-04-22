const MarcaService = {
  cadastrar(nome) {
    return new Promise(resolve => {
      resolve('Marca cadastrada com sucesso!');
    })
  },
  listar() {
    return fetch('http://localhost:8080/marcas')
      .then(response => response.json());
  }
};

export default MarcaService;