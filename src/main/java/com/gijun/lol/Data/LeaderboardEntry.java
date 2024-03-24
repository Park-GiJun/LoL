package com.gijun.lol.Data;

public interface LeaderboardEntry {
	String getSummonerName();
	String getNickname();
	String getMostChampion();
	Integer getPlayedGames();
	Double getWinningPercentage();
}
