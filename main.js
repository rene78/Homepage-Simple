window.addEventListener("load", () => {
  //get current date
  const currentDate = new Date();
  //get current month
  const currentMonth = currentDate.getMonth();
  //get current full year
  const currentFullYear = currentDate.getFullYear();
  //when i started working
  const startYear = 2005;

  document.querySelector(".availability").innerText = getAvailability(currentMonth, currentFullYear);
  document.querySelector(".experience").innerText = getYearsExperience(startYear, currentFullYear);
});

function getAvailability(cMonth, cYear) {
  const defaultText = "Wieder verfügbar ab ";
  let availabilityDate;

  switch (cMonth) {
    case 0:
    case 1:
      availabilityDate = "März " + cYear;
      break;
    case 2:
    case 3:
    case 4:
      availabilityDate = "Juni " + cYear;
      break;
    case 5:
    case 6:
    case 7:
      availabilityDate = "September " + cYear;
      break;
    case 8:
    case 9:
    case 10:
    case 11:
      availabilityDate = "Januar " + (cYear + 1);
      break;
  }

  const infoText = defaultText + availabilityDate;
  // console.log(infoText);
  return infoText;
}

function getYearsExperience(sYear, cYear) {
  const experience = cYear - sYear;
  // console.log(experience);
  return experience;
}