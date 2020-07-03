function iniciar(){
    let user = localStorage.getItem("usuarioLogado");

    if(!user){
        window.location = "index.html";
    }

    let nomeUsuario = JSON.parse(user).racf;

    document.getElementById("user").innerHTML = "Bem-vindo, " + nomeUsuario;
    carregarDados();
}

function logout(){
    localStorage.removeItem("usuarioLogado");
    window.location = "index.html";
}

function carregarDados(){
    fetch("http://localhost:8080/parceiros")
    .then(res => res.json())
    .then(res => preencher(res));
}

function preencher(res){

    let lista = ``

    let texto = `<table class="table table-sm">
                    <tr>
                        <th>ID Parceiro</th>
                        <th>Nome Parceiro</th>
                        <th>Volume Transacional</th>
                    </tr>`;

    for (let index = 0; index < res.length; index++) {

        lista = lista + `<option value = ${res[index].id_agente}>${res[index].nome_agente}</option>`;
        
        texto = texto + `<tr>
                            <td>${res[index].id_agente}</td>
                            <td>${res[index].nome_agente}</td>
                            <td>${res[index].volume}</td>
                        </tr>`;
        
    }
        
    texto = texto + `</table>`;

    document.getElementById("parceiros").innerHTML = lista;
    document.getElementById("conteudo").innerHTML = texto;

}

function selecionar(event){
    event.preventDefault();
    let txtAgente = document.getElementById("parceiros").value;
    localStorage.setItem("idAgente", txtAgente);
    console.log(localStorage.getItem("idAgente"));
    window.location = "agente.html";
}