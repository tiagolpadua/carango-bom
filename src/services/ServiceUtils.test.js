import ServiceUtils from "./ServiceUtils";

describe('Utilitário Service Utils', () => {
  it('Deve resolver o valor quando content length > 0', () => {
    const prom = Promise.resolve({
      ok: true,
      headers: {
        get: () => '1'
      },
      json: () => new Promise(resolve => resolve("foo"))
    });

    const promTrat = ServiceUtils.handleResponse(prom);

    return expect(promTrat).resolves.toBe("foo");
  });

  it('Deve resolver vazio content length === 0', () => {
    const prom = Promise.resolve({
      ok: true,
      headers: {
        get: () => '0'
      },
      json: () => new Promise(resolve => resolve("foo"))
    });

    const promTrat = ServiceUtils.handleResponse(prom);

    return expect(promTrat).resolves.toBeUndefined();
  });

  it('Deve rejeitar com error', () => {
    const prom = Promise.resolve({
      ok: false,
      headers: {
        get: () => '1'
      },
      json: () => new Promise(resolve => resolve({ error: "foo" }))
    });

    const promTrat = ServiceUtils.handleResponse(prom);

    return expect(promTrat).rejects.toBe("foo");
  });

  it('Deve rejeitar com erros', () => {
    const prom = Promise.resolve({
      ok: false,
      headers: {
        get: () => '1'
      },
      json: () => new Promise(resolve => resolve({ erros: "foo" }))
    });

    const promTrat = ServiceUtils.handleResponse(prom);

    return expect(promTrat).rejects.toBe("foo");
  });

  it('Deve rejeitar quando dá erro', () => {
    const prom = Promise.resolve({
      ok: false,
      headers: {
        get: () => '1'
      },
      json: () => new Promise(resolve => resolve("foo"))
    });

    const promTrat = ServiceUtils.handleResponse(prom);

    return expect(promTrat).rejects.toBe("foo");
  });

  it('Deve retornar o host de api', () => {
    expect(ServiceUtils.getAPIHost())
      .toBe("https://carango-bom-api.herokuapp.com");
  });

  it('Deve retornar o jwt', () => {
    localStorage.setItem('dadosAutenticacao', JSON.stringify(
      {
        "usuario": {
          "username": "admin",
          "perfis": ["ADMIN"]
        },
        "token": "xxxxxxxx"
      }
    ));

    expect(ServiceUtils.getJWT())
      .toBe("xxxxxxxx");
  });
});

