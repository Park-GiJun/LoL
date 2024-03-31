package com.gijun.lol.Controller;

import com.gijun.lol.Data.ArchiveEntry;
import com.gijun.lol.Data.LeaderboardEntry;
import com.gijun.lol.Data.MatchData;
import com.gijun.lol.Data.PlayerData;
import com.gijun.lol.Entity.GameData;
import com.gijun.lol.Service.GameDataService;
import com.gijun.lol.Service.MatchCodeService;
import com.google.gson.Gson;
import lombok.extern.log4j.Log4j2;
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

	public MatchController (GameDataService gameDataService, MatchCodeService matchCodeService) {
		this.gameDataService = gameDataService;
		this.matchCodeService = matchCodeService;
	}

	@PostMapping("/saveMatches")
	public ResponseEntity<String> saveMatchInfo (@RequestBody MatchData matchData) {
		Gson gson = new Gson ();
		String json = gson.toJson (matchData);

		String matchCode = matchCodeService.saveMatchCode ();

		gameDataService.saveMatchData (matchData, matchCode);

		return new ResponseEntity<> ("Match data saved successfully", HttpStatus.CREATED);
	}

	@GetMapping("/recentMatch")
	public ResponseEntity<List<GameData>> recentMatch () {
		List<GameData> list = gameDataService.recentGame ();
		return ResponseEntity.ok (list);
	}

	@GetMapping("/loadLeaderboard")
	public ResponseEntity<List<LeaderboardEntry>> getLeaderBoard () {
		return ResponseEntity.ok (gameDataService.getLeaderBoard ());
	}

	@GetMapping("/matches")
	public ResponseEntity<List<List<GameData>>> getMatches () {
		return ResponseEntity.ok (gameDataService.getAllMatchDataGroupedByMatchCode ());
	}

	@GetMapping("/search")
	public ResponseEntity<PlayerData> search (@RequestParam("value") String searchType, @RequestParam("keyword") String keyword) {
		PlayerData playerData = gameDataService.getPlayerData (searchType, keyword);
		return ResponseEntity.ok (playerData);
	}

	@GetMapping("/targetMatch")
	public ResponseEntity<List<GameData>> getTargetMatch(@RequestParam("matchCode") String matchCode){
		List<GameData>list = gameDataService.targetMatch (matchCode);
		System.out.println (list.toString ());

		return ResponseEntity.ok (gameDataService.targetMatch (matchCode));
	}

	@GetMapping("/activeDate")
	public ResponseEntity<List<String>> getActiveDate(){
		return ResponseEntity.ok (gameDataService.getActiveDate ());
	}

	@GetMapping("/getArchive")
	public ResponseEntity<ArchiveEntry> getArchive() {
		ArchiveEntry archiveEntry = gameDataService.queryArchive ();
		return ResponseEntity.ok(archiveEntry);
	}
}
