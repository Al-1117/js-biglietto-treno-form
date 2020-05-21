// Raccolta dati

var name = document.getElementById('form_name');
var km = parseInt(document.getElementById('form_km'));
var age = document.getElementById('form_age');


// Altre variabili

var ageValue;
var kmValue;

var passengerName = document.getElementById('passenger_name');

var buttonGenera = document.getElementById('ms_btn_genera');

var buttonAnnulla = document.getElementById('ms_btn_annulla');

// Evento cliccando Tasto Genera
buttonGenera.addEventListener('click',
  function() {
    // Nome passeggero sul biglietto
    passengerName.innerHTML = name.value;
    // Dati inseriti dall'utente
    ageValue = age.value;
    kmValue = km.value;
  }

);

// Evento cliccando tasto annulla

buttonAnnulla.addEventListener('click',
  function() {
    // Reset dei dati
    name.value = '';
    passengerName.innerHTML = '';
    kmValue.innerHTML = '';

  }
)


// Prezzo

var ticketPrice = km * 0.21;

if (age == 'minorenne') {
  ticketPrice = ticketPrice - (ticketPrice * 20 / 100);

} else if (age == 'over'){
  ticketPrice = ticketPrice - (ticketPrice * 40 / 100);

}

console.log(ticketPrice);
