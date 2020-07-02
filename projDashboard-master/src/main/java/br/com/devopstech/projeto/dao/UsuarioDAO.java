package br.com.devopstech.projeto.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.devopstech.projeto.model.Usuario;

public interface UsuarioDAO extends CrudRepository<Usuario, Integer>{

	public Usuario findByEmailAndSenha(String email, String senha);
	public Usuario findByRacfOrEmail(String racf, String email);
	
}
