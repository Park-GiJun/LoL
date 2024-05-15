package com.gijun.lol.Data;

public interface DuoWinRateProjection {
	String getAdcNickname();
	String getSupportNickname();
	int getDuoCount();
	int getWinCount();
	double getWinRate();
}
