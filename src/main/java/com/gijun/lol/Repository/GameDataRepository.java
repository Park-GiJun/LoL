package com.gijun.lol.Repository;

import com.gijun.lol.Data.*;
import com.gijun.lol.Entity.GameData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

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
	ArchiveEntry getGameStatistics ();


	@Query(value = "SELECT " +
			"    (SELECT champion FROM game_data WHERE summoner_name = ?1 GROUP BY champion ORDER BY COUNT(*) DESC LIMIT 1) AS mostChampion, " +
			"    (SELECT COUNT(*) FROM game_data WHERE summoner_name = ?1) AS playedGames, " +
			"    (SELECT ROUND(SUM(CASE WHEN winning = 1 THEN 1 ELSE 0 END) / COUNT(*), 2) FROM game_data WHERE summoner_name = ?1) * 100 AS winningPercentage " +
			"FROM dual " +
			"WHERE EXISTS (SELECT 1 FROM game_data WHERE summoner_name = ?1 GROUP BY summoner_name);", nativeQuery = true)
	GameDataProjection findAggregatedDataBySummonerName (String nickname);


	List<GameData> findBySummonerNameOrderByDateDesc (String summonerName);

	@Query(value = "SELECT " +
			"    (SELECT champion FROM game_data WHERE nickname = ?1 GROUP BY champion ORDER BY COUNT(*) DESC LIMIT 1) AS mostChampion, " +
			"    (SELECT COUNT(*) FROM game_data WHERE nickname = ?1) AS playedGames, " +
			"    (SELECT ROUND(SUM(CASE WHEN winning = 1 THEN 1 ELSE 0 END) / COUNT(*), 2) FROM game_data WHERE nickname = ?1) * 100 AS winningPercentage " +
			"FROM dual " +
			"WHERE EXISTS (SELECT 1 FROM game_data WHERE nickname = ?1 GROUP BY nickname);", nativeQuery = true)
	GameDataProjection findAggregatedDataByNickname (String nickname);

	List<GameData> findByNicknameOrderByDateDesc (String nickname);

	@Query(value = "SELECT DISTINCT g.date FROM game_data g", nativeQuery = true)
	List<String> findDistinctDates ();

	@Query(value = "SELECT summoner_name, position, ROUND(SUM(CASE WHEN winning = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS winningPercentage " +
			"FROM game_data " +
			"WHERE summoner_name = :summoner_name AND position = :position " +
			"GROUP BY summoner_name, position", nativeQuery = true)
	PlayerProjection findWinningPercentage (@Param("summoner_name") String summoner_name, @Param("position") String position);

	@Query(value = "SELECT DISTINCT g.champion FROM game_data g order by g.champion", nativeQuery = true)
	List<String> findDistinctChampions ();

	@Query(value = "SELECT DISTINCT g.nickname, g.summoner_name from game_data g ORDER BY g.nickname", nativeQuery = true)
	List<UserListProjection> userAndSummonerName ();

	@Query(value = "SELECT " +
			"ranked_data.champion AS champion, " +
			"ranked_data.winRate AS winRate, " +
			"ranked_data.played AS played, " +
			"ranked_data.kda AS kda, " +
			"ranked_data.tier AS tier, " +
			"most_player.nickname AS mostPlayedBy, " +
			"ranked_data.playersCount AS playersCount, " +
			"ROUND(COALESCE(ban_data.banRate, 0), 2) AS banRate " +
			"FROM ( SELECT " +
			"   g.champion AS champion, " +
			"   ROUND(SUM(CASE WHEN g.winning = TRUE THEN 1 ELSE 0 END) * 100.0 / COUNT(g.id), 2) AS winRate, " +
			"   COUNT(g.id) AS played, " +
			"   ROUND(SUM(g.kills + g.assists) / SUM(CASE WHEN g.deaths = 0 THEN 1 ELSE g.deaths END), 2) AS kda, " +
			"   COUNT(DISTINCT g.nickname) AS playersCount, " +
			"   CASE " +
			"       WHEN ROW_NUMBER() OVER (ORDER BY ROUND(SUM(CASE WHEN g.winning = TRUE THEN 1 ELSE 0 END) * 100.0 / COUNT(g.id), 2) DESC, COUNT(g.id) DESC) <= (SELECT COUNT(DISTINCT champion) FROM game_data) * 0.2 THEN 'Tier 1' " +
			"       WHEN ROW_NUMBER() OVER (ORDER BY ROUND(SUM(CASE WHEN g.winning = TRUE THEN 1 ELSE 0 END) * 100.0 / COUNT(g.id), 2) DESC, COUNT(g.id) DESC) <= (SELECT COUNT(DISTINCT champion) FROM game_data) * 0.4 THEN 'Tier 2' " +
			"       WHEN ROW_NUMBER() OVER (ORDER BY ROUND(SUM(CASE WHEN g.winning = TRUE THEN 1 ELSE 0 END) * 100.0 / COUNT(g.id), 2) DESC, COUNT(g.id) DESC) <= (SELECT COUNT(DISTINCT champion) FROM game_data) * 0.6 THEN 'Tier 3' " +
			"       WHEN ROW_NUMBER() OVER (ORDER BY ROUND(SUM(CASE WHEN g.winning = TRUE THEN 1 ELSE 0 END) * 100.0 / COUNT(g.id), 2) DESC, COUNT(g.id) DESC) <= (SELECT COUNT(DISTINCT champion) FROM game_data) * 0.8 THEN 'Tier 4' " +
			"       ELSE 'Tier 5' " +
			"   END AS tier " +
			"FROM game_data g " +
			"GROUP BY g.champion " +
			"HAVING COUNT(g.id) >= 3) AS ranked_data " +
			"LEFT JOIN ( SELECT " +
			"   champion, nickname, " +
			"   ROW_NUMBER() OVER (PARTITION BY champion ORDER BY COUNT(id) DESC) AS player_rank " +
			"FROM game_data " +
			"GROUP BY champion, nickname) AS most_player ON most_player.champion = ranked_data.champion AND most_player.player_rank = 1 " +
			"LEFT JOIN ( SELECT " +
			"   ban_champion, " +
			"   COUNT(*) * 100.0 / (SELECT COUNT(DISTINCT match_code) FROM ban) AS banRate " +
			"FROM ban " +
			"GROUP BY ban_champion) AS ban_data ON ban_data.ban_champion = ranked_data.champion " +
			"ORDER BY ranked_data.winRate DESC, ranked_data.played DESC", nativeQuery = true)
	List<ChampionStatisticsProjection> findChampionStatistics();

	@Query(value = "SELECT " +
			" adc.nickname AS adcNickname," +
			" support.nickname AS supportNickname," +
			" COUNT(*) AS duoCount," +
			" SUM(CASE WHEN adc.winning = 1 THEN 1 ELSE 0 END) AS winCount," +
			" ROUND(SUM(CASE WHEN adc.winning = 1 THEN 1 ELSE 0 END) / COUNT(*) * 100, 2) AS winRate" +
			" FROM" +
			"   game_data adc" +
			" JOIN" +
			"   game_data support ON adc.match_code = support.match_code AND adc.team_color = support.team_color" +
			" WHERE" +
			"   adc.position = 'ADC' AND support.position = 'Support'" +
			" GROUP BY " +
			"   adc.nickname, support.nickname" +
			" HAVING" +
			" count(*) > 5" +
			" ORDER BY " +
			"   duoCount DESC, winRate DESC, winCount DESC" +
			" LIMIT 6", nativeQuery = true)
	List<DuoWinRateProjection> getBotDuoWinRateBest6();

	@Query(value = "SELECT " +
			" mid.nickname AS midNickname," +
			" jungle.nickname AS jungleNickname," +
			" top.nickname AS topNickname," +
			" COUNT(*) AS trioCount," +
			" SUM(CASE WHEN mid.winning = 1 THEN 1 ELSE 0 END) AS winCount," +
			" ROUND(SUM(CASE WHEN mid.winning = 1 THEN 1 ELSE 0 END) / COUNT(*) * 100, 2) AS winRate" +
			" FROM" +
			"   game_data mid" +
			" JOIN" +
			"   game_data jungle ON mid.match_code = jungle.match_code AND mid.team_color = jungle.team_color" +
			" JOIN" +
			"   game_data top ON mid.match_code = top.match_code AND mid.team_color = top.team_color" +
			" WHERE" +
			"   mid.position = 'Mid' AND jungle.position = 'Jungle' AND top.position = 'Top'" +
			" GROUP BY " +
			"   mid.nickname, jungle.nickname, top.nickname" +
			" HAVING" +
			" COUNT(*) > 5" +
			" ORDER BY " +
			"   winRate DESC, trioCount DESC, winCount DESC" +
			" LIMIT 6", nativeQuery = true)
	List<TrioStatisticsProjection> getTrioWinRate();

}


