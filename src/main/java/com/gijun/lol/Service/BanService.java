package com.gijun.lol.Service;

import com.gijun.lol.Entity.Ban;
import com.gijun.lol.Repository.BanRepository;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
public class BanService {
	private final BanRepository banRepository;

	public BanService(BanRepository banRepository) {
		this.banRepository = banRepository;
	}

	private void saveBans(List<String> bans, String teamColor, String matchCode) {
		for (String ban : bans) {
			Ban banData = new Ban();
			banData.setBanChampion(ban);
			banData.setBanTeamColor(teamColor);
			banData.setMatchCode(matchCode);
			this.banRepository.save(banData);
		}
	}

}