import EnvService from "./EnvService";

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

  cadastrar(veiculo) {
    return fetch(EnvService.getAPIHost() + '/veiculos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(veiculo)
    })
      .then(response => response.json());
  },

  alterar(veiculo) {
    return fetch(EnvService.getAPIHost() + '/veiculos/' + veiculo.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(veiculo)
    })
      .then(response => response.json());
  },

  consultar(id) {
    return fetch(EnvService.getAPIHost() + '/veiculos/' + id)
      .then(response => response.json());
  },

  listar() {
    return fetch(EnvService.getAPIHost() + '/veiculos')
      .then(response => response.json());
  },

  excluir(veiculo) {
    return fetch(EnvService.getAPIHost() + '/veiculos/' + veiculo.id, {
      method: 'DELETE'
    });
  }
};

export default VeiculoService;