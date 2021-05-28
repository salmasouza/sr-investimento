package br.com.salmasouza.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.salmasouza.myinvest.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long>{

}
