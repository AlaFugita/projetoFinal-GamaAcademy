function iniciar(){
    let user = localStorage.getItem("usuarioLogado");
    let idAgente = localStorage.getItem("idAgente");

    if(!user){
        window.location = "index.html";
    }

    carregarDados(idAgente);
}

function logout(){
    localStorage.removeItem("usuarioLogado");
    window.location = "index.html";
}

function voltar(){
    window.location = "top10.html";
}

function carregarDados(id){
    fetch("http://localhost:8080/parceiros/" + id)
    .then(res => res.json())
    .then(res => preencher(res));
}

function preencher(res){

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
    document.getElementById("conteudoParceiro").innerHTML = "Volume Transacional: " + res.volume + "<br> Volume autorizados: " + somaAutorizados + "<br>Volume recusados: " + somaRecusados + "<br>Volume fraudes : " + somaFraudes;
}