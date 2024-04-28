package com.gijun.lol.Service;

import com.gijun.lol.Data.WriteData;
import com.gijun.lol.Entity.LoLBoard;
import com.gijun.lol.Repository.LoLBoardRepository;
import org.springframework.stereotype.Service;

@Service
public class LoLBoardService {

	private final LoLBoardRepository boardRepository;

	public LoLBoardService (LoLBoardRepository boardRepository) {
		this.boardRepository = boardRepository;
	}

	public void saveBoard (WriteData writeData) {
		LoLBoard board = new LoLBoard ();
		board.setTitle (writeData.getTitle ());
		board.setWriter (writeData.getWriter ());
		board.setContent (writeData.getContent ());
		board.setYoutubeUrl (writeData.getYoutubeUrl ());
		board.setTime (writeData.getTime ());
		board.setVisit (writeData.getVisit ());
		boardRepository.save (board);
	}
}
