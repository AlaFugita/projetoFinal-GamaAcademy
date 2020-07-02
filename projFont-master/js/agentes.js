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
    document.getElementById("parceiro").innerHTML = "Parceiro: " + res.nome_agente;
    document.getElementById("conteudoParceiro").innerHTML = "Volume de transações: " + res.volume;
}