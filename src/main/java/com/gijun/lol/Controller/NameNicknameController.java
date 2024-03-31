package com.gijun.lol.Controller;

import com.gijun.lol.Entity.NameNickname;
import com.gijun.lol.Service.NameNicknameService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class NameNicknameController {

	private final NameNicknameService nameNicknameService;

	public NameNicknameController (NameNicknameService nameNicknameService) {
		this.nameNicknameService = nameNicknameService;
	}

	@PostMapping("/submitName")
	public String submitNameNickname (@RequestBody NameNickname nameNickname) {
		return nameNicknameService.saveNameNickname (nameNickname.getNickname (), nameNickname.getName ());
	}

	@GetMapping("/autoComplete")
	public ResponseEntity<NameNickname> autoComplete(@RequestParam("field") String field, @RequestParam("value") String value) {
		NameNickname result = nameNicknameService.findByNameOrNickname(field, value);
		if (result != null) {
			return ResponseEntity.ok(result);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
