package com.gijun.lol.Repository;

import com.gijun.lol.Data.LoLBoardProjection;
import com.gijun.lol.Entity.LoLBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LoLBoardRepository extends JpaRepository<LoLBoard, Long> {

	@Query(value = "SELECT l.category, l.id as idx, l.title, l.writer, l.time, l.visit from lolboard l", nativeQuery = true)
	List<LoLBoardProjection> getBoardList();

}
