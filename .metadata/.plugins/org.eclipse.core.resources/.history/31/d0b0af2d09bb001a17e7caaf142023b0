package br.com.isidrocorp.projeto.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.isidrocorp.projeto.dao.UsuarioDAO;
import br.com.isidrocorp.projeto.model.Departamento;
import br.com.isidrocorp.projeto.model.Usuario;

@CrossOrigin(origins = "*")
@RestController
public class UsuarioController {

	@Autowired //injeção da dependência - não precisa implementar pois o framework cria
	private UsuarioDAO dao;
	
	@GetMapping("/usuarios")
	public ArrayList<Usuario> listarTudo(){
		ArrayList<Usuario> lista = (ArrayList<Usuario>) dao.findAll();
		
		return lista;
	}
	
	@PostMapping("/login")
	public ResponseEntity<Usuario> login(@RequestBody Usuario userEmailSenha) {
		Usuario user = dao.findByEmailAndSenha(userEmailSenha.getEmail(), userEmailSenha.getSenha());
		if(user != null) {
			return ResponseEntity.ok(user);
		}else {
			return ResponseEntity.notFound().build();
		}
		// return user;
	}
}
