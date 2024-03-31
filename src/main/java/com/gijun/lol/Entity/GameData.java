package com.gijun.lol.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@ToString
public class GameData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private LocalDate date;
	private String matchCode;
	private String teamColor;
	private String nickname;
	private String summonerName;
	private String champion;
	private String position;
	private int kills;
	private int deaths;
	private int assists;

	// 퍼플 승리 : 0  레드 승리 : 1
	private int winning;

}
