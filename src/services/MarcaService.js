const MarcaService = {
  cadastrar(nome) {
    throw new Error("Não implementado");
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
    })
  }
};

export default MarcaService;