function availability() {
  const d = new Date();

  // console.log(d)
  // console.log(d.getMonth());
  // console.log(d.getFullYear());

  let defaultText = "Wieder verfügbar ab ";
  let availabilityDate;

  switch (d.getMonth()) {
    case 0:
    case 1:
      availabilityDate = "März " + d.getFullYear();
      break;
    case 2:
    case 3:
    case 4:
      availabilityDate = "Juni " + d.getFullYear();
      break;
    case 5:
    case 6:
    case 7:
      availabilityDate = "September " + d.getFullYear();
      break;
    case 8:
    case 9:
    case 10:
    case 11:
      availabilityDate = "Januar " + (d.getFullYear() + 1);
      break;
  }

  let infoText = defaultText + availabilityDate;
  //console.log(infoText); //Wieder verfügbar im März 2019
  //document.querySelector(".availability").innerText = infoText;
  document.querySelector(".availability").innerText = "Verfügar für neue Herausforderungen";
}