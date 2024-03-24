
package com.gijun.lol.Service;

import com.gijun.lol.Entity.MatchCode;
import com.gijun.lol.Repository.MatchCodeRepository;
import com.gijun.lol.Utils.MatchCodeGenerator;
import org.springframework.stereotype.Service;

@Service
public class MatchCodeService {

	private final MatchCodeRepository matchCodeRepository;

	public MatchCodeService(MatchCodeRepository matchCodeRepository) {
		this.matchCodeRepository = matchCodeRepository;
	}

	public String saveMatchCode() {
		String matchCode;
		do {
			matchCode = MatchCodeGenerator.generateMatchCodeWithUUID();
		} while (matchCodeRepository.existsByMatchCode(matchCode));

		// MatchCode 객체를 생성하여 저장
		MatchCode newMatchCode = new MatchCode();
		newMatchCode.setMatchCode(matchCode);
		matchCodeRepository.save(newMatchCode);

		return matchCode;
	}
}
