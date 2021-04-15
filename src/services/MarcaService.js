const MarcaService = {
  cadastrar(nome) {
    return new Promise(resolve => {
      resolve('Marca cadastrada com sucesso!');
    })
  },
  listar() {
    return new Promise(resolve => {
      resolve([
        {
          id: 1,
          nome: "GM"
        },
        {
          id: 2,
          nome: "FIAT"
        }
      ]);
    });
  }
};

export default MarcaService;