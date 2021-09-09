var img = document.getElementById("screen");
var text = document.getElementById("text");
var act1 = document.getElementById("act1");
var act2 = document.getElementById("act2");
var act3 = document.getElementById("act3");
var hack = 1;
var emp = 1;
var stealth = 1;
var missile = 1;
var matrix = 1;
var self_destruct = 1;
var sleep = 1;
var grenade = 1;
var nano = 1;

function select() {
text.innerHTML = "Welcome to Volskaya Industries, select your character.";
img.src = "img/Volskaya_select.png";
act1.innerHTML = "Sombra";
act1.setAttribute("onclick", "sombra_act1()");
act2.innerHTML = "D.va";
act2.setAttribute("onclick", "dva_act1()");
act3.innerHTML = "Ana"
act3.setAttribute("onclick", "ana_act1()");
act2.style.display = "inline-block"
act3.style.display = "inline-block"
}

function sombra_act1() {
text.innerHTML = "You picked sombra, your team consist of a Mcree, Roadhog, Wrecking Ball, Mercy and a Ana. the match begins and your team is struggling to get through the enemies defences. what wil you do?";
img.src = "img/Volskaya_act1.png";
act1.innerHTML = "use hack";
act1.setAttribute("onclick", "sombra_defeat1()");
act2.innerHTML = "use emp";
act2.setAttribute("onclick", "sombra_succes5()");
act3.innerHTML = "use stealth";
act3.setAttribute("onclick", "sombra_succes1()");
act2.style.display = "inline-block"
act3.style.display = "inline-block"
console.log(hack);
console.log(emp);
console.log(stealth);
}

function sombra_defeat1() {
  text.innerHTML = "as you try to turn the enemy into your favor, you were unsuccesfull and the enemy get a hold of your team as they all die, one by one.";
  img.src = "img/defeat.jpg";
  act1.innerHTML = "respawn";
  act1.setAttribute("onclick", "sombra_act1()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function sombra_succes1() {
  stealth--
  text.innerHTML = "you succesfully sneak around the enemy without getting noticed.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "sombra_act2()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none";
  act3.style.display = "none";
}

function sombra_act2() {
img.src = "img/Volskaya_act2.png";
if (emp == 1) {
  text.innerHTML = "you have a clear sight of the enemy team. they have a reinhardt in they're team. what will be your next plan of action?";
  act1.innerHTML = "use hack";
  act1.setAttribute("onclick", "sombra_succes2_1()");
  act2.innerHTML = "use emp";
  act2.style.display = "inline-block";
  act2.setAttribute("onclick", "sombra_succes2_2()");
} else if (stealth == 1) {
  text.innerHTML = "your team is pushing in. your planning on a new strategy to take them down. what will you choose?";
  act1.innerHTML = "use hack";
  act1.setAttribute("onclick", "sombra_defeat3()");
  act2.innerHTML = "use stealth";
  act2.style.display = "inline-block";
  act2.setAttribute("onclick", "sombra_succes6()");
}
}

function sombra_succes2_1() {
  hack--
text.innerHTML = "you hack the Reinhardt! as you're team moves forward, the enemy slowly falls back to the point.";
act1.innerHTML = "next";
act1.setAttribute("onclick", "sombra_act3()");
act2.innerHTML = "";
act3.innerHTML = "";
act2.style.display = "none";
act3.style.display = "none";
}

function sombra_act3() {
  text.innerHTML = "as everything seems to be according to plan, the enemy Zarya and Genji appear and are planning to combine their ultimates against you. but you see them off gaurd and you..";
  img.src = "img/Volskaya_act3.png";
  if (emp == 1) {
    act1.innerHTML = "use emp";
    act1.setAttribute("onclick", "sombra_succes3()");
  } else if (hack == 1) {
    act1.innerHTML = "use hack";
    act1.setAttribute("onclick", "sombra_choose()");
  }
}

function sombra_succes3() {
  text.innerHTML = "you emp everyone near you, disabling the zarya and genji's ultimate and killing them in the progress.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "sombra_victory1()");
}

function sombra_victory1() {
  text.innerHTML = "as the enemy crumbles down, your team rises from the top and take the first point.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "victory1()");
}
 function victory1() {
   if (hack == 1) {

   } else {
     hack++
   }
   if (emp == 1) {

   } else {
     emp++
   }
   if (stealth == 1) {

   } else {
     stealth++
   }

   text.innerHTML = "";
   img.src = "img/victory.jpg";
   act1.innerHTML = "try again";
   act1.setAttribute("onclick", "select()");
 }

function sombra_succes2_2() {
  emp--
  text.innerHTML = "you come out of the shadows and emp everyone around you, taking away all of their abilities for a few seconds, making them back up to the point.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "sombra_act3()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none";
  act3.style.display = "none";
}

function sombra_choose() {
  text.innerHTML = "you choose to hack them, but you can only hack one. who will you choose?";
  act1.innerHTML = "Genji";
  act1.setAttribute("onclick", "sombra_defeat2()");
  act2.innerHTML = "Zarya";
  act2.setAttribute("onclick", "sombra_succes4()");
  act2.style.display = "inline-block";
}

function sombra_defeat2() {
  if (hack == 1) {

  } else {
    hack++
  }
  if (emp == 1) {

  } else {
    emp++
  }
  if (stealth == 1) {

  } else {
    stealth++
  }
  text.innerHTML = "although you succecfully hack the genji, their zarya already used her ult to grab everyone in your team and kiling them instantly, giving the enemy team a big turn around.";
  img.src = "img/defeat.jpg";
  act1.innerHTML = "respawn";
  act1.setAttribute("onclick", "sombra_act1()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function sombra_succes4() {
  text.innerHTML = "you hack their Zarya, taking her graviton away and giving your team a chance to hide and kill her and the Genji";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "sombra_victory1()");
  act2.innerHTML = "";
  act2.style.display = "none";
}

function sombra_succes5() {
  emp--
  text.innerHTML = "you throw yourself to the enemy team and emp everyone around you, taking their abilities away for a few seconds";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "sombra_act2()");
  act2.style.display = "none"
  act3.style.display = "none"
}

