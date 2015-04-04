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
		
	
		
		
		function skala1(){
			var notes = [['C4',1],['D4',1],['E4',1],['F4',1],['G4',1],['A4',1],['B4',1],['C5',1]];
			
			var player = new simple_player();
			
			player.play(notes);
		}

		function skala2(){
			var notes = [['C4',1],['D4',1],['EB4',1],['F4',1],['G4',1],['AB4',1],['BB4',1],['C5',1]];
			
			var player = new simple_player();
			
			player.play(notes);
		}