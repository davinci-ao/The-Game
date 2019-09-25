//John Spruijt
//2019

error = false

alert("Welcome to The broken game.")
name = prompt("What is your name?")
answer = prompt("Nice to meet you " +name+ ". You have decided to play this game. \n\n 1(Yes i have \n2(No i haven't \n\n type 1 or 2")
if (answer == 1) {
    console.log("lvl 1");
    
    answer = prompt("You are standing on a dirt road, next to you is a forest.\n\n 1(Go into the forest \n2(go north up the road\n 3(go south down the road")
        if(answer == 1) {
            alert("Ignoring the rumors about the goblins you decide to go into the forest.")
            alert("After a while your suroundings begin to look familiar. \n You are lost.")
            alert("You are wandering aimlessly around in the forest until you hear some noises nearby. Considering you dont have many options you decide to go towards the noise.")
            alert("You notice too late that the noise is coming from the rumored goblins and you dont have anything to fight them off with.")
            alert("You are kidnapped and put inside a gaint vat of water and put above the fire. You are boiled alive. Look on the bright side the goblins have new meal to eat.\n\n GAME OVER")
        }
        else if(answer == 2) {
            alert("you go north up the road.\n")
            alert("After hours of walking you feel like you are walking on a infinitly long road")
            answer = prompt("You begin to feel tired and hungy.\n\n1(Take a break\n2(continue walking")
                if (answer == 1) {
                    alert("You decide to take a break.\n You notice a large tree where you can comfortably sit.")
                    alert("You sit on the log for a few hours.")
                    answer = prompt("You are now rested but still hungry. \n you notice some berry bushes nearby.\n\n1(Eat some food\n2(Continue up the road")
                        if (answer == 1) {
                            alert("Ignoring the advice from everyone who has a shred of knowledge. You decide to eat the random berries you found next to some road.")
                            alert("After eating the first berry you notice that the berries are extremly sweet.")
                            alert("After eating mutliple handfulls you begin to feel sleepy.")
                            alert("You decide to take a nap against the large tree.")
                            alert("You wake up to the burning sensation on your skin.")
                            alert("You notice you are hanging above a fire. You are tied up so you cant escape.")
                            alert("At last you notice the goblins dancing around the fire.\n Look on the bright side the goblins have a new meal to eat.\n\n GAME OVER")
                        }
                        else if (answer == 2) {
                            alert('You continue walking up to road.\n after a while the dirt road changes to a gravel road. "The sign of civilazation" you think to yourself.')
                            answer= prompt("You hear the sound of a horse and wagon aproaching from the south.\n\n1(Hide in a nearby bush \n2(continue walking ignoring the wagon \n3(wave the wagon down.")
                                if (answer == 1){
                                    alert("You hide in a nearby bush. Not knowing it is thorn bush.")
                                    alert("After the wagon passes and you feel like it is far enough for you to come out safely you hurt yourself when getting back up. \n\n You are slightly injured.")
                                    alert("You continue walking up the road. After about half an hour you enter a village.")
                                    answer = prompt("There is an Inn called 'the winking skeever'\n\n1(Go inside the Inn\n2(Walk straight trough the village and continue down the road.")
                                        if (answer == 1) {
                                            answer = prompt("You go inside the Inn. There is a Inn keeper and a drunk fellow sitting next to the fire. \n\n1(Talk to the Inn keeper\n2(Talk to the drunk fellow")
                                                if (answer == 1) {
                                                    answer = prompt("You talk to the Inn Keeper. \n\n1(Ask about some rumours.\n2(You ask about some work to earn some coin\n3(You ask if they have a bed, you are still tired after all.")
                                                        if (answer == 1) {
                                                            alert("You ask the Inn keeper about some rumours.'The Companions? In Jorrvaskr? They're recruiting new members, from what I hear.'")
                                                            alert("Who are the companions and what is a jorrvaskr you think to yourself.")
                                                            answer = prompt("1(You ask about some work to earn some coin\n2(You ask if they have a bed, you are still tired after all.")
                                                                if (answer == 1) {
                                                                    alert("You ask the Inn keeper about some work.\n'You're asking a lot of qeustions aren't you?' The Inn keeper puts his hand on his axe.")
                                                                    answer = prompt("How will you diffuse the situation? \n\n 1(Tell him you don't know who you are and are searching for answers. \n2(Lie and tell you are from noble decent.")
                                                                        if (answer == 1) {
                                                                            alert("You chose to tell the truth.'You think im dumb enough to believe that?' The Inn keeper reaches for his axe.")
                                                                            alert("You get hit on the head by the end of the axe.")
                                                                            alert("You wake up with a headache. You are tied up in the middle of a grass field.")
                                                                            alert("You hear the chanting of a wild goblin tribe.")
                                                                            alert("They charge at you and begin taking bites out of you legs while you are struggeling to get free.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                        }
                                                                        else if (answer == 2) {
                                                                            alert("You lied and told the Inn keeper your from noble decent.'Ha! Nobles wouldnt want to come to this village let alone work for me.' The Inn keeper reaches for his axe.")
                                                                            alert("You get hit on the head by the end of the axe.")
                                                                            alert("You wake up with a headache. You are tied up in the middle of a grass field.")
                                                                            alert("You hear the chanting of a wild goblin tribe.")
                                                                            alert("They charge at you and begin taking bites out of you legs while you are struggeling to get free.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                        }
                                                                        else {
                                                                            error = true
                                                                        }
                                                                        
                                                                }
                                                                else if (answer == 2) {
                                                                    alert("You ask if they have a bed available. 'No sorry, we are full. If you asked when you came in we still had a bed available.'")
                                                                    alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                    alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                    alert("Before you can react they are already at your legs taking bites out of you.")
                                                                    alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                }
                                                                else {
                                                                    error = true
                                                                }
                                                        }
                                                        else if (answer == 2) {
                                                            answer = prompt("You ask the Inn keeper about some work.'Work? You could chop some wood for the fire for some coin.\n\n1(Chop some wood\n2(Decline")
                                                                if (answer == 1) {
                                                                    alert("You chop some wood. Then you go back inside.")
                                                                    answer = prompt("You return to the Inn keeper and exchange the wood for coin.\n\n1(Ask for a bed\n2(Go back outside")
                                                                        if (answer == 1) {
                                                                            alert("You ask for a bed. 'No sorry, we are full. If you asked when you came in we still had beds available.'")
                                                                            alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                            alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                        }
                                                                        else if (answer == 2) {
                                                                            alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                            alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                        }
                                                                        else {
                                                                            error = true
                                                                        }
                                                                }
                                                                else if (answer == 2) {
                                                                    alert("You decline the opportunity of work, but you are still very tired so you decide to go outside and lay down in a grass field.")
                                                                    alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                }
                                                                else {
                                                                    error = true
                                                                }

                                                        }
                                                        else if (answer == 3) {
                                                            alert("You chose to ask for a bed. 'What does this look like? the temple of mara?'")
                                                            alert("You don't have any money. It seems like you will need to sleep outside.")
                                                            alert("'You know what? How about you chop some wood for me, and I'll keep a room available.'\nThis is a very friendly Inn keeper.")
                                                            alert("You chop some wood just outside the Inn. After you have quite a stack you head back inside to talk to the Inn keeper.")
                                                            alert("'Back already? I've made a bed ready for you.' \n\nYou go to bed and sleep trough the night.")
                                                            answer = prompt("'Hey wake up! You aren't safe here. You need to run!' you don't recognize the voice \n\n1(Listen to the voice and run\n2(Don't listen to the voice and get angry at them\n3(Don't do anything")
                                                                if (answer == 1) {
                                                                    alert("You listen to the voice and run out of your room.")
                                                                    alert("You notice that the village is being attacked by goblins.")
                                                                    alert("You run on the road you were before further towards the north. Hoping on someone waiting for you.")
                                                                    alert("You see a bunch of people in panic. Families paniced trying to find each other. Fighters and gaurds on the lookout for any sudden movements.")
                                                                    answer = prompt("Do you aproach the group of people or do you run past them. \n\n1(You aproach the group of people\n2(You run past the group")
                                                                        if (answer == 1) {
                                                                            answer = prompt("You aproach the group of people. 'The goblins attacked when entered town, you bring evil with you!' screams the Inn keeper\n\n1(Tell them that you want to help them fight the goblins off\n2(Tell them that it isnt your fault and you dont have to deal with this kind of negativity")
                                                                                if (answer == 1) {
                                                                                    answer = prompt("'hmm, alright then. Pick up this sword and help us take those bastards down. \n\n1(Pick up the sword and help them\n2(change your mind and run past them")
                                                                                        if (answer == 1) {
                                                                                            alert("You pick up the sword and walk with the group back towards the village.")
                                                                                            answer = prompt("Out of nowhere you see a goblin standing on the road in front of you with a throwing spear.\n\n1(Duck!\n2(Try to deflect the spear")
                                                                                                if (answer == 1) {
                                                                                                    alert("Ducks are cute, but how did you think a duck would be able to help you in this situation. You get hit by the spear and die quite quickly of your injury\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                                }
                                                                                                else if (answer == 2) {
                                                                                                    alert("You steady yourself ready to deflect the spear. Before the spear gets near you someone with a shield jumps in front of you and blocks the spear.\nYou are saved from the spear by a guy with a shield.")
                                                                                                    answer = prompt("As you charge inside the village with your group of people.\n Near the Inn you see a goblin with something on his head that looks like a crown. \n\n1(You charge towards the leader\n2(You play it safe")
                                                                                                        if (answer == 1) {
                                                                                                            alert("You charge towards the leader with your shield buddy.")
                                                                                                            alert("Together you take on the leader of the goblins.\n after a long battle you defeat the leader of the goblins")
                                                                                                            alert("The smaller goblins scatter back to where they came from.")
                                                                                                            alert("The Inn keeper walks towards you and says 'You really did it, you killed the goblin leader.'")
                                                                                                            alert("'You will be able to stay in my Inn forever and for free.'\n\n You won the battle and are considered the village hero.\n\nYOU BECAME THE TOWN HERO")
                                                                                                        }
                                                                                                        else if (answer == 2){
                                                                                                            alert("You play is safe and take the smaller goblins on like the scaredy cat you are "+name+".")
                                                                                                            alert("After a long and hard battle you get surrounded by goblins. Like the milkdrinker you are you die by the smaller goblins.\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
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
                                                                                            alert("You run past the group of people thinking to yourself you dont have to be the fastest as long as you are faster then the slowest.")
                                                                                            alert("This apears to be false though, considering goblins are coming from the sides of the road and you can see a group of them standing further up the road.")
                                                                                            alert("You get killed by the massive amount of goblins. \nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                        }
                                                                                        else {
                                                                                            error = true
                                                                                        }
                                                                                }
                                                                                else if (answer == 2) {
                                                                                    alert("You run past the group of people thinking to yourself you dont have to be the fastest as long as you are faster then the slowest.")
                                                                                    alert("This apears to be false though, considering goblins are coming from the sides of the road and you can see a group of them standing further up the road.")
                                                                                    alert("You get killed by the massive amount of goblins. \nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                }
                                                                                else {
                                                                                    error = true
                                                                                }
                                                                        }
                                                                        else if (answer == 2) {
                                                                            alert("You run past the group of people thinking to yourself you dont have to be the fastest as long as you are faster then the slowest.")
                                                                            alert("This apears to be false though, considering goblins are coming from the sides of the road and you can see a group of them standing further up the road.")
                                                                            alert("You get killed by the massive amount of goblins. \nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                        }
                                                                        else {
                                                                            error = true
                                                                        }
                                                                }
                                                                else if (answer == 2) {
                                                                    alert("You get angry at the voice and demand to know who it is.")
                                                                    alert("'I just wanted to help you, but it seems you dont want my help. Enjoy being eaten by goblins "+name)
                                                                    alert("goblins charge trough the door and you get taken out by suprise.\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                }
                                                                else if (answer == 3) {
                                                                    alert("You ignore the voice and turn around in your bed to sleep some more. You are killed by goblins in your sleep.\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
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
                                                    alert("You talk to the drunk fellow. He says there is a buried treasure in the forest and he knows where to find it.")
                                                    answer = prompt("He says he will tell you where it is if you engage in a drinking contest with him. \n\n1(Engage in the drinking contest\n2(decline")
                                                        if (answer == 1) {
                                                            alert("You accept his invitation to the drinking contest.")
                                                            alert("You chug drink afet drink with the drunk fellow.")
                                                            answer = prompt("You are so drunk you fall unconscious.\n\nYou wake up in a bed you don't reconise with a woman next to you. \n\n1(Ask the woman if she remembers what happend\n2(Go outside to search for clues as to what happend.")
                                                        }
                                                        else if (answer == 2) {
                                                            answer = prompt("You decline the drinking contest. \n\n1(Talk to the Inn keeper")
                                                                if (answer == 1) {
                                                                    answer = prompt("You talk to the Inn Keeper. \n\n1(Ask about some rumours.\n2(You ask about some work to earn some coin\n3(You ask if they have a bed, you are still tired after all.")
                                                                        if (answer == 1) {
                                                                            alert("You ask the Inn keeper about some rumours.'The Companions? In Jorrvaskr? They're recruiting new members, from what I hear.'")
                                                                            alert("Who are the companions and what is a jorrvaskr you think to yourself.")
                                                                            answer = prompt("1(You ask about some work to earn some coin\n2(You ask if they have a bed, you are still tired after all.")
                                                                                    if (answer == 1) {
                                                                                        alert("You ask the Inn keeper about some work.\n'You're asking a lot of qeustions aren't you?' The Inn keeper puts his hand on his axe.")
                                                                                        answer = prompt("How will you diffuse the situation? \n\n 1(Tell him you don't know who you are and are searching for answers. \n2(Lie and tell you are from noble decent.")
                                                                                            if (answer == 1) {
                                                                                                alert("You chose to tell the truth.'You think im dumb enough to believe that?' The Inn keeper reaches for his axe.")
                                                                                                alert("You get hit on the head by the end of the axe.")
                                                                                                alert("You wake up with a headache. You are tied up in the middle of a grass field.")
                                                                                                alert("You hear the chanting of a wild goblin tribe.")
                                                                                                alert("They charge at you and begin taking bites out of you legs while you are struggeling to get free.")
                                                                                                alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                                    }
                                                                                            else if (answer == 2) {
                                                                                                alert("You lied and told the Inn keeper your from noble decent.'Ha! Nobles wouldnt want to come to this village let alone work for me.' The Inn keeper reaches for his axe.")
                                                                                                alert("You get hit on the head by the end of the axe.")
                                                                                                alert("You wake up with a headache. You are tied up in the middle of a grass field.")
                                                                                                alert("You hear the chanting of a wild goblin tribe.")
                                                                                                alert("They charge at you and begin taking bites out of you legs while you are struggeling to get free.")
                                                                                                alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                                    }
                                                                                            else {
                                                                                                error = true
                                                                                                }
                                                                                    }
                                                                        }
                                                                        else if (answer == 2){
                                                                            answer = prompt("You ask the Inn keeper about some work.'Work? You could chop some wood for the fire for some coin.\n\n1(Chop some wood\n2(Decline")
                                                                                if (answer == 1) {
                                                                                    alert("You chop some wood. Then you go back inside.")
                                                                                    answer = prompt("You return to the Inn keeper and exchange the wood for coin.\n\n1(Ask for a bed\n2(Go back outside")
                                                                                        if (answer == 1) {
                                                                                            alert("You ask for a bed. 'No sorry, we are full. If you asked when you came in we still had beds available.'")
                                                                                            alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                                            alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                        }
                                                                                        else if (answer == 2) {
                                                                                            alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                                            alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                                                                        }
                                                                                        else {
                                                                                            error = true
                                                                                        }
                                                                                }
                                                                        }
                                                                        else if (answer == 3) {
                                                                            alert("You ask if they have a bed available. 'No sorry, we are full. If you asked when you came in we still had a bed available.'")
                                                                            alert("You feel like you cant stay awake much longer, so you go outside and lie down in a grass field ")
                                                                            alert("You wake up to the sound of the chanting of a wild goblin tribe.")
                                                                            alert("Before you can react they are already at your legs taking bites out of you.")
                                                                            alert("You succomb to your injuries.\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
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
                                                else {
                                                    error = true
                                                }

                                        }
                                        else if (answer == 2) {
                                            alert("You walk trough the village without stoping even though you are still quite hungry.")
                                            alert("after walking a while you come across a knocked over wagon with supplies in it.\nYou look around but there is nobody in sight.")
                                            answer = prompt("You could take some of the supplies or keep walking. \n\n1(Take supplies\n2(Keep walking.")
                                                if (answer == 1) {
                                                    alert("You rummage trough the supplies. You find some food and a bit of rope")
                                                    alert("While rummaging trough the supplies you don't notice the goblins who knocked the wagon over sneaking up on you.")
                                                    alert("You are killed by the goblins and taken to their leader for dinner.\n\nLook on the bright side the leader goblin have a new meal to eat.\n\nGAME OVER")
                                                }
                                        }
                                        else {
                                            error = true
                                        }
                                    
                                }
                                else if (answer == 2) {
                                    alert("You ignore the wagon and continue walking.")
                                    alert("When you get near the wagon, you look inside to see who is steering it. \n\nVery quickly you realise that a goblin is steering the wagon.")
                                    alert("Multiple goblins jump out of of the back of hte wagon and start charging at you while chanting some words you cant understand.")
                                    alert("While taken by suprise you get killed quite easily by the goblins. \n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                                }
                                else if (answer == 3) {
                                    alert("You try to wave down the wagon. It doesnt go quite as planned as there are la lot of goblins in the back of the wagon, but because of the distance between you and the wagon you have enough time to run to safety.")
                                    alert("You realise there are enough goblins and weapons on that wagon to wage war.")
                                    alert("You start running away from them by running towards the north.")
                                    alert("Since you are quite a bit bigger then goblins you outrun them quite easily.")
                                    answer = prompt("After a while you reach the village. \n\n1(You can warn the village people \n2(You can also ignore them")
                                        if (answer == 1) {
                                            alert("You try to warn the people of the village but they won't listen. They think you are lying to their faces.")
                                            alert("You hear the chanting of the goblins and you know that they are coming to attack.")
                                            alert("the village people realise too late that you weren't lying to them and they all get slaughterd. \nYou are kidnapped and put on their")
                                            alert("after a couple days of laying there you get killed by one of the goblins and used as food for their leader.\n\nLook on the bright side the leader goblin has a new meal to eat.\n\nGAME OVER")
                                        }
                                        else if(answer == 2) {
                                            alert("You run past the village thinking to yourself you dont have to be the fastest as long as you are faster then the slowest.")
                                            alert("While running away from the village and the goblins you notice another wagon of goblins coming in from the north. You are killed by the second wagon of goblins.\n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
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
                    alert("You continue walking even though you are tired and hungry.")
                    alert("Because of those reasons you are less alert.\nYou step in a bear trap and get stuck.")
                    alert("While you are stuck you hear some bushes rustle next to you.")
                    alert("Goblins apear and they start dragging you to their camp. you are then eaten alive by the goblins. \n\nLook on the bright side the goblins have a new meal to eat.\n\nGAME OVER")
                }
                else {
                    error = true
                }
        }
        else if (answer == 3) {
            alert("You head down south of the road.")
            alert("This path hasn't been programmed yet get out.")
        }
        else {
            error = true
        }
}
else if (answer == 2) {
    alert("What are you doing here! get out!")
}
else {
    error = true
}

if (error == true){
    alert("invalid answer")
}
//Look on the bright side the goblins have a new meal to eat.\n\nGAME OVER