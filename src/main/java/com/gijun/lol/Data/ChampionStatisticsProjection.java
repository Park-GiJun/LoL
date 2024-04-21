package com.gijun.lol.Data;

public interface ChampionStatisticsProjection {
	String getChampion();
	Double getWinRate();
	Integer getPlayed();
	Double getKda();
	String getTier();
	String getMostPlayedBy();
	Integer getPlayersCount();
}

