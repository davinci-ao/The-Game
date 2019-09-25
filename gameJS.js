var name = prompt("wat is je naam")


var name = alert("hallo "+name+", Je word wakker in een bos, het laatste wat je je kunt herinneren is dat je met wat vrienden aan het camperen was" )
alert("je weet totaal niet waar je bent, wel weet je dat je naar huis wilt")

//Eerste keuze 
var keuze = prompt("wat doe je? \n(1)blijven \n(2)Rechtdoor gaan\n(3)Naar links gaan\n(4)Naar rechts gaan\nvul een getal in");

if(keuze == "1"){ //keuze om te blijven
alert("Je bent in slaap gevallen en word wakker alleen Er staat nu een groep wolven om je heen");
var keuze = prompt("wat doe je? \n(1)blijven \n(2)Wegrennen\nVul een getal in"); 

if(keuze == "1"){ //keuze om nogmaals te blijven
alert("Je bent dood, de wolven hebben je aangevallen en opgegeten.")}

else if(keuze == "2"){ //keuze om weg te rennen
alert("Je raakt verdwaald en bent de weg kwijt")
var keuze = prompt("Wat doe je? \n(1)Opgeven\n(2)Proberen de weg te vinden");

if(keuze == "1"){ //keuze om op te geven
	alert("Je hebt verloren, het bos heeft gewonnen ");}

else if(keuze == "2"){
alert("De wolven zijn terug maar je bent te moe om iets te doen, je wordt opgegeten ");	}
}
} //einde keuze bijven//


//keuze rechtdoor gaan
else if(keuze == "2"){ 
 alert("Je ziet een huisje staan")
 var keuze = prompt("Wat doe je? \n(1)Naar binnen gaan\n(2)Doorlopen");

//keuze naar binnen
if(keuze == "1"){
 alert("Je komt binnen en er staan 2 flesjes met wat lijkt op water erin")
 var keuze = prompt("Wat doe doe je? \n(1)Een van de 2 drinken\n(2)Allebei drinken\n(3)Terug naar buiten");

    //1 drinken
if(keuze == "1"){
Alert("Er staat een flesje met een blauwe en een rode dop")
 var keuze = prompt("Welke drink je? \n(1)De fles met de blauwe dop\n(2)De fles met de rode dop");

//blauwe dop
if(keuze == "1"){
alert(" Dat smaakte raar, je bent dood! Het was vergif")}

//Rode dop
else if(keuze == "2"){
alert("Dat smaakt vreemd, maar het lijkt alsof er niks aan de hand is, je gaat terug naar buiten")
alert("Je komt buiten, maar huh, het huis is weg en je bent niet meer in het bos, zat er dan toch iets in dat water")
var keuze = prompt("Wat doe je? \n(1)Wachten tot het is uitgewerkt\n(2)Doorgaan en proberen de weg te")
}


}

	//Allebei drinken
if else(keuze == "2"){
alert("Dat was geen goeie combie, je bent dood\n het was een giftige combie")}

}





} // einde keuze rechtdoor


