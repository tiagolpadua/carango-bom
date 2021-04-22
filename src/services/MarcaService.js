import EnvService from "./EnvService";

const MarcaService = {
  cadastrar(marca) {
    return fetch(EnvService.getAPIHost() + '/marcas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(marca)
    })
      .then(response => response.json());
  },

  alterar(marca) {
    return fetch(EnvService.getAPIHost() + '/marcas/' + marca.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(marca)
    })
      .then(response => response.json());
  },

  consultar(id) {
    return fetch(EnvService.getAPIHost() + '/marcas/' + id)
      .then(response => response.json());
  },

  listar() {
    return fetch(EnvService.getAPIHost() + '/marcas')
      .then(response => response.json());
  },

  excluir(marca) {
    return fetch(EnvService.getAPIHost() + '/marcas/' + marca.id, {
      method: 'DELETE'
    })
      .then(response => response.json());
  }
};

export default MarcaService;