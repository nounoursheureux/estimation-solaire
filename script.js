var regions = document.getElementById('regions');

document.getElementById('button').addEventListener('click', function() {
  var irradiance = regions.options[regions.selectedIndex].value;
  var surface = document.getElementById('surface').value;
  var puissance_crete = document.getElementById('puissance').value;

  var irradiance_watts = (irradiance / (365.25 * 24)).toPrecision(3);
  var puissance_watt = (irradiance_watts * puissance_crete).toPrecision(3);
  var puissance_par_m2 = (puissance_watt / surface).toPrecision(3);
  var production_annee = (puissance_par_m2 * 365.24 * 24).toPrecision(3);
  document.getElementById('resultat').innerHTML = "<strong>Estimation de la production: " + (production_annee / 1000).toPrecision(3) + " kWh / an</strong>";
  document.getElementById('details-btn').className = "btn btn-primary";

  var energie_solaire_p = document.createElement("p");
  energie_solaire_p.innerHTML = "Energie transmise par le Soleil: " + irradiance + "kWh/an";
  var irradiance_watts_p = document.createElement("p");
  irradiance_watts_p.innerHTML = "Puissance transmise par le Soleil: " + irradiance_watts + " W";
  var puissance_watts_p = document.createElement("p");
  puissance_watts_p.innerHTML = "Puissance du panneau: " + puissance_watt + " W";
  var puissance_par_m2_p = document.createElement("p");
  puissance_par_m2_p.innerHTML = "Puissance du panneau au m²: " + puissance_par_m2 + " W/m²";
  document.getElementById('details').appendChild(energie_solaire_p);
  document.getElementById('details').appendChild(irradiance_watts_p);
  document.getElementById('details').appendChild(puissance_watts_p);
  document.getElementById('details').appendChild(puissance_par_m2_p);
});

document.getElementById('details-btn').addEventListener('click', function() {
  document.getElementById('details').className = "";
});
