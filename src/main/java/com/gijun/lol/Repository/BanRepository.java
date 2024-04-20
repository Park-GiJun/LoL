package com.gijun.lol.Repository;

import com.gijun.lol.Entity.Ban;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BanRepository extends JpaRepository<Ban,Long> {
}
