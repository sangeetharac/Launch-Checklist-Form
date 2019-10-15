// Write your JavaScript code here!
window.addEventListener("load", function(){
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event){
      let  pilotName = document.querySelector("input[name=pilotName]");
      let  copilotName = document.querySelector("input[name=copilotName]");
      let  fuelLevel = document.querySelector("input[name=fuelLevel]");
      let  cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      
      if (pilotName.value === "" || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === ''){
      
         alert('All fields are required!');
         event.preventDefault()
         
     } 
     else if (isNaN(fuelLevel.value) === true ) {
      
      alert('Fule level must be numeric');
      event.preventDefault()
      
      }
      else if (isNaN(cargoMass.value) === true) {
         
         alert('Cargo Mass must be numeric');
         event.preventDefault()
         
      }
     else if ( Number(fuelLevel.value) < 10000 || Number(cargoMass.value) > 10000 ) {
         event.preventDefault()
         faultyItems.setAttribute( "style", "visibility: visible;");
         launchStatus.innerHTML= "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         faultyItems.innerHTML = `
                <ol>
                    <li id="pilotStatus">Pilot ${pilotName.value} Ready</li>
                    <li id="copilotStatus">Co-pilot ${copilotName.value} Ready</li>
                    <li id="fuelStatus">Fuel level ${ (function () { if(Number(fuelLevel.value) < 10000) {                       
                                                                 return "too low";
                    }
                                                                 else {return "high enough "

                    } 
                 })()} for launch</li>
                    <li id="cargoStatus">${ (function () { if(Number(cargoMass.value) > 10000) {                       
                     return "Too much mass for take off";
                 }
                     else {return "Cargo mass low enough for launch "

                 } 
                })()}</li>
                </ol>`;

      }
      else {
         event.preventDefault()

         launchStatus.innerHTML= "Shuttle Ready for Launch";
         launchStatus.style.color = "green";
      }
   });


// This block of code shows how to format the HTML once you fetch some planetary JSON!
   let json = [];
   let index = Math.floor(Math.random() * 6);
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json[index].name}</li>
         <li>Diameter: ${json[index].diameter}</li>
         <li>Star: ${json[index].star}</li>
         <li>Distance from Earth: ${json[index].distance}</li>
         <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[0].image}">
         `;
         });
      });
});


