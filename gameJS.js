//killian pol, opdracht game

var name = prompt("wat is je naam")
alert("welkom "+name+" bij the woods")
alert("Je hebt iedere keer meerdere keuzes, vul het getal van de keuze in om die kant op te gaan")

alert("Hallo "+name+", Je word wakker in een bos, het laatste wat je je kunt herinneren is dat je met wat vrienden aan het camperen was" )
alert("je weet totaal niet waar je bent, wel weet je dat je terug naar je vrienden wilt")

//Eerste keuze 
var keuze = prompt("wat doe je? \n(1)blijven \n(2)Rechtdoor gaan\n(3)Naar links gaan\n(4)Naar rechts");

if(keuze == "1"){ //keuze om te blijven
alert("Je bent in slaap gevallen en word wakker alleen Er staat nu een groep wolven om je heen");
var keuze = prompt("wat doe je? \n(1)blijven \n(2)Wegrennen\nVul een getal in"); 

if(keuze == "1"){ //keuze om nogmaals te blijven
alert("Je bent dood, de wolven hebben je aangevallen en opgegeten.")}

else if(keuze == "2"){ //keuze om weg te rennen
alert("Je raakt verdwaald en bent de weg kwijt")
var keuze = prompt("Wat doe je? \n(1)Opgeven\n(2)Proberen de weg te vinden");

if(keuze == "1"){ //keuze om op te geven
	alert("Je hebt verloren, het bos heeft gewonnen");}

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
 var keuze = prompt("Wat doe doe je? \n(1)Een van de 2 drinken\n(2)Allebei drinken\n");

 //1 drinken
if(keuze == "1"){
alert("Er staat een flesje met een blauwe en een rode dop")
 var keuze = prompt("Welke drink je? \n(1)De fles met de blauwe dop\n(2)De fles met de rode dop");

//blauwe dop
if(keuze == "1"){
alert(" Dat smaakte raar, Het was vergif")
alert("Je bent dood")}

//Rode dop
else if(keuze == "2"){
alert("Dat smaakt vreemd, maar het lijkt alsof er niks aan de hand is, je gaat terug naar buiten")
alert("Je komt buiten, maar huh, het huis is weg en je bent niet meer in het bos, zat er dan toch iets in dat water")
var keuze = prompt("Wat doe je? \n(1)Wachten tot het is uitgewerkt\n(2)Doorgaan en proberen de weg te vinden")

//wachten
if(keuze == "1"){
alert("Een beer vind je, je hebt geen schijn van kans, de beer eet je op");
alert("Je bent dood")}

//weg alsnog zoeken
else if (keuze == "2"){
alert("Je komt bij een ravijn maar er is een brug ")
var keuze = prompt("Wat doe je? \n(1)Over de brug heen \n(2)Het slipperige pad langs het ravijn nemen")

//over de brug heen
if(keuze == "1"){
alert("Ohnee! Je was aan het hallucineren en er was helemaal geen brug \n Je valt naar beneden")
alert("Je bent dood")}

//langs het ravijn
else if (keuze == "2"){
alert("Het pad is veelste glad, je glijd uit en valt in het ravijn")
alert("Je bent dood")}
}//einde weg alsnog vinden

}//eind keuze naar binnen

}//eind keuze 1 drinken

	//Allebei drinken
else if(keuze == "2"){
alert("Dat was geen goeie combie\n het was een giftige combie")
alert("Je bent dood")}

}//einde naar binnen

else if(keuze == "2"){
alert("Je loopt verder het bos in, maar wacht, wat ligt daar!")	
alert("Het is een hakbijl, dat kan van pas komen")
var keuze = prompt("wat doe je? \n(1)De hakbijl meenemen\n(2)De hakbijl laten liggen")

//bijl opgepakt
if(keuze == "1"){
alert("+ Bijl")	
alert("Slimme keus, of misschien wel niet \n dat zul je vanzelf zien")
alert("Je komt bij een houten poort aan, maar je hebt geen sleutel")
var keuze = prompt("Wat doe je? \n(1)Zoeken naar een sleutel\n(2)De deur open hakken met je bijl")

//deur openhakken met bijl
if (keuze == "2") {
alert("Ah shit! Je bijl is kapot")
alert("- Bijl")
alert("je kunt gelukkig wel door het gat heen klimmen")
alert("Oh nee! er staat een man met een geweer en hij schiet je neer")
alert("Je bent dood")}

//voor de poort met een sleutel
else if (keuze == "1"){
alert("Je hebt de sleutel gevonden, hij lag naast de poort, een plek waar niemand zou zoeken natuurlijk")
var keuze = prompt("Wat doe je? \n(1)De poort open hakken met je bijl \n(2)De sleutel gebruiken")

//poort openhakken
if (keuze == "1"){
alert("Ah shit! Je bijl is kapot, Dan toch maar de sleutel gebruiken")
alert("De poort is open")
alert("Oh nee! er staat een man met een geweer en hij schiet je neer")
alert("Je bent dood")}//eind keuze poort open hakken

//sleutel gebruiken (bijl)
else if(keuze == "2"){
alert("De sleutel past!")
alert("De poort gaat open, maar wat zie je daar")
alert("Er zit een man met een geweer op schoot te slapen")	
var keuze = prompt("Wat ga je doen? \n(1)De man vragen of hij de weg terug weet \n(2)Proberen het wapen van de man te pakken en hem ermee bedreigen")

//man om weg terug vragen
if (keuze == "1") {
alert("Je denkt toch niet dat die man weet waar de weg terug is")
alert("De man schiet je dood")}

//Proberen het wapen van de man te pakken en hem bedreigen
else if (keuze == "2") {
alert("Je loopt naar de man, maar hij word wakker\nShit!")
var keuze = prompt("Wat doe je? \n(1)Je hakbijl naar de man gooien \n(2)Je overgeven")

//hakbijl gooien
if(keuze == "1"){
alert("Gelukkig gooide je de hakbijl goed")
alert("De man is dood, en jij gelukkig niet")
alert("Hey kijk!\nEr ligt een kaart en wat sleutels")
alert("Het lijkt erop dat de sleutels voor een auto zijn")
var keuze = prompt("Wat doe je?\n(1)Opzoek naar de auto \n(2)De weg lopend proberen te vinden")

//opzoek naar de auto
if (keuze == "1"){
alert("Je pakt de dode man zijn geweer op")
alert("+ M16")
alert("Je ziet een gebouw staan wat lijkt op een garage")
alert("Je komt aan bij het gebouw")
var keuze = prompt("Je kunt 2 dingen doen\n(1)Gewoon via de deur naar binnen lopen met kans dat er een alarm afgaat\n(2)Een veilige manier naar binnen vinden")

//via deur
if (keuze == "1"){
alert("Ja hoor! er gaat een alarm af")
alert("Er komen meerdere mannen met geweren aangerend")
alert("Je word aangehouden en gevangen genomen")
alert("Je hebt verloren")}//eind via deur



//veilige manier
else if (keuze == "2"){
alert("Je vind links van het gebouw een ladder waarmee je voorzichtig naar het dak kunt")	
alert("Er staat een raam open waardoor je stil naar binnen kunt")
alert("Er staat inderdaad een auto")
alert("Je stapt in en de sleutel werkt!")
var keuze = prompt("Wat doe je?\n(1)Rustig wegrijden en hopen dat niemand je door heeft\n(2)Vol gas naar buiten rijden en hopen dat je niet neergeschoten word")

//Rustig
if (keuze == "1"){
alert("Je rijd rustig de garage uit, maar nee!")
alert("Ze hebben je door, je maakt van schijn van kans\nJe geeft je over en je word aangehouden")
alert("Je hebt verloren")}//einde rustig

//vol gas
else if (keuze == "2") {
alert("Je trapt vol het gas in en rijd richting de poort")
alert("Er word heel veel op je geschoten")
alert("Je rijd vol door de poort heen en je bent niet geraakt")
alert("Op de kaart zie je welke richting je op moet, en je word gelukkig niet achtervolgd")
alert("Je bent ontsnapt!")
alert("Je hebt gewonnen")}//einde vol gas

}//eind veilige manier

}//eind opzoek naar de auto

//De weg lopend proberen te vinden
else if (keuze == "2"){
alert("Je pakt de kaart en kijkt of je iets kunt herkennen")	
alert("Het lijkt erop dat je een paar kilometer van de camping af zit waar jij en je vrienden aan het camperen waren")
alert("Je loopt naar een poort wat lijkt op een uitgang")
alert("Shit!")
alert("Je hoord een zware boze stem naar je roepen")
alert("Hey! Wat doe jij hier!")
var keuze = prompt("Wat doe je?\n(1)Heel hard wegrennen\n(2)De man vertellen wat er is gebeurt, en dat je terug probeert te gaan naar je vrienden")

//heel hard wegrennen
if (keuze == "1"){
alert("Shit! De man begint te schieten")
alert("Je bent helaas niet snel genoeg")
alert("De man schiet je dood")}

//De man vertellen wat er is gebeurt
else if (keuze == "2"){
alert("De man gelooft het niet en denkt dat je probeert in te breken")
alert("De man schiet je dood")}

}//Eind weg lopend vinden

}//einde hakbijl gooien //eind vrijdag

//overgeven
else if(keuze == "2"){
alert("De man boeit het niet dat je je overgeeft en schiet je dood")
alert("Je bent dood")}//einde overgeven

}
}//eind keuze sleutel gebruiken	

}//eind keuze zoeken naar sleutel zoeken

}//einde keuze meenemen

//bijl laten liggen
else if (keuze == "2"){
alert("Lijkt je dat nou serieus heel erg slim? \n Het is jou keuze, ik wens je succes")	
alert("Je komt bij een houten poort van 5 meter hoog, maar je hebt geen sleutel voor de deur")
alert("Had je nu maar die bijl")
var keuze = prompt("Wat ga je doen? \n(1)Over de poort klimmen \n(2)De sleutel zoeken")

// keuze klimmen
if (keuze == "1") {
alert("Je denkt toch niet dat je spiderman bent")
alert("Je kan niet zo goed klimmen en je valt op je nek")
alert("Je bent dood \n Had je die bijl nou maar meegenomen, of misschien wel gewoon voor de sleutel gezocht")} // eind klimmen

//sleutel zoeken zonder bijl
else if (keuze == "2") {
alert("Je hebt er even over gedaan, Maar je hebt de sleutel gevonden")
var keuze = prompt("Wat doe je? \n(1)sleutel gebruiken \n(2)Over de poort klimmen")

//sleutel gebruiken zonder bijl
if (keuze == "1") {
alert("De sleutel past!")
alert("De poort gaat open, maar wat zie je daar")
alert("Er zit een man met een geweer")	
var keuze = prompt("Wat ga je doen? \n(1)De man vragen of hij de weg terug weet \n(2)Proberen het wapen van de man te pakken en hem ermee bedreigen")

if (keuze == "1"){
alert("Je denkt toch niet dat die man weet waar de weg terug is")
alert("De man schiet je dood")
alert("Je bent dood")}

else if (keuze == "2"){
alert("Je denkt toch niet dat je een of andere John wick bent en een wapen kan afpakken")
alert("De man schiet je dood")}

}//einde sleutel gebruiken zonder bijl

//over de poort klimmen
else if (keuze == "2") {
alert("Je denkt toch niet dat je spiderman bent")
alert("Je kan niet zo goed klimmen en je valt naar beneden en land op je nek")
alert("Je bent dood \n Had je de sleutel nou maar gebruikt, of gewoon de bijl meegenomen")} // eind klimmen	
}

}//eind sleutel zoeken

}//einde bijl laten liggen

}//eind keuze doorlpen

