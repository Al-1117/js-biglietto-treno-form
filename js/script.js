// Raccolta dati

var nameInput = document.getElementById('form_name');
var kmInput = document.getElementById('form_km');
var ageInput = document.getElementById('form_age');


// Altre variabili

var buttonGenera = document.getElementById('ms_btn_genera');

var buttonAnnulla = document.getElementById('ms_btn_annulla');

var ticketDetails = document.getElementById('details');



// Variabili dati Biglietto
var passengerName = document.getElementById('passenger_name');
var discount = document.getElementById('discount');
var carrozza = document.getElementById('chariot');
var cp = document.getElementById('cp');
var costoBiglietto = document.getElementById('ticket_cost');

// Varibili prezzo Biglietto
var kmInputValue;
var inputAgeValue;

// Evento cliccando Tasto Genera
buttonGenera.addEventListener('click',
  function() {

    ticketDetails.className = ticketDetails.classlist + " display_block"


    // Nome passeggero sul biglietto
    passengerName.innerHTML = nameInput.value;
    // Dati inseriti dall'utente
    kmInputValue = kmInput.value;
    inputAgeValue = ageInput.value;

    // Prezzo Biglietto e calcolo
    var ticketPrice = kmInputValue * 0.21;


    if (inputAgeValue == 'minorenne') {
      ticketPrice = ticketPrice - (ticketPrice * 20 / 100);
      discount.innerHTML = "Offerta minorenne";

    } else if (inputAgeValue == 'over'){
      ticketPrice = ticketPrice - (ticketPrice * 40 / 100);
      discount.innerHTML = "Offerta over 65";

    }

    // stampo dati elaborati
    costoBiglietto.innerHTML = ticketPrice.toFixed(2) + " euro";
    carrozza.innerHTML = Math.floor(Math.random() * 21);
    cp.innerHTML = Math.floor(Math.random() * 10000);

  }
);

// Evento cliccando tasto annulla

buttonAnnulla.addEventListener('click',
  function() {

    // Nascondo Biglietto
    ticketDetails.className = ticketDetails.classlist + " display_none"


    // Reset dei dati form
    nameInput.value = '';
    passengerName.innerHTML = '';
    kmInput.value = '';


    // Reset dei dati form biglietto
    discount.innerHTML = '';
    carrozza.innerHTML = '';
    cp.innerHTML = '';
    costoBiglietto.innerHTML = '';
    ageInput.value = 'minorenne';


  }
)
