const EnvService = {
    getAPIHost() {
        if (process.env.NODE_ENV === 'development') {
            return 'http://localhost:8080';
        } else {
            return 'https://carango-bom-api.herokuapp.com';
        }
    }
};

export default EnvService;