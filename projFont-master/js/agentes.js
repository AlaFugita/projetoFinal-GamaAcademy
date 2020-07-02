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
    let texto = `<table>
                    <tr>
                        <th>ID Parceiro</th>
                        <th>Nome Parceiro</th>
                        <th>Volume Transacional</th>
                    </tr>`;

    for (let index = 0; index < res.length; index++) {
        
        texto = texto + `<tr>
                            <td>${res[index].id_agente}</td>
                            <td><a href="http://www.google.com" target="_blank">${res[index].nome_agente}</a></td>
                            <td>${res[index].volume}</td>
                        </tr>`;
        
    }
        
    texto = texto + `</table>`;

    document.getElementById("conteudo").innerHTML = texto;

}