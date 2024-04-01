package com.gijun.lol.Utils;

import com.gijun.lol.Data.Player;

import java.util.*;

public class TeamBalancer {

	public List<List<Player>> findBalance(List<Player> allPlayers) {
		List<Player> teamA = new ArrayList<>();
		List<Player> teamB = new ArrayList<>();
		Map<String, Boolean> positionTeamA = new HashMap<>();
		Map<String, Boolean> positionTeamB = new HashMap<>();

		Map<String, Integer> positionPriority = new HashMap<>();
		positionPriority.put("Top", 1);
		positionPriority.put("Jungle", 2);
		positionPriority.put("Mid", 3);
		positionPriority.put("ADC", 4);
		positionPriority.put("Support", 5);

		allPlayers.sort(Comparator.comparingDouble(Player::getWinningPercentage).reversed());

		for (Player player : allPlayers) {
			String position = player.getPosition();
			double diff = calculateTotalWinningPercentage(teamA) - calculateTotalWinningPercentage(teamB);
			if (diff <= 0) {
				if (!positionTeamA.getOrDefault(position, false)) {
					teamA.add(player);
					positionTeamA.put(position, true);
				} else {
					teamB.add(player);
					positionTeamB.put(position, true);
				}
			} else {
				if (!positionTeamB.getOrDefault(position, false)) {
					teamB.add(player);
					positionTeamB.put(position, true);
				} else {
					teamA.add(player);
					positionTeamA.put(position, true);
				}
			}
		}

		sortTeamByPosition(teamA, positionPriority);
		sortTeamByPosition(teamB, positionPriority);

		List<List<Player>> result = new ArrayList<>();
		result.add(teamA);
		result.add(teamB);
		return result;
	}

	private double calculateTotalWinningPercentage(List<Player> team) {
		return team.stream().mapToDouble(Player::getWinningPercentage).sum();
	}

	private void sortTeamByPosition(List<Player> team, Map<String, Integer> positionPriority) {
		team.sort(Comparator.comparingInt(p -> positionPriority.getOrDefault(p.getPosition(), Integer.MAX_VALUE)));
	}
}
