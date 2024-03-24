package com.gijun.lol.Utils;

import java.util.UUID;

public class MatchCodeGenerator {

	public static String generateMatchCodeWithUUID() {
		return UUID.randomUUID().toString();
	}
}
