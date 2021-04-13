export const UsuarioService = {
  login({ usuario, senha }) {
    return fetch("https://???.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario, senha }),
    })
      .then(async (responseDoServer) => {
        if (!responseDoServer.ok) {
          const respostaDeErroDoServidor = await responseDoServer.json();
          const errorObj = Error(respostaDeErroDoServidor.message);
          errorObj.status = responseDoServer.status;
          throw errorObj;
        }
        return responseDoServer.json();
      })
      .then((dadosDoServidorEmObj) => {
        const token = dadosDoServidorEmObj.token;
        if (token) {
          localStorage.setItem("TOKEN", token);
          return;
        }
        throw new Error("Token not found");
      });
  },
  logoff() {
    throw new Error("Não implementado");
  },
  cadastrar() {
    throw new Error("Não implementado");
  }
};
