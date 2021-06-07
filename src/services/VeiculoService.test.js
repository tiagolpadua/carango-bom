import VeiculoService from './VeiculoService';
import ServiceUtils from "./ServiceUtils";

jest.mock('./ServiceUtils', () => jest.fn());

// global.fetch = jest.fn(() => Promise.resolve({
//   ok: true,
//   json: () => Promise.resolve({ foo: "foo" })
// }));

describe('Service VeiculoService', () => {
  it('Deve retornar o dashboard', () => {
    return expect(VeiculoService.dashboard()).resolves.toBeDefined();
  });

  it('Deve cadastrar um veículo', () => {
    ServiceUtils.getJWT = jest.fn(() => "foo");
    ServiceUtils.getAPIHost = jest.fn(() => "bar");
    ServiceUtils.handleResponse = jest.fn(() => Promise.resolve("foo"));

    return expect(VeiculoService.cadastrar("foo")).resolves.toBe("foo");
  });

  it('Deve alterar um veículo', () => {
    ServiceUtils.getJWT = jest.fn(() => "foo");
    ServiceUtils.getAPIHost = jest.fn(() => "bar");
    ServiceUtils.handleResponse = jest.fn(() => Promise.resolve("foo"));

    return expect(VeiculoService.alterar("foo")).resolves.toBe("foo");
  });

  it('Deve consultar um veículo', () => {
    ServiceUtils.getJWT = jest.fn(() => "foo");
    ServiceUtils.getAPIHost = jest.fn(() => "bar");
    ServiceUtils.handleResponse = jest.fn(() => Promise.resolve("foo"));

    return expect(VeiculoService.consultar("foo")).resolves.toBe("foo");
  });

  it('Deve listar veículos', () => {
    ServiceUtils.getJWT = jest.fn(() => "foo");
    ServiceUtils.getAPIHost = jest.fn(() => "bar");
    ServiceUtils.handleResponse = jest.fn(() => Promise.resolve("foo"));

    return expect(VeiculoService.listar()).resolves.toBe("foo");
  });

  it('Deve excluir um veículo', () => {
    ServiceUtils.getJWT = jest.fn(() => "foo");
    ServiceUtils.getAPIHost = jest.fn(() => "bar");
    ServiceUtils.handleResponse = jest.fn(() => Promise.resolve("foo"));

    return expect(VeiculoService.excluir("foo")).resolves.toBe("foo");
  });

});

