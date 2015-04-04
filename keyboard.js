(function() {
  var KeyboardSimulator = (function () {
    function KeyboardSimulator() {
    }
    
    KeyboardSimulator.prototype.keyPressed = function (key) {
        // Add some logic to check if the particular key is registered.
        console.log('The musician pressed the "' + key + '" key.');
    };
    
    return KeyboardSimulator;
  })();
  
  $(document).ready(function() {
    var simulator = Object.create(KeyboardSimulator.prototype);
    var intrumentSimulatorContext = $('#instrumentSimulator');
    
    intrumentSimulatorContext.on('click', '.key', function(e) {
      var key = $(this).val();
      
      simulator.keyPressed(key);
    });
    
    $(document.body).on('keydown', function(e) {
      var key = String.fromCharCode(e.keyCode).toUpperCase();
  
      $('#pg' + key).trigger('click');
      
    })
  });
})();