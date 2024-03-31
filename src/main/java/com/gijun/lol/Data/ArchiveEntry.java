package com.gijun.lol.Data;

public interface ArchiveEntry {
	Integer getTotalGamesPlayed();
	Integer getTotalDaysPlayed();
	Integer getTotalKills();
	String getMostPlayedChampion();
	String getMostKillsChampion();
	String getMostDeathsChampion();
	String getMostDifferentChampion();
	String getBestKDAChampion();
}
