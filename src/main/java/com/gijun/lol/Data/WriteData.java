package com.gijun.lol.Data;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class WriteData {
	private String title;
	private String content;
	private String writer;
	private String youtubeUrl;
	private String category;
	private LocalDateTime time;
	private int visit;
}
