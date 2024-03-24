package com.gijun.lol.util;

import java.util.UUID;

public class MatchCodeGenerator {

	public static String generateMatchCodeWithUUID() {
		return UUID.randomUUID().toString();
	}
}
