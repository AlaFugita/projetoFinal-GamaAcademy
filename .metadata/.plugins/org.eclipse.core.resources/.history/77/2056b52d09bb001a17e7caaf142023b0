package br.com.isidrocorp.projeto.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.isidrocorp.projeto.model.Usuario;

public interface UsuarioDAO extends CrudRepository<Usuario, Integer>{

	public Usuario findByEmailAndSenha(String email, String senha);
	
}
