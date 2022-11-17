function Hello(){
    console.log("Hello");
}

function slideshowChanger(index){
  const options = ["Claim our rights", "Say NO", "Report", "Organize"];
  const bodies = [
    `Be aware that there are multiple types when it comes to corruption. IMCO’s Anticorruption Director Max Kaiser pointed out: “There is no way that this country can change if we believe that corruption is only about bribing a police officer. For a lot of Mexicans, that is the only type of corruption.”`,

    `It is not only about knowing the types of corruption. But we also have to learn how to refuse to be part of these acts when we see them.`,

    `Specialists insist that citizens need to take the risk to report. If and individual considers that reporting could represent a risk, they can always find other alternatives such as an anonymous report.`,

    `In order to really try to make a difference, citizens must organize and unite forces to report the same corrupt acts as a community and increase their visibility.`
  ]
  const images = ["./src/rights.jpg", "./src/sayno.jpg", "./src/report.jpg", "./src/organize.jpg"]
  document.getElementById("slideshow-header").innerText = options[index];
  document.getElementById("slideshow-body").innerText = bodies[index];
  document.getElementById("slideshow-image").src = images[index];

}

function responsiveNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function onFormSubmit(){
  event.preventDefault();
}

function debugData(){
    var name = document.querySelector("#name")
    console.log(name.value);
    var mail = document.querySelector("#mail")
    console.log(mail.value);
    var institucion = document.querySelector("#institucion")
    console.log(institucion.value);
    var problema = document.querySelector("#problema-a-reportar")
    console.log(problema.value);

    alert("Tus datos han sido procesados y enviados correctamente.")
}