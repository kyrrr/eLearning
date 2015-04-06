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
		
		function intervall1(){
			var notes = [['C4',2],['E4',2]];
			
			var player = new simple_player();
			
			player.play(notes);
		}
		
		
		function note1(){
			var notes = [['A4',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		function note2(){
			var notes = [['C4',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		function note3(){
			var notes = [['E4',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		
		
		function eksempel1(){
		var notes =[['0',1],['G3',1],['A3',1],['B3',1],['C4',1],['D4',2],['D4',2],['E4',1],['E4',1],['E4',1],['E4',1],['D4',4]];
		
		var player = new simple_player();
		player.tempo = 100;
		
		player.play(notes);
		
		}
		
		function trefirefem(){
		var notes =[['0',1],['C3',1],['C3',1],['C3',1],['A2',1],['A2',1],['A2',1],['A2',1],['G3',1],['G3',1],['G3',1],['G3',1],['G3',1]];
		
		var player = new simple_player();
		player.tempo = 90;
		
		player.play(notes);
		
		}
		
		function cgangertre(){
		var notes = [['0',1],['C3',2],['C4',2],['C5',2]];
		
		var player = new simple_player();
		player.tempo = 90;
		
		player.play(notes);
		
		
		}
		
		
		
	
	//Playground
	
		function pgC(){
			var notes = [['C3',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		
		function pgCSharp(){
			var notes = [['C#4',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		
		function pgD(){
			var notes = [['D3',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		function pgE(){
			var notes = [['E3',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		function pgF(){
			var notes = [['F3',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		function pgG(){
			var notes = [['G3',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		function pgA(){
			var notes = [['A3',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		function pgH(){
			var notes = [['B3',4]]; 
			
			var player = new simple_player();
			//player.tempo = 270;

			player.play(notes);
		}
		
		
		
		

		
		
		


		
	
		
		
		function demo_func3(){
			var notes = eval(document.getElementById("sheet_input").value );
			play_notes(notes);
		}