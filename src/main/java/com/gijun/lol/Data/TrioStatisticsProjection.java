package com.gijun.lol.Data;

public interface TrioStatisticsProjection {

	String getMidNickname();
	String getJungleNickname();
	String getTopNickname();
	int getTrioCount();
	int getWinCount();
	double getWinRate();
}
