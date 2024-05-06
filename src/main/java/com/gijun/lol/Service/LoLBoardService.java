package com.gijun.lol.Service;

import com.gijun.lol.Data.LoLBoardProjection;
import com.gijun.lol.Data.WriteData;
import com.gijun.lol.Entity.LoLBoard;
import com.gijun.lol.Repository.LoLBoardRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
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

	public List<LoLBoardProjection> loadBoard(){
		List<LoLBoardProjection> boards = boardRepository.getBoardList();
		for (LoLBoardProjection lbp : boards) {
			log.info (lbp);
		}
		return boards;
	}
}
