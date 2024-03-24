package com.gijun.lol.Service;

import com.gijun.lol.Data.LeaderboardEntry;
import com.gijun.lol.Data.MatchData;
import com.gijun.lol.Data.PlayerInfo;
import com.gijun.lol.Entity.GameData;
import com.gijun.lol.Entity.MatchCode;
import com.gijun.lol.Repository.GameDataRepository;
import com.gijun.lol.Repository.MatchCodeRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class GameDataService {

	private final GameDataRepository gameDataRepository;
	private final MatchCodeRepository matchCodeRepository;

	public GameDataService(GameDataRepository gameDataRepository, MatchCodeRepository matchCodeRepository) {
		this.gameDataRepository = gameDataRepository;
		this.matchCodeRepository = matchCodeRepository;
	}

	public void saveMatchData(MatchData matchData, String matchCode) {
		String currentDate = matchData.getDate();

		List<PlayerInfo> teams = matchData.getTeams();
		for (PlayerInfo playerInfo : teams) {
			GameData gameData = new GameData();

			gameData.setDate(LocalDate.parse(currentDate));
			gameData.setMatchCode(matchCode);
			gameData.setTeamColor(playerInfo.getTeamColor());
			gameData.setNickname(playerInfo.getNickname());
			gameData.setSummonerName(playerInfo.getSummonerName());
			gameData.setChampion(playerInfo.getChampion());
			gameData.setPosition(playerInfo.getPosition());
			gameData.setKills(playerInfo.getKills());
			gameData.setDeaths(playerInfo.getDeaths());
			gameData.setAssists(playerInfo.getAssists());
			gameData.setWinning (playerInfo.getWinning ());

			gameDataRepository.save(gameData);
		}
	}


	public List<GameData> recentGame(){
		MatchCode latestMatchCode = matchCodeRepository.findTopByOrderByIdDesc();
		if (latestMatchCode != null) {
			return gameDataRepository.findByMatchCode(latestMatchCode.getMatchCode());
		}
		return List.of();
	}

	public List<LeaderboardEntry> getLeaderBoard(){
		List<LeaderboardEntry> lists = gameDataRepository.findLeaderboardEntries ();
		for(LeaderboardEntry list : lists){
			System.out.println (list);
		}
		return gameDataRepository.findLeaderboardEntries ();
	}
}
