const UsuarioService = {
  login({ usuario, senha }) {
    return new Promise((resolve, reject) => {
      if (usuario === 'tiago' && senha === '123') {
        const jwt = '112334654654654';
        resolve({ usuario, jwt });
      } else {
        reject('Usuário e/ou senha inválidos.');
      }
    });

    // return fetch("https://???.herokuapp.com/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ usuario, senha }),
    // })
    //   .then(async (responseDoServer) => {
    //     if (!responseDoServer.ok) {
    //       const respostaDeErroDoServidor = await responseDoServer.json();
    //       const errorObj = Error(respostaDeErroDoServidor.message);
    //       errorObj.status = responseDoServer.status;
    //       throw errorObj;
    //     }
    //     return responseDoServer.json();
    //   })
    //   .then((dadosDoServidorEmObj) => {
    //     const token = dadosDoServidorEmObj.token;
    //     if (token) {
    //       localStorage.setItem("TOKEN", token);
    //       return;
    //     }
    //     throw new Error("Token not found");
    //   });
  },
  cadastrar({ usuario, senha }) {
    return new Promise((resolve, reject) => {
      if (usuario === 'tiago' && senha === '11111') {
        resolve('Usuário cadastrado com sucesso!');
      } else {
        reject('Erro ao cadastrar usuário');
      }
    });
  },
  listar() {
    return new Promise((resolve, reject) => {
      resolve([{ id: 1, name: 'tiago' }, { id: 2, name: 'bruno' }, { id: 3, name: 'paulo' }]);
    });
  }
};

export default UsuarioService;