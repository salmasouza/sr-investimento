package br.com.salmasouza.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.salmasouza.myinvest.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
