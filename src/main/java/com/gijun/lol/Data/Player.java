package com.gijun.lol.Data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Player {
	private String summoner_name;
	private Double winningPercentage;
	private String position;
}
