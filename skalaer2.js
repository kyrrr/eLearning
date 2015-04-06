function parse_Music_Sheet(notes,time){
			
		}
		function play_single_note(note,time){
			notes = [[note,time]];
			play_notes(notes);
		}
		function play_notes(notes){
			player = new simple_player();
			player.play(notes);
		}
		
		function eksempel2(){
		var notes =[['C3',2],['D3',1],['D3',1],['E3',2],['G3',2],['C4',3],['A3',1],['G3',4],['F3',2],['F3',2],['E3',2],['G3',2],['D3',4],['C3',4]];
		
		var player = new simple_player();
		player.tempo = 240;
		
		player.play(notes);
		
		}
		
		
		function trefirefem(){
		var notes =[['C3',1],['C3',1],['C3',1],['A2',1],['A2',1],['A2',1],['A2',1],['G3',1],['G3',1],['G3',1],['G3',1],['G3',1]];
		
		var player = new simple_player();
		player.tempo = 90;
		
		player.play(notes);
		
		}