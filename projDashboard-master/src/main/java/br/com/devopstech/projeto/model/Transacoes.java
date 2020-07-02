package br.com.devopstech.projeto.model;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="mtb310_transaction")
public class Transacoes {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_transacao")
	private int id_transacao;
	
	@Column(name="data_hora")
	private Timestamp data_hora;
	
	@Column(name="dispositivo")
	private int dispositivo;
	
	@Column(name="valor_solic")
	private float valor_solic;
	
	@Column(name="valor_aut")
	private float valor_aut;
	
	@Column(name="status")
	private int status;
	
	@JsonIgnoreProperties("listaTransacoes")
	@ManyToOne()
	private Parceiros parc;

	public Parceiros getParc() {
		return parc;
	}

	public void setParc(Parceiros parc) {
		this.parc = parc;
	}

	public int getId_transacao() {
		return id_transacao;
	}

	public void setId_transacao(int id_transacao) {
		this.id_transacao = id_transacao;
	}

	public Timestamp getData_hora() {
		return data_hora;
	}

	public void setData_hora(Timestamp data_hora) {
		this.data_hora = data_hora;
	}

	public int getDispositivo() {
		return dispositivo;
	}

	public void setDispositivo(int dispositivo) {
		this.dispositivo = dispositivo;
	}

	public float getValor_solic() {
		return valor_solic;
	}

	public void setValor_solic(float valor_solic) {
		this.valor_solic = valor_solic;
	}

	public float getValor_aut() {
		return valor_aut;
	}

	public void setValor_aut(float valor_aut) {
		this.valor_aut = valor_aut;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	
}