//naar links
else if (keuze == "3") {
alert("Je bent naar links gegaan \nNa een tijdje kom je een berg tegen")
var keuze = prompt("Wat doe je? \n(1)De berg beklimmen \n(2)Om de berg heen lopen")

//de berg beklimmen
if(keuze == "1"){
alert("je komt heel ver maar helaas, je valt!")	
alert("Je bent dood")} //einde berg beklimmen

//om de berg heen
else if (keuze == "2"){
alert("Je komt een paard tegen")
var keuze = prompt("Wat doe je? \n(1)Proberen op het paard te gaan rijden \n(2)Het paard negeren")

//proberen op het paard te rijden
if (keuze == "1") {
alert("Dit is geen red dead redemption\nJe kunt niet met paarden omgaan")
alert("Het paard schrikt van je en trapt je tegen je hoofd")
alert("Je bent dood")	}

//paard negeren
else if (keuze == "2") {
alert("Dat is niet aardig, hoe durf je het paard te negeren")
alert("Het paard voelt zich genegeerd, rent naar je toe en trapt je tegen je hoofd")
alert("je bent dood")} //einde om de beg heen
}
}//einde naar links

//naar rechts
else if (keuze == "4"){
alert("Je ziet een bord met daarop de teks \n'weg terug'")
var keuze = prompt("Wat doe je? \n(1)Het bord volgen \n(2)Het bord negeren en doorlopen")

if (keuze == "1"){
alert("Het bord liegt! Oh nee toch niet, het bord is waar en je vindt de weg terug ")
alert("Je hebt gewonnen")
}//einde bord volgen

else if (keuze == "2"){
alert("Je raakt de weg kwijt en weet niet meer de weg terug naar waar je begon")	
alert("Je hebt geen bear grylls skills dus je verhongerd in het bos")
alert("Je bent dood")
}

}


