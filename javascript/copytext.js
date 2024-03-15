const mailParagraph = document.querySelector(".mail"); // Selecteer het element met class "mail"
const copyMessage = document.getElementById("copyMessage"); // Selecteer het element voor het kopieerbericht

mailParagraph.onclick = function() {
    document.execCommand("copy");
}

mailParagraph.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", mailParagraph.textContent);
        console.log(event.clipboardData.getData("text"))
        copyMessage.style.display = "block"; // Toon het kopieerbericht
        setTimeout(function() {
            copyMessage.style.display = "none"; // Verberg het kopieerbericht na enkele seconden
        }, 2000); // Hier kun je de weergavetijd van het bericht aanpassen (in milliseconden)
    }
});

// <------------Side navbar------------->
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-15rem";
}
