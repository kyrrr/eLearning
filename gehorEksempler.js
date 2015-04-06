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
			var notes = [['C3',1],['D3',1],['E3',1],['F3',1],['G3',1],['A3',1],['B3',1],['C4',1]];
			
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
		//F-dur
		function skala3(){
			var notes = [['F3',1],['G3',1],['A3',1],['BB3',1],['C4',1],['D4',1],['E4',1],['F4',1]];
			
			var player = new simple_player();

			player.tempo = 90;
			
			player.play(notes);
		}


		//Intervaller
		
		function L2(){
			var notes = [['C3', 2],['C#3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function S2(){
			var notes = [['C3', 2],['D3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function L3(){
			var notes = [['C3', 2],['EB3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function S3(){
			var notes = [['C3', 2],['E3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function R4(){
			var notes = [['C3', 2],['F3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function R5(){
			var notes = [['C3', 2],['G3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function L6(){
			var notes = [['C3', 2],['AB3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function S6(){
			var notes = [['C3', 2],['A3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function L7(){
			var notes = [['C3', 2],['BB3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function S7(){
			var notes = [['C3', 2],['B3',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}

		function R8(){
			var notes = [['C3', 2],['C4',2]];

			var player = new simple_player();

			player.tempo = 90;

			player.play(notes);
		}



