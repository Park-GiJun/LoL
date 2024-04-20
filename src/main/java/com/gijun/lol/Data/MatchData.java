package com.gijun.lol.Data;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
public class MatchData {
	private String date;
	private List<PlayerInfo> teams;
	private Map<String, List<String>> bans;
}

