import ServiceUtils from "./ServiceUtils";

const MarcaService = {
  cadastrar(marca) {
    return ServiceUtils.handleResponse(
      fetch(ServiceUtils.getAPIHost() + '/marcas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(marca)
      })
    );
  },

  alterar(marca) {
    return ServiceUtils.handleResponse(
      fetch(ServiceUtils.getAPIHost() + '/marcas/' + marca.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(marca)
      })
    );
  },

  consultar(id) {
    return ServiceUtils.handleResponse(
      fetch(ServiceUtils.getAPIHost() + '/marcas/' + id)
    );
  },

  listar() {
    return ServiceUtils.handleResponse(
      fetch(ServiceUtils.getAPIHost() + '/marcas')
    );
  },

  excluir(marca) {
    return ServiceUtils.handleResponse(
      fetch(ServiceUtils.getAPIHost() + '/marcas/' + marca.id, {
        method: 'DELETE'
      })
    );
  }
};

export default MarcaService;