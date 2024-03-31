package com.gijun.lol.Repository;

import com.gijun.lol.Entity.NameNickname;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NameNicknameRepository extends JpaRepository<NameNickname, Long> {

	NameNickname findByNickname(String nickname);
	NameNickname findByName(String name);

}
