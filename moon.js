// http://api.usno.navy.mil/moon/phase?date=TODAY&nump=1
console.log(1);
var currentIndex = 0;
var phaseData = [];

function onSucessfulLoad(data) {
  console.log('success');
  phaseData = data.phasedata;
  // let nextPhase = data.phasedata[0];
  // $('#moon_data').text(`${nextPhase.phase} on ${nextPhase.date}`);
};

function onHappyClick() {
  console.log('clicked');
  if (currentIndex < phaseData.length) {
    let nextPhase = phaseData[currentIndex];
    $('#moon_data').text(`${nextPhase.phase} on ${nextPhase.date}`);
    currentIndex++;
  }else{
    console.log('sorry');
  };
  console.log(phaseData.length)
};

console.log(3)
let DATE = 'today';
jQuery.getJSON(`http://api.usno.navy.mil/moon/phase?date=${DATE}&nump=30`, onSucessfulLoad);
console.log(4);

document.getElementById("nextButton").addEventListener("click", onHappyClick);
