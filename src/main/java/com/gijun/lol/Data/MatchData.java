package com.gijun.lol.Data;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MatchData {
	private String date;
	private List<PlayerInfo> teams;
}
