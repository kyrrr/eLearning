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
		
	
		
		//C-dur
		function skala1(){
			var notes = [['E3',1],['F#3',1],['G#3',1],['A3',1],['B3',1],['C#4',1],['D#4',1],['E4',1]];
			
			var player = new simple_player();

			player.tempo = 90;
			
			player.play(notes);
		}
		//C-moll
		function skala2(){
			var notes = [['C4',1],['D4',1],['EB4',1],['F4',1],['G4',1],['AB4',1],['BB4',1],['C5',1]];
			
			var player = new simple_player();

			player.tempo = 90;
			
			player.play(notes);
		}
		//A-moll
		function skala3(){
			var notes = [['A3',1],['B3',1],['C4',1],['D4',1],['E4',1],['F4',1],['G4',1],['A4',1]];
			
			var player = new simple_player();

			player.tempo = 90;
			
			player.play(notes);
		}

		//F#-dur
		function skala4(){
			var notes = [['F#3',1],['G#3',1],['A#3',1],['B3',1],['C#4',1],['D#4',1],['F4',1],['F#4',1]];
			
			var player = new simple_player();

			player.tempo = 90;
			
			player.play(notes);
		}

		//quiz2

		function intervall1() {
			var notes = [['C3',1],['C4',1]];
			
			var player = new simple_player();

			player.tempo = 60;
			
			player.play(notes);
		}



			function intervall2() {
			var notes = [['A3',1],['A#3',1]];
			
			var player = new simple_player();

			player.tempo = 60;
			
			player.play(notes);
		}

			function intervall3() {
			var notes = [['C3',1],['E3',1]];
			
			var player = new simple_player();

			player.tempo = 60;
			
			player.play(notes);
		}

			function intervall4() {
			var notes = [['G3',1],['A3',1]];
			
			var player = new simple_player();

			player.tempo = 60;
			
			player.play(notes);
		}

			function intervall5() {
			var notes = [['D4',1],['D#4',1]];
			
			var player = new simple_player();

			player.tempo = 60;
			
			player.play(notes);
		}