package com.gijun.lol.Service;

import com.gijun.lol.Data.*;
import com.gijun.lol.Entity.Ban;
import com.gijun.lol.Entity.GameData;
import com.gijun.lol.Entity.MatchCode;
import com.gijun.lol.Repository.BanRepository;
import com.gijun.lol.Repository.GameDataRepository;
import com.gijun.lol.Repository.MatchCodeRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
@Log4j2
public class GameDataService {

	private final GameDataRepository gameDataRepository;
	private final MatchCodeRepository matchCodeRepository;
	private final BanRepository banRepository;

	public GameDataService(GameDataRepository gameDataRepository, MatchCodeRepository matchCodeRepository, BanRepository banRepository) {
		this.gameDataRepository = gameDataRepository;
		this.matchCodeRepository = matchCodeRepository;
		this.banRepository = banRepository;
	}

	public void saveMatchData(MatchData matchData, String matchCode) {
		String currentDate = matchData.getDate();
		List<PlayerInfo> teams = matchData.getTeams();

		for (PlayerInfo playerInfo : teams) {
			this.savePlayerInfo(playerInfo, matchCode, currentDate);
		}

		this.saveBans(matchData.getBans().get("purple"), "Purple", matchCode);
		this.saveBans(matchData.getBans().get("red"), "Red", matchCode);
	}

	public void savePlayerInfo(PlayerInfo playerInfo, String matchCode, String date) {
		GameData gameData = new GameData();
		gameData.setDate(LocalDate.parse(date));
		gameData.setMatchCode(matchCode);
		gameData.setTeamColor(playerInfo.getTeamColor());
		gameData.setNickname(playerInfo.getNickname());
		gameData.setSummonerName(playerInfo.getSummonerName());
		System.out.println (playerInfo.getSummonerName () + " : " + playerInfo.getChampion ());
		gameData.setChampion(playerInfo.getChampion());
		gameData.setPosition(playerInfo.getPosition());
		gameData.setKills(playerInfo.getKills());
		gameData.setDeaths(playerInfo.getDeaths());
		gameData.setAssists(playerInfo.getAssists());
		gameData.setWinning(playerInfo.getWinning());
		this.gameDataRepository.save(gameData);
	}

	public void saveBans(List<String> bans, String teamColor, String matchCode) {
		for (String ban : bans) {
			Ban banData = new Ban();
			banData.setBanChampion(ban);
			banData.setBanTeamColor(teamColor);
			banData.setMatchCode(matchCode);
			this.banRepository.save(banData);
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
			gameDataForMatch.sort (Comparator.comparing (GameData::getDate).reversed ());
			groupedGameData.add(gameDataForMatch);
		}

		return groupedGameData;
	}


	public PlayerData getPlayerData(String type, String keyword) {
		PlayerData playerData = new PlayerData();
		log.info ("검색어 {}", keyword);

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

	public List<String> searchChampions() {
		return gameDataRepository.findDistinctChampions();
	}

	public List<UserListProjection> searchUserList(){
		return gameDataRepository.userAndSummonerName ();
	}

	public List<ChampionStatisticsProjection> searchTierList(){
		return gameDataRepository.findChampionStatistics();
	}

	public List<DuoWinRateProjection> searchBotDuoWinRateList(){
		return gameDataRepository.getBotDuoWinRateBest6 ();
	}

	public List<TrioStatisticsProjection> searchTrioWinRateList(){
		return gameDataRepository.getTrioWinRate();
	}

}
