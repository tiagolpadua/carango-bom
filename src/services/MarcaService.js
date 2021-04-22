import EnvService from "./EnvService";

const MarcaService = {
  cadastrar(nome) {
    return new Promise(resolve => {
      resolve('Marca cadastrada com sucesso!');
    })
  },
  listar() {
    return fetch(EnvService.getAPIHost() + '/marcas')
      .then(response => response.json());
  }
};

export default MarcaService;