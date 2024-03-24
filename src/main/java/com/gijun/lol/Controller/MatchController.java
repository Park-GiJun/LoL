package com.gijun.lol.Controller;

import com.gijun.lol.Data.MatchData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/matches")
public class MatchController {

	// 매치 정보를 저장하는 메서드 예시
	@PostMapping
	public ResponseEntity<String> saveMatchInfo(@RequestBody MatchData matchData) {
		// 여기서 매치 데이터 처리 로직 구현 (예: 데이터베이스에 저장)
		System.out.println(matchData);

		// 임시로 저장 성공 응답 반환
		return new ResponseEntity<>("Match data saved successfully", HttpStatus.CREATED);
	}
}
