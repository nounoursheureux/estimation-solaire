var regions = document.getElementById('regions');

document.getElementById('button').addEventListener('click', function() {
  var irradiance = regions.options[regions.selectedIndex].value;
  var surface = document.getElementById('surface').value;
  var puissance_crete = document.getElementById('puissance').value;

  var irradiance_annee = irradiance / (365.25 * 24);
  var puissance_watt = irradiance_annee * puissance_crete;
  var puissance_par_m2 = puissance_watt / surface;
  var production_annee = puissance_par_m2 * 365.24 * 24;
  document.getElementById('resultat').innerHTML = "Estimation de la production: " + production_annee.toFixed(0) + " kWh / an";
});
