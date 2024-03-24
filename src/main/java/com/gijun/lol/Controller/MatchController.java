package com.gijun.lol.Controller;

import com.gijun.lol.Data.LeaderboardEntry;
import com.gijun.lol.Data.MatchData;
import com.gijun.lol.Entity.GameData;
import com.gijun.lol.Service.GameDataService;
import com.gijun.lol.Service.MatchCodeService;
import com.google.gson.Gson;
import lombok.extern.log4j.Log4j2;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@Log4j2
public class MatchController {

	private final GameDataService gameDataService;
	private final MatchCodeService matchCodeService;

	public MatchController(GameDataService gameDataService, MatchCodeService matchCodeService) {
		this.gameDataService = gameDataService;
		this.matchCodeService = matchCodeService;
	}

	@PostMapping("/saveMatches")
	public ResponseEntity<String> saveMatchInfo(@RequestBody MatchData matchData) {
		Gson gson = new Gson();
		String json = gson.toJson(matchData);
		System.out.println(json);

		String matchCode = matchCodeService.saveMatchCode ();

		gameDataService.saveMatchData(matchData, matchCode);

		return new ResponseEntity<>("Match data saved successfully", HttpStatus.CREATED);
	}

	@GetMapping("/recentMatch")
	public ResponseEntity<List<GameData>> recentMatch() {
		List<GameData> list = gameDataService.recentGame();
		System.out.println (list);
		return ResponseEntity.ok(list);
	}

	@GetMapping("/loadLeaderboard")
	public ResponseEntity<List<LeaderboardEntry>> getLeaderBoard(){
		return ResponseEntity.ok (gameDataService.getLeaderBoard ());
	}
}
