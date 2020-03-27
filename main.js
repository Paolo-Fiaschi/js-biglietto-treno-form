// DICHIARAZIONI VARIABILI
var dateName, dateKm, dateAge, prezzoPerKm, prezzoStandard, prezzoUnder, prezzoOver, prezzoFinale, treno, carrozza, posto;

// INPUT UTENTE
// input nome utente
var nameU = document.getElementById('name');
// input km utente
var kmU = document.getElementById('km');
// input età utente
var ageU = document.getElementById('age');

// button genera
var generaButton = document.getElementById('genera');
// button Annulla
var annullaButton = document.getElementById('annulla');

// avvenimento al click genera
generaButton.addEventListener("click",

  function(){
    // salvare i valori degli inputDate
    dateName = nameU.value;
    dateKm = kmU.value;
    dateAge = ageU.value;
    document.getElementById('output').style.opacity = 1;


    // calcolo del costo del biglietto
    // var per prezzo biglietto al km
    prezzoPerKm = 0.21;

    // var biglietto senza sconto
    prezzoStandard = prezzoPerKm * dateKm;

    // var biglietto sconto 20%
    prezzoUnder = prezzoStandard - ((prezzoStandard * 2)/10);

    // var biglietto sconto 40%
    prezzoOver = prezzoStandard - ((prezzoStandard * 4)/10);

    // variabile d'appoggio per output sconto
    var sconto = dateAge

    // condizioni costo del biglietto
    if (dateAge < 18){
      prezzoFinale = prezzoUnder;
      sconto = "Biglietto Under";
    } else if (dateAge > 65){
      prezzoFinale = prezzoOver;
      sconto = "Biglietto Over";
    } else{
      prezzoFinale = prezzoStandard;
      sconto = "Biglietto Standard";
    }

    // numero carrozza posto e treno
    carrozza = Math.floor(Math.random()*10 +1);
    posto = Math.floor(Math.random()*50) +1;
    treno = Math.floor(Math.random()*15000) +1;
    console.log(treno, carrozza, posto);


    console.log(prezzoFinale.toFixed(2));
    // stampo in console
    console.log(dateName,dateKm, dateAge );


    document.getElementById('outputPrice').innerHTML = prezzoFinale.toFixed(2) + " euro";
    document.getElementById('outputName').innerHTML = dateName;
    document.getElementById('outputSconto').innerHTML = sconto;
    document.getElementById('outputTreno').innerHTML = treno;
    document.getElementById('outputCarrozza').innerHTML = carrozza;
    document.getElementById('outputPosto').innerHTML = posto;
  }
);

// avvenimento click Annulla
annullaButton.addEventListener("click",

  function(){
    nameU.value = "";
    kmU.value = "";
    ageU.value = "";
    document.getElementById('output').style.opacity = 0;
  }


)
// refresh
location.reload(forceGet);
