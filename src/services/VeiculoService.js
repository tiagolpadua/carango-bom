const VeiculoService = {
  dashboard() {
    return new Promise(resolve => {
      resolve([]);
    });
  },
  cadastrar() {
    throw new Error("Não implementado");
  },
  listar() {
    return new Promise(resolve => {
      resolve([
        {
          id: 1,
          marca: "GM",
          modelo: "CORSA",
          valor: 15000
        },
        {
          id: 2,
          marca: "FIAT",
          modelo: "STRADA",
          valor: 18000
        },
        {
          id: 3,
          marca: "HONDA",
          modelo: "CIVIC",
          valor: 25000
        },
      ]);
    })
  }
};

export default VeiculoService;