package com.gijun.lol.Data;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PlayerInfo {
	private String teamColor;
	private String nickname;
	private String summonerName;
	private String champion;
	private String position;
	private int kills;
	private int deaths;
	private int assists;
	private int winning;
}