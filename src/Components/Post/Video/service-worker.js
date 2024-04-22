var blockedUrls = [
    "https://pokdfdfeapi.co",
    "https://doodapi.com"
];

const extractHost = (url) => {
    const urlObject = new URL(url);
    return urlObject.hostname;
};

// Função para verificar se o host está na lista de hosts bloqueados
/*const isBlocked = (url) => {
    const host = extractHost(url);
    return blockedUrls.includes(host);
};*/

// Função para verificar se o host está na lista de hosts bloqueados
const isBlocked = (url) => {
    let res = false;
    blockedUrls.map((u) => {
        const host = extractHost(url);
        if(url.includes(host)){
            res = true
        }
    })
    return res;

};


/*function isBlocked(url) {
    blockedUrls.map((_url_block) => {
        if (url.includes(_url_block)) {
            console.log("url encontrada")
            return true
        }
        else {
            return false
        }
    })
}*/


/*self.addEventListener("beforeunload", function (event) {
    var currentUrl = window.location.href;
    console.log("currentUrl: ",currentUrl)
    if (isBlocked(event.request.url)) {
        event.preventDefault();
        console.log("FAZ PARTE DO ARRAY")
        // Cancela a solicitação bloqueada
        event.respondWith(
            new Response("Acesso bloqueado", { status: 403, statusText: "Forbidden" })
        );
        console.log("Acesso bloqueado para:", event.request.url);
    } else {
        // Continua com a solicitação normalmente
        event.respondWith(
            fetch(event.request)
        );
    }
});*/

self.addEventListener('fetch', function (event) {
    /*var currentUrl = window.location.href;
    console.log("currentUrl: ",currentUrl)*/
    console.log('Solicitação recebida d::', event.request.url);

    if (isBlocked(String(event.request.url))) {

        console.log("FAZ PARTE DO ARRAY")
        // Cancela a solicitação bloqueada
        event.respondWith(
            new Response("Acesso bloqueado para", { status: 403, statusText: "Forbidden" })
        );
        console.log("Acesso bloqueado para:", event.request.url);
    }
});




/*self.addEventListener('fetch', function (event) {
    console.log('Solicitação recebida:', event.request.url);


    if (isBlocked(event.request.url)) {
        console.log("FAZ PARTE DO ARRAY")
        // Cancela a solicitação bloqueada
        event.respondWith(
            new Response("Acesso bloqueado", { status: 403, statusText: "Forbidden" })
        );
        console.log("Acesso bloqueado para:", url);
    }

    // Você pode adicionar sua lógica aqui, como bloquear solicitações ou modificar as respostas.
});*/