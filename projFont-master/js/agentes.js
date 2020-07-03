function iniciar() {
    let user = localStorage.getItem("usuarioLogado");
    let idAgente = localStorage.getItem("idAgente");

    if (!user) {
        window.location = "index.html";
    }

    console.log(idAgente);

    if (idAgente != 0) {
        carregarDados(idAgente);
    } else {
        carregarDadosTotal();
    }
}

function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location = "index.html";
}

function voltar() {
    window.location = "top10.html";
}

function carregarDados(id) {
    fetch("http://localhost:8080/parceiros/" + id)
        .then(res => res.json())
        .then(res => preencher(res));
}

function preencher(res) {

    let somaAutorizados = 0;
    let somaRecusados = 0;
    let somaFraudes = 0;

    for (let index = 0; index < res.listaTransacoes.length; index++) {
        if (res.listaTransacoes[index].status == 0) {
            somaAutorizados++;
        } else if (res.listaTransacoes[index].status == 1) {
            somaRecusados++;
        } else {
            somaFraudes++;
        }
    }

    document.getElementById("parceiro").innerHTML = "Parceiro: " + res.nome_agente;
    document.getElementById("conteudoJumbotron").innerHTML = `
    <div class="jumbotron" style="font-weight:bold; min-width: 17vw; max-height: 8vh; padding: 4%">Total: `+(somaAutorizados+somaRecusados+somaFraudes)+`</div>
    <div class="jumbotron" style="min-width: 17vw;padding: 4%; max-height: 8vh;">Autorizadas: `+ somaAutorizados+`</div>
    <div class="jumbotron" style="min-width: 17vw;padding: 4%; max-height: 8vh;">Recusadas: `+somaRecusados+`</div>
    <div class="jumbotron" style="min-width: 17vw;padding: 4%; max-height: 8vh;">Fraudes: `+somaFraudes+`</div>`;
}

function carregarDadosTotal() {
    fetch("http://localhost:8080/parceiros")
        .then(res => res.json())
        .then(res => preencherTotal(res));
}

function preencherTotal(res) {

    let somaAutorizados = 0;
    let somaRecusados = 0;
    let somaFraudes = 0;

    for (let index = 0; index < res.length; index++) {

        for (let index2 = 0; index2 < res[index].listaTransacoes.length; index2++) {

            if (res[index].listaTransacoes[index2].status == 0) {
                somaAutorizados++;
            } else if (res[index].listaTransacoes[index2].status == 1) {
                somaRecusados++;
            } else {
                somaFraudes++;
            }
        }

    }
    document.getElementById("parceiro").innerHTML = "Todos os parceiros";
    document.getElementById("conteudoJumbotron").innerHTML = `
    <div class="jumbotron" style="min-width: 17vw;padding: 5%; max-height: 8vh;">Autorizadas: `+ somaAutorizados+`</div>
    <div class="jumbotron" style="min-width: 17vw;padding: 5%; max-height: 8vh;">Recusadas: `+somaRecusados+`</div>
    <div class="jumbotron" style="min-width: 17vw;padding: 5%; max-height: 8vh;">Fraudes: `+somaFraudes+`</div>`
}