//John Spruijt
//2019

error = false

alert("Welcome to The broken game.")
name = prompt("What is your name?")
answer = prompt("Nice to meet you " +name+ ". You have decided to play this game. \n\n 1(Yes i have \n2(No i haven't \n\n type 1 or 2")
if (answer == 1) {
    console.log("lvl 1 - want to play?");
    
    answer = prompt("You are standing on a dirt road, next to you is a forest.\n\n 1(Go into the forest \n2(go north up the road\n 3(go south down the road")
        if(answer == 1) {
            console.log("lvl 2 - forest")
            alert("Ignoring the rumors about the goblins you decide to go into the forest.")
            alert("After a while your suroundings begin to look familiar. \n You are lost.")
            alert("You are wandering aimlessly around in the forest until you hear some noises nearby. Considering you dont have many options you decide to go towards the noise.")
            alert("You notice too late that the noise is coming from the rumored goblins and you dont have anything to fight them off with.")
            alert("You are kidnapped and put inside a gaint vat of water and put above the fire. You are boiled alive. Look on the bright side the goblins have new meal to eat.\n\n GAME OVER")
            location.reload();
        }
        else if(answer == 2) {
            console.log("lvl 3 - north road")
            alert("you go north up the road.\n")
            alert("After hours of walking you feel like you are walking on a infinitly long road")
            answer = prompt("You begin to feel tired and hungy.\n\n1(Take a break\n2(continue walking")
                if (answer == 1) {
                    console.log("lvl 4 - Break")
                    alert("You decide to take a break.\n You notice a large tree where you can comfortably sit.")
                    alert("You sit on the log for a few hours.")
                    answer = prompt("You are now rested but still hungry. \n you notice some berry bushes nearby.\n\n1(Eat some food\n2(Continue up the road")
                        if (answer == 1) {
                            console.log("lvl 5 - berry bush")
                            alert("Ignoring the advice from everyone who has a shred of knowledge. You decide to eat the random berries you found next to some road.")
                            alert("After eating the first berry you notice that the berries are extremly sweet.")
                            alert("After eating mutliple handfulls you begin to feel sleepy.")
                            alert("You decide to take a nap against the large tree.")
                            alert("You wake up to the burning sensation on your skin.")
                            alert("You notice you are hanging above a fire. You are tied up so you cant escape.")
                            alert("At last you notice the goblins dancing around the fire.\n Look on the bright side the goblins have a new meal to eat.\n\n GAME OVER")
                            location.reload();
                        }
                        else if (answer == 2) {
                            console.log("lvl 6 - gravel road")
                            alert('You continue walking up to road.\n after a while the dirt road changes to a gravel road. "The sign of civilazation" you think to yourself.')
                            answer= prompt("You hear the sound of a horse and wagon aproaching from the south.\n\n1(Hide in a nearby bush \n2(continue walking ignoring the wagon \n3(wave the wagon down.")
                                if (answer == 1){
                                    console.log("lvl 7 - thorn bush")
                                    alert("You hide in a nearby bush. Not knowing it is thorn bush.")
                                    alert("After the wagon passes and you feel like it is far enough for you to come out safely you hurt yourself when getting back up. \n\n You are slightly injured.")
                                    alert("You continue walking up the road. After about half an hour you enter a village.")
                                    answer = prompt("There is an Inn called 'the winking skeever'\n\n1(Go inside the Inn\n2(Walk straight trough the village and continue down the road.")
                                        if (answer == 1) {
                                            console.log("lvl 8 - inside the Inn")
                                            answer = prompt("You go inside the Inn. There is an Inn keeper. \n\n1(Talk to the Inn keeper")
                                                if (answer == 1) {
                                                    console.log("lvl 9 - Inn keeper talk")
                                                    answer = prompt("You talk to the Inn Keeper. \n\n1(Ask about some rumours.\n2(You ask about some work to earn some coin\n3(You ask if they have a bed, you are still tired after all.")
                                                        if (answer == 1) {
                                                            console.log("lvl 10 - Rumours")
                                                            alert("You ask the Inn keeper about some rumours.'The Companions? In Jorrvaskr? They're recruiting new members, from what I hear.'")
                                                            alert("Who are the companions and what is a jorrvaskr you think to yourself.")
                                                            answer = prompt("1(You ask about some work to earn some coin\n2(You ask if they have a bed, you are still tired after all.")
                                                                if (answer == 1) {
                                                                    console.log("lvl 11 - Rumours work")
                                                                    alert("You ask the Inn keeper about some work.\n'You're asking a lot of qeustions aren't you?' The Inn keeper puts his hand on his axe.")
                                                                    answer = prompt("How will you diffuse the situation? \n\n 1(Tell him you don't know who you are and are searching for answers. \n2(Lie and tell you are from noble decent.")
                                                                        if (answer == 1) {
                                                                            console.log("lvl 12 - Angry Inn keeper 1")
                                                                            alert("You chose to tell the truth.'You think im dumb enough to believe that?' The Inn keeper reaches for his axe.")
                                                                            alert("You get hit on the head by the end of the axe.")
                                                                            alert("You wake up with a headache. You are tied up in the middle of a grass field.")
                                                                            alert("You hear the chanting of a wild goblin tribe.")
                                                                            alert("They charge at you and begin taking bites out of you legs while you are struggeling to get free.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                            location.reload();
                                                                        }
                                                                        else if (answer == 2) {
                                                                            console.log("lvl 13 - Angry Inn keeper 2")
                                                                            alert("You lied and told the Inn keeper your from noble decent.'Ha! Nobles wouldnt want to come to this village let alone work for me.' The Inn keeper reaches for his axe.")
                                                                            alert("You get hit on the head by the end of the axe.")
                                                                            alert("You wake up with a headache. You are tied up in the middle of a grass field.")
                                                                            alert("You hear the chanting of a wild goblin tribe.")
                                                                            alert("They charge at you and begin taking bites out of you legs while you are struggeling to get free.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                            location.reload();
                                                                        }
                                                                        else {
                                                                            error = true
                                                                        }
                                                                        
                                                                }
                                                                else if (answer == 2) {
                                                                    console.log("lvl 14 - Bed fail")
                                                                    alert("You ask if they have a bed available. 'No sorry, we are full. If you asked when you came in we still had a bed available.'")
                                                                    alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                    alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                    alert("Before you can react they are already at your legs taking bites out of you.")
                                                                    alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                    location.reload();
                                                                }
                                                                else {
                                                                    error = true
                                                                }
                                                        }
                                                        else if (answer == 2) {
                                                            console.log("lvl 15 - wood chopping")
                                                            answer = prompt("You ask the Inn keeper about some work.'Work? You could chop some wood for the fire for some coin.\n\n1(Chop some wood\n2(Decline")
                                                                if (answer == 1) {
                                                                    console.log("lvl 16 - work decline")
                                                                    alert("You chop some wood. Then you go back inside.")
                                                                    answer = prompt("You return to the Inn keeper and exchange the wood for coin.\n\n1(Ask for a bed\n2(Go back outside")
                                                                        if (answer == 1) {
                                                                            console.log("lvl 17 - bed fail 2")
                                                                            alert("You ask for a bed. 'No sorry, we are full. If you asked when you came in we still had beds available.'")
                                                                            alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                            alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                            location.reload();
                                                                        }
                                                                        else if (answer == 2) {
                                                                            console.log("lvl 18 - grass field")
                                                                            alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                            alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                            location.reload();
                                                                        }
                                                                        else {
                                                                            error = true
                                                                        }
                                                                }
                                                                else if (answer == 2) {
                                                                    console.log("lvl 19 - grass field 2")
                                                                    alert("You decline the opportunity of work, but you are still very tired so you decide to go outside and lay down in a grass field.")
                                                                    alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                            location.reload();
                                                                }
                                                                else {
                                                                    error = true
                                                                }

                                                        }
                                                        else if (answer == 3) {
                                                            console.log("lvl 20 - bed")
                                                            alert("You chose to ask for a bed. 'What does this look like? the temple of mara?'")
                                                            alert("You don't have any money. It seems like you will need to sleep outside.")
                                                            alert("'You know what? How about you chop some wood for me, and I'll keep a room available.'\nThis is a very friendly Inn keeper.")
                                                            alert("You chop some wood just outside the Inn. After you have quite a stack you head back inside to talk to the Inn keeper.")
                                                            alert("'Back already? I've made a bed ready for you.' \n\nYou go to bed and sleep trough the night.")
                                                            answer = prompt("'Hey wake up! You aren't safe here. You need to run!' you don't recognize the voice \n\n1(Listen to the voice and run\n2(Don't listen to the voice and get angry at them\n3(Don't do anything")
                                                                if (answer == 1) {
                                                                    console.log("lvl 21 - run")
                                                                    alert("You listen to the voice and run out of your room.")
                                                                    alert("You notice that the village is being attacked by goblins.")
                                                                    alert("You run on the road you were before further towards the north. Hoping on someone waiting for you.")
                                                                    alert("You see a bunch of people in panic. Families paniced trying to find each other. Fighters and gaurds on the lookout for any sudden movements.")
                                                                    answer = prompt("Do you aproach the group of people or do you run past them. \n\n1(You aproach the group of people\n2(You run past the group")
                                                                        if (answer == 1) {
                                                                            console.log("lvl 22 - group of people")
                                                                            answer = prompt("You aproach the group of people. 'The goblins attacked when entered town, you bring evil with you!' screams the Inn keeper\n\n1(Tell them that you want to help them fight the goblins off\n2(Tell them that it isnt your fault and you dont have to deal with this kind of negativity")
                                                                                if (answer == 1) {
                                                                                    console.log("lvl 23 - talk to people")
                                                                                    answer = prompt("'hmm, alright then. Pick up this sword and help us take those bastards down. \n\n1(Pick up the sword and help them\n2(change your mind and run past them")
                                                                                        if (answer == 1) {
                                                                                            console.log("lvl 24 - sword")
                                                                                            alert("You pick up the sword and walk with the group back towards the village.")
                                                                                            answer = prompt("Out of nowhere you see a goblin standing on the road in front of you with a throwing spear.\n\n1(Duck!\n2(Try to deflect the spear")
                                                                                                if (answer == 1) {
                                                                                                    console.log("lvl 25 - Cute ducks")
                                                                                                    alert("Ducks are cute, but how did you think a duck would be able to help you in this situation. You get hit by the spear and die quite quickly of your injury\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                                    location.reload();
                                                                                                }
                                                                                                else if (answer == 2) {
                                                                                                    console.log("lvl 26 - deflect")
                                                                                                    alert("You steady yourself ready to deflect the spear. Before the spear gets near you someone with a shield jumps in front of you and blocks the spear.\nYou are saved from the spear by a guy with a shield.")
                                                                                                    answer = prompt("As you charge inside the village with your group of people.\n Near the Inn you see a goblin with something on his head that looks like a crown. \n\n1(You charge towards the leader\n2(You play it safe")
                                                                                                        if (answer == 1) {
                                                                                                            console.log("lvl 27 - goblin leader")
                                                                                                            alert("You charge towards the leader with your shield buddy.")
                                                                                                            alert("Together you take on the leader of the goblins.\n after a long battle you defeat the leader of the goblins")
                                                                                                            alert("The smaller goblins scatter back to where they came from.")
                                                                                                            alert("The Inn keeper walks towards you and says 'You really did it, you killed the goblin leader.'")
                                                                                                            alert("'You will be able to stay in my Inn forever and for free.'\n\n You won the battle and are considered the village hero.\n\nYOU BECAME THE TOWN HERO")
                                                                                                        }
                                                                                                        else if (answer == 2){
                                                                                                            console.log("lvl 28 - scaredy cat")
                                                                                                            alert("You play is safe and take the smaller goblins on like the scaredy cat you are "+name+".")
                                                                                                            alert("After a long and hard battle you get surrounded by goblins. Like the milkdrinker you are you die by the smaller goblins.\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                                            location.reload();
                                                                                                        }
                                                                                                        else {
                                                                                                            error = true
                                                                                                        }
                                                                                                }
                                                                                                else {
                                                                                                    error = true
                                                                                                }
                                                                                        }
                                                                                        else if (answer == 2) {
                                                                                            console.log("lvl 29 - run away")
                                                                                            alert("You run past the group of people thinking to yourself you dont have to be the fastest as long as you are faster then the slowest.")
                                                                                            alert("This apears to be false though, considering goblins are coming from the sides of the road and you can see a group of them standing further up the road.")
                                                                                            alert("You get killed by the massive amount of goblins. \nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                            location.reload();
                                                                                        }
                                                                                        else {
                                                                                            error = true
                                                                                        }
                                                                                }
                                                                                else if (answer == 2) {
                                                                                    console.log("lvl 30 - run away 2")
                                                                                    alert("You run past the group of people thinking to yourself you dont have to be the fastest as long as you are faster then the slowest.")
                                                                                    alert("This apears to be false though, considering goblins are coming from the sides of the road and you can see a group of them standing further up the road.")
                                                                                    alert("You get killed by the massive amount of goblins. \nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                    location.reload();
                                                                                }
                                                                                else {
                                                                                    error = true
                                                                                }
                                                                        }
                                                                        else if (answer == 2) {
                                                                            console.log("lvl 31 - run away 3")
                                                                            alert("You run past the group of people thinking to yourself you dont have to be the fastest as long as you are faster then the slowest.")
                                                                            alert("This apears to be false though, considering goblins are coming from the sides of the road and you can see a group of them standing further up the road.")
                                                                            alert("You get killed by the massive amount of goblins. \nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                            location.reload();
                                                                        }
                                                                        else {
                                                                            error = true
                                                                        }
                                                                }
                                                                else if (answer == 2) {
                                                                    console.log("lvl 32 - angry voice")
                                                                    alert("You get angry at the voice and demand to know who it is.")
                                                                    alert("'I just wanted to help you, but it seems you dont want my help. Enjoy being eaten by goblins "+name)
                                                                    alert("goblins charge trough the door and you get taken out by suprise.\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                    location.reload();
                                                                }
                                                                else if (answer == 3) {
                                                                    console.log("lvl 33 - sleep")
                                                                    alert("You ignore the voice and turn around in your bed to sleep some more. You are killed by goblins in your sleep.\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                    location.reload();
                                                                }
                                                                else {
                                                                    error = true
                                                                }
                                                        }
                                                        else {
                                                            error = true
                                                        }
                                                }
                                                else {
                                                    error = true
                                                }

                                        }
                                        else if (answer == 2) {
                                            console.log("lvl 34 - ignore vilalge")
                                            alert("You walk trough the village without stoping even though you are still quite hungry.")
                                            alert("after walking a while you come across a knocked over wagon with supplies in it.\nYou look around but there is nobody in sight.")
                                            answer = prompt("You could take some of the supplies or keep walking. \n\n1(Take supplies\n2(Keep walking.")
                                                if (answer == 1) {
                                                    console.log("lvl 35 - supplies")
                                                    alert("You rummage trough the supplies. You find some food and a bit of rope")
                                                    alert("While rummaging trough the supplies you don't notice the goblins who knocked the wagon over sneaking up on you.")
                                                    alert("You are killed by the goblins and taken to their leader for dinner.\n\nLook on the bright side the leader goblin have a new meal to eat.\n\nGAME OVER")
                                                    location.reload();
                                                }
                                                if (answer == 2) {
                                                    console.log("lvl 36 - hunger")
                                                    alert("You keep walking even though you haven't eaten anything in a long time.")
                                                    alert("After a while you cant walk anymore and you die of hunger.\n\nGAME OVER")
                                                }
                                        }
                                        else {
                                            error = true
                                        }
                                    
                                }
                                else if (answer == 2) {
                                    console.log("lvl 37 - ignore wagon")
                                    alert("You ignore the wagon and continue walking.")
                                    alert("When you get near the wagon, you look inside to see who is steering it. \n\nVery quickly you realise that a goblin is steering the wagon.")
                                    alert("Multiple goblins jump out of of the back of hte wagon and start charging at you while chanting some words you cant understand.")
                                    alert("While taken by suprise you get killed quite easily by the goblins. \n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                    location.reload();
                                }
                                else if (answer == 3) {
                                    console.log("lvl 38 - wave wagon")
                                    alert("You try to wave down the wagon. It doesnt go quite as planned as there are la lot of goblins in the back of the wagon, but because of the distance between you and the wagon you have enough time to run to safety.")
                                    alert("You realise there are enough goblins and weapons on that wagon to wage war.")
                                    alert("You start running away from them by running towards the north.")
                                    alert("Since you are quite a bit bigger then goblins you outrun them quite easily.")
                                    answer = prompt("After a while you reach the village. \n\n1(You can warn the village people \n2(You can also ignore them")
                                        if (answer == 1) {
                                            console.log("lvl 39 - warn people")
                                            alert("You try to warn the people of the village but they won't listen. They think you are lying to their faces.")
                                            alert("You hear the chanting of the goblins and you know that they are coming to attack.")
                                            alert("the village people realise too late that you weren't lying to them and they all get slaughterd. \nYou are kidnapped and put on their")
                                            alert("after a couple days of laying there you get killed by one of the goblins and used as food for their leader.\n\nLook on the bright side the leader goblin has a new meal to eat.\n\nGAME OVER")
                                            location.reload();
                                        }
                                        else if(answer == 2) {
                                            console.log("lvl 40 - let village to die")
                                            alert("You run past the village thinking to yourself you dont have to be the fastest as long as you are faster then the slowest.")
                                            alert("While running away from the village and the goblins you notice another wagon of goblins coming in from the north. You are killed by the second wagon of goblins.\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                            location.reload();
                                        }
                                        else{
                                            error = true
                                        }
                                }
                                else {
                                    error = true
                                }
                        }
                        else {
                            error = true
                        }
                }
                else if (answer == 2) {
                    console.log("lvl 40 - refusing to take a break")
                    alert("You continue walking even though you are tired and hungry.")
                    alert("Because of those reasons you are less alert.\nYou step in a bear trap and get stuck.")
                    alert("While you are stuck you hear some bushes rustle next to you.")
                    alert("Goblins apear and they start dragging you to their camp. you are then eaten alive by the goblins. \n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                    location.reload();
                }
                else {
                    error = true
                }
        }
        else if (answer == 3) {
            console.log("lvl 41 - south road")
            alert("You head down south of the road.")
            alert("After a while of walking you come across a tiny little house with an old lady standing outside trying to pick apples from an apple tree.")
            alert("You Help the old lady.") 
                    console.log("lvl 42 - old lady")
                    alert("You ask the old lady if you can help her with anything. She replies with that you could pick a few apples for her because she wants to bake apple pies.")
                    answer = prompt("How many apples do you pick for the old lady?")
                        if (answer <0) {
                            console.log("lvl 42 - negative apples")
                            error = true
                        }
                        else if (answer == 0) {
                            console.log("lvl 42 - zero apples")
                            alert("You didn't pick any apples.")
                            alert("The old lady is angry and stabs you with a fork until you die.\n\nGAME OVER")
                            location.reload();
                        }
                        else if (answer <5) {
                            console.log("lvl 42 - couple apples")
                            alert("You only picked a couple apples. Not nearly enough for the old lady.")
                            alert("She gets angry and stabs you with a poinsonus blade.\n\nGAME OVER")
                            location.reload();
                        }
                        else if (answer >=5) {
                            console.log("lvl 42 - five or more apples")
                            if (answer <10) {
                                console.log("lvl 42 - less then ten apples")
                                alert("You picked enough apples for the old lady, and she bakes a apple pie for you.")
                                alert("You start eating the apple pie the old lady made. \nQuite quickly you begin to feel unwell and drop to the ground clutching your stomach.\n\nYou have been poisoned by an old lady \n\nGAME OVER")
                                location.reload();
                            }
                            else if (answer >=10) {
                                console.log("lvl 42 - ten or more apples")
                                if (answer <20) {
                                    console.log("lvl 42 - less then 20 apples")
                                    alert("You picked more then enough apples of the old lady. She is very gratefull and bakes you a apple pie.")
                                    alert("You start eating the apple pie the old lady made. \nQuite quickly you begin to feel unwell and drop to the ground clutching your stomach.\n\nYou have been poisoned by an old lady \n\nGAME OVER")
                                    location.reload();
                                }
                                else if (answer >=20) {
                                    console.log("lvl 42 - twenty or more apples")
                                    alert("There are not that many apples in the apple tree")
                                    alert("You picked more then enough apples of the old lady. She is very gratefull and bakes you a apple pie.")
                                    alert("You start eating the apple pie the old lady made. \nQuite quickly you begin to feel unwell and drop to the ground clutching your stomach.\n\nYou have been poisoned by an old lady \n\nGAME OVER")
                                    location.reload();
                                }
                                
                            }
                            
                        }
                        else {
                            error = true
                        }
            location.reload();
        }
        else {
            error = true
        }
}
else if (answer == 2) {
    console.log("lvl 1 - get out")
    alert("What are you doing here! get out!")
    location.reload();
}
else {
    error = true
}
if (error == true){
    console.log("invalid answer")
    alert("invalid answer")
    location.reload();
}