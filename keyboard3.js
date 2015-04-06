(function() {
  var KeyboardSimulator = (function () {
    function KeyboardSimulator() {
    }
    
    KeyboardSimulator.prototype.keyPressed = function (key) {
        // Add some logic to check if the particular key is registered.
        console.log('The musician pressed the "' + key + '" key.');
        
    
    };
    
    KeyboardSimulator.prototype.km = {
  		'A': 'C',
          'W': 'Ciss',
          'S': 'D',
          'E': 'Eb',
          'D': 'E',
          'F': 'F',
          'T': 'Fiss',
          'G': 'G',
          'Y': 'Ab',
          'H': 'A',
          'U': 'Hb',
          'J': 'H',
          'K': 'C2'
          };
    KeyboardSimulator.prototype.k2img = {
  		'A': 'c-pressed.png',
          'W': 'ciss-pressed.png',
          'S': 'd-pressed.png',
          'E': 'eb-pressed.png',
          'D': 'e-pressed.png',
          'F': 'f-pressed.png',
          'T': 'fiss-pressed.png',
          'G': 'g-pressed.png',
          'Y': 'ab-pressed.png',
          'H': 'a-pressed.png',
          'U': 'hb-pressed.png',
          'J': 'h-pressed.png',
          'K': 'c2-pressed.png'
          };
          
        /*  KeyboardSimulator.prototype.k2img2 = {
  		'A': './images/notequiz1Bilde1.png',
  		'W': './images/notequiz1Bilde2.png'
          
          };*/
          
    return KeyboardSimulator;
  })
  
  ();
  
  $(document).ready(function() {
    var simulator = Object.create(KeyboardSimulator.prototype);
    var intrumentSimulatorContext = $('#instrumentSimulator');
    
    intrumentSimulatorContext.on('click', '.key', function(e) {
      var key = $(this).val();
      
      e.preventDefault();
      simulator.keyPressed(key);
    });
    
    $(document.body).on('keydown', function(e) {
      var key = String.fromCharCode(e.keyCode).toUpperCase();
      
  		
  		document.getElementById('p'+simulator.km[key]).src = simulator.k2img[key];
  		//document.getElementById('n'+simulator.km[key]).src = simulator.k2img2[key];
  		//$('#p'+simulator.km[key]).src = simulator.k2img[key];

  
      if (key in simulator.km) {
        $('#pg' + simulator.km[key]).trigger('click');
      }
     
    })
    
      $(document.body).on('keyup', function(e) {
      var key = String.fromCharCode(e.keyCode).toUpperCase();
        
       
  		document.getElementById('p'+simulator.km[key]).src = "";
  		//document.getElementById('n'+simulator.km[key]).src = "";

      
    })
  });
})();