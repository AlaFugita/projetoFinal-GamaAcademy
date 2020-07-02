function autenticar(event){
    event.preventDefault();
    let txtLogin = document.getElementById("txtLogin").value;
    let txtSenha = document.getElementById("txtSenha").value;

    let msgLogin = {
        racf: txtLogin,
        email: txtLogin,
        senha: txtSenha
    }

    let cabecalho = {
        method: "POST",
        body: JSON.stringify(msgLogin),
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch("http://localhost:8080/login", cabecalho)
    .then(res => tratarResposta(res));
    
}

function tratarResposta(res){
    if(res.status == 200){
        res.json().then(res => logarUsuario(res));
        window.location = "top10.html";
    }
    else{
        document.getElementById("msgError").innerHTML = "Usuário/Senha inválido";
    }
}

function logarUsuario(res){
    localStorage.setItem("usuarioLogado", JSON.stringify(res));
}