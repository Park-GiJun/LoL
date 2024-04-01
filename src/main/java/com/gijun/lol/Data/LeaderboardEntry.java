package com.gijun.lol.Data;

public interface LeaderboardEntry {
	String getSummonerName();
	String getNickname();
	String getMostChampion();
	Integer getPlayedGames();
	Double getWinningPercentage();
	Integer getKills();
	Integer getDeaths();
	Integer getAssists();
	Double getKda();
	Integer getUser_count();
}
