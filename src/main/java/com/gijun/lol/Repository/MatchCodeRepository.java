package com.gijun.lol.Repository;

import com.gijun.lol.Entity.MatchCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MatchCodeRepository extends JpaRepository<MatchCode, Long> {

	boolean existsByMatchCode (String matchCode);

	MatchCode findTopByOrderByIdDesc();

}
