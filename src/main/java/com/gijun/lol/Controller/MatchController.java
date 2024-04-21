package com.gijun.lol.Controller;

import com.gijun.lol.Data.*;
import com.gijun.lol.Entity.GameData;
import com.gijun.lol.Service.GameDataService;
import com.gijun.lol.Service.MatchCodeService;
import com.gijun.lol.Utils.TeamBalancer;
import com.google.gson.Gson;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
		gson.toJson (matchData);
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
	public ResponseEntity<List<GameData>> getTargetMatch (@RequestParam("matchCode") String matchCode) {
		List<GameData> list = gameDataService.targetMatch (matchCode);
		System.out.println (list.toString ());

		return ResponseEntity.ok (gameDataService.targetMatch (matchCode));
	}

	@GetMapping("/activeDate")
	public ResponseEntity<List<String>> getActiveDate () {
		return ResponseEntity.ok (gameDataService.getActiveDate ());
	}

	@GetMapping("/getArchive")
	public ResponseEntity<ArchiveEntry> getArchive () {
		ArchiveEntry archiveEntry = gameDataService.queryArchive ();
		return ResponseEntity.ok (archiveEntry);
	}

	@PostMapping("/AutoMatchMaking")
	public ResponseEntity<List<List<Player>>> doAutoMatchMaking (@RequestBody List<getPlayers> players) {
		List<Player> allPlayers = new ArrayList<> ();

		for (getPlayers player : players) {
			PlayerProjection playerProjection = gameDataService.searchWinningPercentage (player);
			Player findPlayer = new Player (playerProjection.getSummoner_name (), playerProjection.getWinningPercentage (), playerProjection.getPosition ());
			allPlayers.add (findPlayer);
		}

		TeamBalancer teamBalancer = new TeamBalancer ();

		return ResponseEntity.ok (teamBalancer.findBalance (allPlayers));
	}

	@GetMapping("/champions")
	public ResponseEntity<List<String>> getChampionList () {
		return ResponseEntity.ok (gameDataService.searchChampions ());
	}

	@GetMapping("/getUser")
	public ResponseEntity<List<UserListProjection>> getUserList () {
		return ResponseEntity.ok (gameDataService.searchUserList ());
	}

	@GetMapping("/tierList")
	public ResponseEntity<List<ChampionStatisticsProjection>> getTierList() {
		return ResponseEntity.ok (gameDataService.searchTierList());
	}
}
