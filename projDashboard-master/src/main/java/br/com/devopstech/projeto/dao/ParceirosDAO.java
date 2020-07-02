package br.com.devopstech.projeto.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.devopstech.projeto.model.Parceiros;

public interface ParceirosDAO extends CrudRepository<Parceiros, Integer>{
	List<Parceiros> findByOrderByVolumeDesc();
}
