package com.gijun.lol.Service;

import com.gijun.lol.Data.*;
import com.gijun.lol.Entity.GameData;
import com.gijun.lol.Entity.MatchCode;
import com.gijun.lol.Repository.GameDataRepository;
import com.gijun.lol.Repository.MatchCodeRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@Log4j2
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

	public List<GameData> targetMatch(String matchCode){
		return gameDataRepository.findByMatchCode (matchCode);
	}

	public List<LeaderboardEntry> getLeaderBoard(){
		List<LeaderboardEntry> lists = gameDataRepository.findLeaderboardEntries ();
		return gameDataRepository.findLeaderboardEntries ();
	}

	public List<List<GameData>> getAllMatchDataGroupedByMatchCode() {
		List<MatchCode> allMatchCodes = matchCodeRepository.findAll();

		List<List<GameData>> groupedGameData = new ArrayList<> ();
		for (MatchCode matchCode : allMatchCodes) {
			List<GameData> gameDataForMatch = gameDataRepository.findByMatchCode(matchCode.getMatchCode());
			groupedGameData.add(gameDataForMatch);
		}

		return groupedGameData;
	}

	public PlayerData getPlayerData(String type, String keyword) {
		PlayerData playerData = new PlayerData();

		if (type.equals ("nickname")) {
			List<GameData> matchData = gameDataRepository.findByNicknameOrderByDateDesc(keyword);
			playerData.setList(matchData);

			GameDataProjection aggregatedData = gameDataRepository.findAggregatedDataByNickname(keyword);
			playerData.setGameDataProjection(aggregatedData);
		} else {
			List<GameData> matchData = gameDataRepository.findBySummonerNameOrderByDateDesc (keyword);
			playerData.setList(matchData);

			GameDataProjection aggregatedData = gameDataRepository.findAggregatedDataBySummonerName (keyword);
			playerData.setGameDataProjection(aggregatedData);
		}
		return playerData;
	}

	public List<String> getActiveDate(){
		return gameDataRepository.findDistinctDates ();
	}

	public ArchiveEntry queryArchive(){
		return gameDataRepository.getGameStatistics ();
	}

	public PlayerProjection searchWinningPercentage (getPlayers getPlayers) {
		String summoner_name = getPlayers.getSummoner_name ();
		String position = getPlayers.getPosition ();

		return gameDataRepository.findWinningPercentage (summoner_name, position);
	}

}
