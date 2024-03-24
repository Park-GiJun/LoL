package com.gijun.lol.Repository;

import com.gijun.lol.Data.LeaderboardEntry;
import com.gijun.lol.Entity.GameData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GameDataRepository extends JpaRepository<GameData, Long> {

	List<GameData> findByMatchCode(String matchCode);

	@Query(value = "SELECT g.summoner_name AS summonerName, g.nickname AS nickname, " +
			"(SELECT champion FROM game_data gd WHERE gd.summoner_name = g.summoner_name GROUP BY gd.champion ORDER BY COUNT(*) DESC LIMIT 1) AS mostChampion, " +
			"(SELECT COUNT(*) FROM game_data gd WHERE gd.summoner_name = g.summoner_name) AS playedGames, " +
			"ROUND(SUM(CASE WHEN g.winning = 1 THEN 1 ELSE 0 END) / COUNT(*) * 100, 2) AS winningPercentage " +
			"FROM game_data g GROUP BY g.summoner_name, g.nickname " +
			"ORDER BY winningPercentage DESC, playedGames DESC", nativeQuery = true)
	List<LeaderboardEntry> findLeaderboardEntries();



}
