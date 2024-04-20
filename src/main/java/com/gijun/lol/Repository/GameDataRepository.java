package com.gijun.lol.Repository;

import com.gijun.lol.Data.*;
import com.gijun.lol.Entity.GameData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface GameDataRepository extends JpaRepository<GameData, Long> {

	List<GameData> findByMatchCode (String matchCode);

	@Query(value = "SELECT g.summoner_name AS summonerName, g.nickname AS nickname, "
			+ "(SELECT champion FROM game_data gd WHERE gd.summoner_name = g.summoner_name GROUP BY gd.champion ORDER BY COUNT(*) DESC LIMIT 1) AS mostChampion, "
			+ "(SELECT COUNT(*) FROM game_data gd WHERE gd.summoner_name = g.summoner_name) AS playedGames, "
			+ "ROUND(SUM(CASE WHEN g.winning = 1 THEN 1 ELSE 0 END) / COUNT(*) * 100, 2) AS winningPercentage, "
			+ "g.kills, g.assists, g.deaths, " + "ROUND((SUM(g.kills) + SUM(g.assists)) / GREATEST(SUM(g.deaths), 1), 2) AS kda "
			+ "FROM game_data g GROUP BY g.summoner_name, g.nickname " + "ORDER BY winningPercentage DESC, playedGames DESC", nativeQuery = true)
	List<LeaderboardEntry> findLeaderboardEntries ();

	@Query(value = "SELECT COUNT(g.id)/10 AS totalGamesPlayed, " +
			"COUNT(DISTINCT g.date) AS totalDaysPlayed, " +
			"SUM(g.kills) AS totalKills, " +
			"(SELECT gg.champion FROM game_data gg GROUP BY gg.champion HAVING COUNT(gg.champion) >=3 ORDER BY COUNT(gg.champion) DESC, SUM(gg.kills) DESC LIMIT 1) AS mostPlayedChampion, " +
			"(SELECT gg.champion FROM game_data gg GROUP BY gg.champion HAVING COUNT(gg.champion) >=3 ORDER BY (SUM(gg.kills) / COUNT(gg.champion)) DESC LIMIT 1) AS mostKillsChampion, " +
			"(SELECT gg.champion FROM game_data gg GROUP BY gg.champion HAVING COUNT(gg.champion) >=3 ORDER BY (SUM(gg.deaths) / COUNT(gg.champion)) DESC LIMIT 1) AS mostDeathsChampion, " +
			"(SELECT gg.nickname FROM game_data gg GROUP BY gg.summoner_name ORDER BY COUNT(DISTINCT gg.champion) DESC LIMIT 1) AS mostDifferentChampion," +
			"(SELECT gg.champion FROM game_data gg GROUP BY gg.champion HAVING COUNT(gg.champion) >=3 ORDER BY ((SUM(gg.kills) + SUM(gg.assists)) / NULLIF(SUM(gg.deaths), 0)) DESC LIMIT 1) AS bestKDAChampion" +
			" FROM game_data g ", nativeQuery = true)
	ArchiveEntry getGameStatistics();




	@Query(value = "SELECT " +
			"    (SELECT champion FROM game_data WHERE summoner_name = ?1 GROUP BY champion ORDER BY COUNT(*) DESC LIMIT 1) AS mostChampion, " +
			"    (SELECT COUNT(*) FROM game_data WHERE summoner_name = ?1) AS playedGames, " +
			"    (SELECT ROUND(SUM(CASE WHEN winning = 1 THEN 1 ELSE 0 END) / COUNT(*), 2) FROM game_data WHERE summoner_name = ?1) * 100 AS winningPercentage " +
			"FROM dual " +
			"WHERE EXISTS (SELECT 1 FROM game_data WHERE summoner_name = ?1 GROUP BY summoner_name);", nativeQuery = true)
	GameDataProjection findAggregatedDataBySummonerName(String nickname);


	List<GameData> findBySummonerNameOrderByDateDesc (String summonerName);

	@Query(value = "SELECT " +
			"    (SELECT champion FROM game_data WHERE nickname = ?1 GROUP BY champion ORDER BY COUNT(*) DESC LIMIT 1) AS mostChampion, " +
			"    (SELECT COUNT(*) FROM game_data WHERE nickname = ?1) AS playedGames, " +
			"    (SELECT ROUND(SUM(CASE WHEN winning = 1 THEN 1 ELSE 0 END) / COUNT(*), 2) FROM game_data WHERE nickname = ?1) * 100 AS winningPercentage " +
			"FROM dual " +
			"WHERE EXISTS (SELECT 1 FROM game_data WHERE nickname = ?1 GROUP BY nickname);", nativeQuery = true)
	GameDataProjection findAggregatedDataByNickname(String nickname);

	List<GameData> findByNicknameOrderByDateDesc (String nickname);

	@Query(value ="SELECT DISTINCT g.date FROM game_data g", nativeQuery = true)
	List<String> findDistinctDates();

	@Query(value = "SELECT summoner_name, position, ROUND(SUM(CASE WHEN winning = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS winningPercentage " +
			"FROM game_data " +
			"WHERE summoner_name = :summoner_name AND position = :position " +
			"GROUP BY summoner_name, position", nativeQuery = true)
	PlayerProjection findWinningPercentage(@Param("summoner_name") String summoner_name, @Param("position") String position);

	@Query(value = "SELECT DISTINCT g.champion FROM game_data g order by g.champion" ,nativeQuery = true)
	List<String> findDistinctChampions();

	@Query(value = "SELECT DISTINCT g.nickname, g.summoner_name from game_data g ORDER BY g.nickname", nativeQuery = true)
	List<UserListProjection> userAndSummonerName();
}


