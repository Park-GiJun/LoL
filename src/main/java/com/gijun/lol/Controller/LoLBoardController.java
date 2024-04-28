package com.gijun.lol.Controller;

import com.gijun.lol.Data.WriteData;
import com.gijun.lol.Service.LoLBoardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/board")
public class LoLBoardController {

	private final LoLBoardService boardService;

	public LoLBoardController (LoLBoardService boardService) {
		this.boardService = boardService;
	}

	@GetMapping("/write")
	public String writeBoard(@RequestBody WriteData writeData){
		boardService.saveBoard (writeData);
		return "저장 성공";
	}

//	@GetMapping("/getBoard")
//	public ResponseEntity<Board> getBoard(){
//		return ResponseEntity.ok ();
//	}
}
