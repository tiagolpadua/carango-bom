const ServiceUtils = {

    handleResponse(prom) {
        return new Promise((resolve, reject) => {
            prom.then((response) => {
                if (response.ok) {
                    if (response.headers.get('Content-Length') === '0') {
                        resolve();
                    } else {
                        resolve(response.json());
                    }
                } else {
                    response.json()
                        .then((data) => {
                            if (data.error) {
                                reject(data.error);
                            } else if (data.erros) {
                                reject(data.erros);
                            } else {
                                reject(data);
                            }
                        })
                        .catch(err => reject(err));
                }
            })
        });
    },

    getAPIHost() {
        return 'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake';
    },

    getJWT() {
        const dadosAutenticacao = JSON.parse(localStorage.getItem('dadosAutenticacao'));
        return dadosAutenticacao.token;
    }
}

export default ServiceUtils;