// DICHIARAZIONI VARIABILI
var dateName, dateKm, dateAge, dateClass, prezzoPerKm, prezzoStandard, prezzoUnder, prezzoOver, prezzoFinale, treno, carrozza, posto, prezzoStudente, prezzoFinaleStampato;

// INPUT UTENTE
// input nome utente
var nameU = document.getElementById('name');
// input km utente
var kmU = document.getElementById('km');
// input età utente
var ageU = document.getElementById('age');
// input classe
var classU = document.getElementById('class');

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
    dateClass = classU.value;

    document.getElementById('output').style.opacity = 1;


    // calcolo del costo del biglietto
    // var per prezzo biglietto al km
    prezzoPerKm = 0.21;

    // var biglietto senza sconto
    prezzoStandard = prezzoPerKm * dateKm;

    // var biglietto sconto -20%
    prezzoUnder = prezzoStandard - ((prezzoStandard * 2)/10);

    // var biglietto sconto -40%
    prezzoOver = prezzoStandard - ((prezzoStandard * 4)/10);

    // var sconto Studente -5% del prezzoFinale
    prezzoStudente = 0;

    // variabile d'appoggio per output sconto
    var sconto = dateAge

    // condizioni costo del biglietto
    if (dateAge == "Minorenne"){
      prezzoFinale = prezzoUnder;
      sconto = "Biglietto Under -20%";
    } else if (dateAge == "Over 65"){
      prezzoFinale = prezzoOver;
      sconto = "Biglietto Over -40%";
    } else if (dateAge == "Studente") {
      prezzoFinale = prezzoStudente;
      sconto = "Studente Boolean, sconto 100%"
    } else{
      prezzoFinale = prezzoStandard;
      sconto = "Biglietto Standard";
    }
    // condizioni variabile classe
    if (dateClass == "1") {
      prezzoFinaleStampato = prezzoFinale + ((prezzoFinale * 20)/100);
    }else if (dateClass == "2") {
      prezzoFinaleStampato = prezzoFinale + ((prezzoFinale * 10)/100);
    } else if (dateClass == "classStandard"){
      prezzoFinaleStampato = prezzoFinale;
    }
    console.log(prezzoFinaleStampato);
    // numero carrozza posto e treno
    carrozza = Math.floor(Math.random()*10 +1);
    posto = Math.floor(Math.random()*50) +1;
    treno = Math.floor(Math.random()*15000) +1;
    console.log(treno, carrozza, posto);


    console.log(prezzoFinale.toFixed(2));
    // stampo in console
    console.log(dateName,dateKm, dateAge );

    // stampo solo se sono stati inseriti tutti i campi
    if (nameU && prezzoFinaleStampato) {
      document.getElementById('outputPrice').innerHTML = prezzoFinaleStampato.toFixed(2) + " euro";
      document.getElementById('outputName').innerHTML = dateName;
      document.getElementById('outputSconto').innerHTML = sconto;
      document.getElementById('outputTreno').innerHTML = treno;
      document.getElementById('outputCarrozza').innerHTML = carrozza;
      document.getElementById('outputPosto').innerHTML = posto;
    }else {
      document.getElementById('outputPrice').innerHTML = "";
      document.getElementById('outputName').innerHTML = "";
      document.getElementById('outputSconto').innerHTML = "";
      document.getElementById('outputTreno').innerHTML = "";
      document.getElementById('outputCarrozza').innerHTML = "";
      document.getElementById('outputPosto').innerHTML = "";
      document.getElementById('output').style.opacity = 0;
    }
  }
);

// avvenimento click Annulla
annullaButton.addEventListener("click",

  function(){
    nameU.value = "";
    kmU.value = "";
    ageU.value = "";
    classU.value = "";
    document.getElementById('output').style.opacity = 0;
  }


)
