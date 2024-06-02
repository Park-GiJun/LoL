package com.gijun.lol.Controller;

import com.gijun.lol.Data.LoLBoardProjection;
import com.gijun.lol.Data.WriteData;
import com.gijun.lol.Service.LoLBoardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/board")
public class LoLBoardController {

	private final LoLBoardService boardService;

	public LoLBoardController (LoLBoardService boardService) {
		this.boardService = boardService;
	}

	@PostMapping("/write")
	public String writeBoard(@RequestBody WriteData writeData){
		boardService.saveBoard (writeData);
		return "저장 성공";
	}

	@GetMapping("/getBoard")
	public ResponseEntity<List<LoLBoardProjection>> getBoard(){
		return ResponseEntity.ok (boardService.loadBoard ());
	}

}