function sombra_defeat3() {
  if (hack == 1) {

  } else {
    hack++
  }
  if (emp == 1) {

  } else {
    emp++
  }
  if (stealth == 1) {

  } else {
    stealth++
  }
  text.innerHTML = "as you try to hack someone, you were spotted by the enemy widow somewhere kilometers away from you and you get headshotted in the progress.";
  img.src = "img/defeat.jpg";
  act1.innerHTML = "respawn";
  act1.setAttribute("onclick", "sombra_act1()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function sombra_succes6() {
  text.innerHTML = "you go invisible, unnoticed, and sneak behind the enemy.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "sombra_act3()");
  act2.innerHTML = "";
  act2.style.display = "none"
}

function dva_act1() {
  text.innerHTML = "You picked D.va, your team consist of a Tracer, Orisa, Mei, Mercy and a Lucio. the match begins and your team is struggling to get through the enemies defences. what wil you do?";
  img.src = "img/Volskaya_act1.png";
  act1.innerHTML = "use defense-matrix";
  act1.setAttribute("onclick", "dva_succes1()");
  act2.innerHTML = "use micro missiles";
  act2.setAttribute("onclick", "dva_defeat1()");
  act3.innerHTML = "use self-destruct";
  act3.setAttribute("onclick", "dva_choose1()");
  act2.style.display = "inline-block"
  act3.style.display = "inline-block"
  console.log(matrix);
  console.log(self_destruct);
  console.log(missile);
}

function dva_defeat1() {
  text.innerHTML = "although your micro missiles do quite the damage, its nothing against a Reinhardt with a shield and a gaint hammer with which he destroys your mech and kills you instantly.";
  img.src = "img/defeat.jpg";
  act1.innerHTML = "respawn";
  act1.setAttribute("onclick", "dva_act1()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function dva_succes1() {
  matrix--
  text.innerHTML = "You used your defense matrix to block any kind of bullet attack, making an opening for your team to push in.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "dva_act2()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function dva_choose1() {
  text.innerHTML = "you use your self destruct, blasting your mech up at the enemy and getting a kill on one of their supports. but you have to be careful, as the enemy soldier comes close to you, trying to blow you to smithereens. what will you do?";
  act1.innerHTML = "call mech";
  act1.setAttribute("onclick", "dva_defeat2()");
  act2.innerHTML = "shoot";
  act2.setAttribute("onclick", "dva_succes2()");
  act3.style.display = "none"
}

function dva_defeat2() {
  text.innerHTML = "you try to call your mech, but its already too late, as the enemy soldier shoots out his helix-rockets at you, killing you instantly.";
  img.src = "img/defeat.jpg";
  act1.innerHTML = "respawn";
  act1.setAttribute("onclick", "dva_act1()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function dva_succes2() {
  self_destruct--
  text.innerHTML = "you shoot the soldier with your blaster. you get some lucky shots, lucky enough to get him to low health and to let him killed by your teammates.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "dva_act2()");
  act2.innerHTML = "";
  act2.style.display = "none"
}

function dva_act2() {
  img.src = "img/Volskaya_act2.png";
  if (matrix == 1) {
    text.innerHTML = "you get your mech back and fly back to your team. you sneak behind the enemy lines. what will you do?";
    act1.innerHTML = "use micro missiles";
    act1.setAttribute("onclick", "dva_defeat3()");
    act2.innerHTML = "use defense-matrix";
    act2.setAttribute("onclick", "dva_succes4()");
    act2.style.display = "inline-block"

  } else if (self_destruct == 1) {
    text.innerHTML = "your team push forward, but the enemy is also trying to fight back. what will be your next move?";
    act1.innerHTML = "use micro missiles";
    act1.setAttribute("onclick", "dva_succes3()");
    act2.innerHTML = "use self-destruct";
    act2.setAttribute("onclick", "dva_defeat3()");
    act2.style.display = "inline-block"

  }
}

function dva_defeat3() {
matrix++
  text.innerHTML = "as you shoot your mech up in the sky, hoping to blow everyone up, it get nobody and you get killed off in the progress.";
  img.src = "img/defeat.jpg";
  act1.innerHTML = "respawn";
  act1.setAttribute("onclick", "dva_act1()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function dva_defeat4() {
self_destruct++
  text.innerHTML = "shooting your missiles wasn't your best idea, as the enemy team notices you";
  img.src = "img/defeat.jpg";
  act1.innerHTML = "respawn";
  act1.setAttribute("onclick", "dva_act1()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function dva_succes3() {
  missile--
  text.innerHTML = "you use your micro missiles too push the enemy even further to the point, even killing of their last support.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "dva_act3()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function dva_succes4() {
  matrix--
  text.innerHTML = "you, unnoticeably, use your defense-matrix to catch some bullets, making your team push further to the point.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "dva_act3()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function dva_act3() {
img.src = "img/Volskaya_act3.png"
if (missile == 1) {
  text.innerHTML = "you almost capture the point, but the enemy as an plan at their sleeves, as the enemy Zarya and Pharah try to use their ultimates to kill your whole team. but you see them coming and you..";
  act1.innerHTML = "use micro missiles";
  act1.setAttribute("onclick", "dva_choose2()");
} else if (self_destruct == 1) {
  text.innerHTML = "you almost capture the point, but the enemy as an plan at their sleeves, as the enemy Zarya and Pharah try to use their ultimates to kill your whole team. but you see them coming and you..";
  act1.innerHTML = "use self-destruct";
  act1.setAttribute("onclick", "dva_succes5()");
}
}

function dva_choose2() {
  text.innerHTML = "you use your micro missiles, but who will you shoot?";
  act1.innerHTML = "Pharar";
  act1.setAttribute("onclick", "dva_succes6()");
  act2.innerHTML = "Zarya";
  act2.setAttribute("onclick", "dva_defeat5()");
  act2.style.display = "inline-block"
}

function dva_defeat5() {
  if (matrix == 1) {

  } else {
    matrix++
  }
  if (missile == 1) {

  } else {
    missile++
  }
  if (self_destruct == 1) {

  } else {
    self_destruct++
  }
  text.innerHTML = "you shoot the Zarya, but with no luck, as the Zarya uses her shield and pulls everyone in her graviton while the pharah kills everyone.";
  img.src = "img/defeat.jpg";
  act1.innerHTML = "respawn";
  act1.setAttribute("onclick", "dva_act1()");
  act2.innerHTML = "";
  act3.innerHTML = "";
  act2.style.display = "none"
  act3.style.display = "none"
}

function dva_succes5() {
  text.innerHTML = "you launch your mech up in the sky and drop it on the point, killing off the enemy Zarya and Pharah";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "dva_victory()");
}

function dva_succes6() {
  text.innerHTML = "you shoot the pharah, luckely killing her with your missiles and disrupting the enemies combo.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "dva_victory()");
  act2.style.display = "none"
}

function dva_victory() {
  text.innerHTML = "The enemy crumbles down as they die one after another and your team captures the point.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "victory2()");
}

function victory2() {
 if (matrix == 1) {

 } else {
   matrix++
 }
 if (missile == 1) {

 } else {
   missile++
 }
 if (self_destruct == 1) {

 } else {
   self_destruct++
 }
 text.innerHTML = "";
 img.src = "img/victory.jpg";
 act1.innerHTML = "try again";
 act1.setAttribute("onclick", "select()");
}

function ana_act1() {
img.src = "img/Volskaya_act1.png";
text.innerHTML = "You picked Ana, your team consist of a Genji, D.va, Junkrat, Winston and a Moira. the match begins and your team is struggling to get through the enemies defences. what wil you do?";
act1.innerHTML = "use nano boost";
act1.setAttribute("onclick", "ana_succes1()");
act2.innerHTML = "use biotic grenade";
act2.setAttribute("onclick", "ana_succes2()");
act3.innerHTML = "use sleep dart";
act3.setAttribute("onclick", "ana_defeat1()");
act2.style.display = "inline-block";
act3.style.display = "inline-block";
console.log(matrix);
console.log(self_destruct);
console.log(missile);
}

function ana_defeat1() {
  img.src = "img/defeat.jpg";
  text.innerHTML = "you shoot out your sleep dart. the dart shoots out with a rapid speed, hitting nothing else but the enemy Reinhardt's shield, questioning yourself if you should switch off while the enemy attacks your team.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "ana_act1()");
  act2.style.display = "none";
  act3.style.display = "none";
}

function ana_succes1() {
  nano--
  text.innerHTML = "you nano boost your Junkrat, giving him an incredible boost of damage output and resistants, making the enemy fall back.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "ana_act2()");
  act2.style.display = "none";
  act3.style.display = "none";
}

function ana_succes2() {
  grenade--
  text.innerHTML = "you throw a biotic grenade, hitting every enemy and locking them from any form of healing.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "ana_act2()");
  act2.style.display = "none";
  act3.style.display = "none";
}

function ana_act2() {
  img.src = "img/Volskaya_act2.png";
  if (nano == 1) {
    text.innerHTML = "your team is pushing in, but the anti effect is going to run out. what will you do?";
    act1.innerHTML = "use nano boost";
    act1.setAttribute("onclick", "ana_succes3()");
    act2.innerHTML = "use sleep dart";
    act2.setAttribute("onclick", "ana_defeat2()");
    act2.style.display = "inline-block";
  } else if (grenade == 1) {
    text.innerHTML = "the enemy falls beckand your team is open for another atack. what will you do?";
    act1.innerHTML = "use biotic grenade";
    act1.setAttribute("onclick", "ana_defeat3()");
    act2.innerHTML = "use sleep dart";
    act2.setAttribute("onclick", "ana_succes4()");
    act2.style.display = "inline-block";
  }
}
 function ana_defeat2() {
   grenade++
   img.src = "img/defeat.jpg";
   text.innerHTML = "you shoot out your sleep dart, but with no luck. as the grenades effect wears off and the enemy makes a quick turn around. killing everyone in seconds.";
   act1.innerHTML = "next";
   act1.setAttribute("onclick", "ana_act1()");
   act2.style.display = "none";
   act3.style.display = "none";
 }

 function ana_defeat3() {
   nano++
   img.src = "img/defeat.jpg";
   text.innerHTML = "you try to throw your grenade, but you accidentally throw it upwards, hitting no one and going off the map. giving the enemy the biggest laugh off their live";
   act1.innerHTML = "next";
   act1.setAttribute("onclick", "ana_act1()");
   act2.style.display = "none";
   act3.style.display = "none";
 }

function ana_succes3() {
  nano--
  text.innerHTML = "you give your winston a nano boost, turning up his damaga capacity and killing off the low health enemies.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "ana_act3()");
  act2.style.display = "none";
  act3.style.display = "none";
}

function ana_succes4() {
  sleep--
  text.innerHTML = "you shoot your sleep dart and luckily get one of the supports, putting them in a deep sleep, just for your team to focus them.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "ana_act3()");
  act2.style.display = "none";
  act3.style.display = "none";
}

function ana_act3() {
  img.src = "img/Volskaya_act3.png";
  if (sleep == 1) {
    text.innerHTML = "your team is almost at the point, but the enemy reinhardt and soldier is charging in with their ultimates. what will you do?";
    act1.innerHTML = "use sleep dart";
    act1.setAttribute("onclick", "ana_choose()");
  } else if (grenade == 1) {
    text.innerHTML = "your team is almost at the point, but the enemy is trying their best to stop your team. everyone is low on health. what will you do?";
    act1.innerHTML = "use biotic grenade";
    act1.setAttribute("onclick", "ana_succes5()");
  }
}

function ana_choose() {
  text.innerHTML = "you use your sleep dart to sleep one of them, but who will you choose?";
  act1.innerHTML = "reinhardt";
  act1.setAttribute("onclick", "ana_succes6()");
  act2.innerHTML = "soldier";
  act2.setAttribute("onclick", "ana_defeat4()");
  act2.style.display = "inline-block";
}

function ana_defeat4() {
  if (grenade == 0) {
    grenade++
  } else {

  }
  if (nano == 0) {
    nano++
  } else {

  }
  img.src = "img/defeat.jpg";
  text.innerHTML = "you sleep the soldier with succes, but the rein had other plans. as he uses his ultimate to stun everyone within is range, giving the enemy a big advantage.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "ana_act1()");
  act2.style.display = "none";
  act3.style.display = "none";
}

function ana_succes5() {
  text.innerHTML = "you throw out your biotic grenade. hitting the ground and healing everyone up to full health. making them stronger for this battle.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "ana_victory()");
}

function ana_succes6() {
  text.innerHTML = "you sleep the rein, stopping him from using his ultimate. as the soldier tries to use his ultimate, it gets immediately eaten up by your D.va's defense-matrix.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "ana_victory()");
  act2.style.display = "none";
}

function ana_victory() {
  text.innerHTML = "the enemy struggles to get a hold on your team. but ultimately your team is superior and is able to take the point without a scratch.";
  act1.innerHTML = "next";
  act1.setAttribute("onclick", "victory3()");
}

 function victory3() {
   if (grenade == 1) {

   } else {
     grenade++
   }
   if (nano == 1) {

   } else {
     nano++
   }
   if (sleep == 1) {

   } else {
     sleep++
   }
   text.innerHTML = "";
   img.src = "img/victory.jpg";
   act1.innerHTML = "try again";
   act1.setAttribute("onclick", "select()");
 }
