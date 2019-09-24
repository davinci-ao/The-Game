alert("Welcome to The broken game.")
name = prompt("What is your name?")
answer = prompt("Nice to meet you " +name+ ". You have decided to play this game. \n\n 1(Yes i have \n2(No i haven't \n\n type 1 or 2")
if (answer == 1) {
    answer = prompt("You are standing on a dirt road, next to you is a forest.\n\n 1(Go into the forest \n2(go north up the road\n 3(go south down the road")
        if(answer == 1) {
            alert("Ignoring the rumors about the goblins you decide to go into the forest.")
            alert("After a while your suroundings begin to look familiar. \n You are lost.")
            alert("You are wandering aimlessly around in the forest until you hear some noises nearby. Considering you dont have many options you decide to go towards the noise.")
            alert("You notice too late that the noise is coming from the rumored goblins and you dont have anything to fight them off with.")
            alert("You are kidnapped and put inside a gaint vat of water and put above the fire. You are boiled alive. Look on the bright side the goblins have new meal to eat.\n\n GAME OVER")
        }
        if(answer == 2) {
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
                            alert("At last you notice the golbins dancing around the fire.\n Look on the bright side the goblins have a new meal to eat.\n\n GAME OVER")
                        }
                        if (answer == 2) {
                            alert('You continue walking up to road.\n after a while the dirt road changes to a gravel road. "The sign of civilazation" you think to yourself.')
                            answer= prompt("You hear the sound of a horse and wagon aproaching.")
                        }
                        else {
                            alert("invalid answer")
                        }
                }
        }
        else {
            alert("invalid answer")
        }
}
else if (answer == 2) {
    alert("What are you doing here! get out!")
}
else {
    alert("invalid answer")
}