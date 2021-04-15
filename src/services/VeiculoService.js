const VeiculoService = {
  dashboard() {
    return new Promise(resolve => {
      resolve([
        { marca: 'GM', valor: "R$ 50.000,00" },
        { marca: 'FIAT', valor: "R$ 15.000,00" },
        { marca: 'RENAULT', valor: "R$ 8.000,00" },
      ]);
    });
  },
  cadastrar({ marca, modelo, ano, valor }) {
    return new Promise(resolve => {
      resolve('Veículo cadastrado com sucesso!');
    });
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