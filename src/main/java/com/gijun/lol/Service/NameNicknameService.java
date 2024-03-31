package com.gijun.lol.Service;

import com.gijun.lol.Entity.NameNickname;
import com.gijun.lol.Repository.NameNicknameRepository;
import org.springframework.stereotype.Service;

@Service
public class NameNicknameService {

	private final NameNicknameRepository nameNicknameRepository;

	public NameNicknameService (NameNicknameRepository nameNicknameRepository) {
		this.nameNicknameRepository = nameNicknameRepository;
	}

	public String saveNameNickname(String nickname, String name){

		NameNickname nameNickname = new NameNickname ();
		nameNickname.setNickname (nickname);
		nameNickname.setName (name);
		nameNicknameRepository.save (nameNickname);
		return "저장성공";
	}

	public NameNickname findByNameOrNickname(String field, String value) {
		if ("nickname".equals(field)) {
			return nameNicknameRepository.findByNickname(value);
		} else if ("summonerName".equals(field)) {
			return nameNicknameRepository.findByName(value);
		} else {
			return null;
		}
	}

}
