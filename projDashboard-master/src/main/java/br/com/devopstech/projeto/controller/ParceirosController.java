package br.com.devopstech.projeto.controller;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import br.com.devopstech.projeto.dao.ParceirosDAO;
import br.com.devopstech.projeto.model.Parceiros;

@CrossOrigin(origins = "*")
@RestController
public class ParceirosController {

	@Autowired //injeção da dependência - não precisa implementar pois o framework cria
	private ParceirosDAO dao;
	
	@GetMapping("/parceiros")
	public ArrayList<Parceiros> listarTudo(){
		ArrayList<Parceiros> lista = (ArrayList<Parceiros>) dao.findByOrderByVolumeDesc();
		
		return lista;
	}
	
	@GetMapping("/parceiros/{id}")
	public ResponseEntity<Parceiros> buscarPeloId (@PathVariable int id){
		Parceiros parc = dao.findById(id).orElse(null);
		if (parc != null) {
			return ResponseEntity.ok(parc);
		}
		else {
			return ResponseEntity.notFound().build();
		}

	}

}
