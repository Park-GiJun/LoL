package com.gijun.lol.Data;

import com.gijun.lol.Entity.GameData;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PlayerData {
	private List<GameData> list;
	private GameDataProjection gameDataProjection;
}
