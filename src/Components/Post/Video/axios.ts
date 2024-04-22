import axios from 'axios';

// Crie um cliente Axios com headers padrão
const client = axios.create({
    baseURL: 'https://pixeldrain.com',
    headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'pt-BR,pt;q=0.9',
        'Cache-Control': 'no-cache',
        //'Cookie': 'pd_auth_key=25f321d9-8dc2-4dc8-8568-cab33b7d7fa5',
        'Pragma': 'no-cache',
        /*'Sec-Ch-Ua': '"Not A(Brand";v="99", "Opera GX";v="107", "Chromium";v="121"',
        'Sec-Ch-Ua-Mobile': '?1',
        'Sec-Ch-Ua-Platform': '"Android"',
        'Sec-Fetch-Dest': 'iframe',
        'Sec-Fetch-Mode': 'navigate',
        //'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',*/
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36',
    }
});

// Adicione um interceptor para manipular solicitações
client.interceptors.request.use(
    config => {
        // Adicione o header de Referer
        config.headers['Referer'] = 'https://pixeldrain.com/u/c8heeLdb';
        //config.headers['X-My-Referer'] = 'https://pixeldrain.com/u/c8heeLdb';
        config.headers['Host'] = 'https://pixeldrain.com/u/c8heeLdb';
        config.headers['Cookie'] = 'pd_auth_key=25f321d9-8dc2-4dc8-8568-cab33b7d7fa5';


        // Retorne a configuração da solicitação atualizada
        return config;
    },
    error => {
        // Faça alguma manipulação de erro, se necessário
        console.error('Erro ao enviar a solicitação:', error);
        return Promise.reject(error);
    }
);

// Adicione um interceptor para manipular respostas
client.interceptors.response.use(
    response => {
        // Faça alguma manipulação na resposta, se necessário
        console.log('Resposta recebida:', response);
        return response;
    },
    error => {
        // Faça alguma manipulação de erro, se necessário
        console.error('Erro ao receber a resposta:', error);
        return Promise.reject(error);
    }
);

export default client;
