//My name is Razvan Bogaciu
//Da Vinci College
//Opdracht Javascript Game
var money = false

alert('Welcome to the Shitty Life Game !'); // the name of my game

awnser = alert ("You live in Gangcity , the most dangerous city in the world")

awnser = alert ("You live with your father and your new step-mother and your step-sister ")

awnser = alert ("In this game you will come to find different paths to follow with different endings")

awnser = alert ("Now i've told you enough about the game tell us about yourself ")

name = prompt('What is your name'); //the name of the character

age = prompt ("How old are you?") //the age of the character with restrictions to buying weed under 18

gender = prompt ("Are you a boy a girl or a transgender?"); // the gender of the character which doesn't really influence the story 

if (gender == "boy") 
{
awnser = prompt ('Welcome ' + name + " You are a " + gender + ". You are "+ age +" years old . \n You are broke and have no money \n You are currently on a sidewalk and have 3 choices. \n\n 1) You can go to the shopping mall \n 2) You can go home \n 3) You can go to school ")
}

else if (gender == "girl") 
{
awnser = prompt ('Welcome ' + name + " You are a " + gender + ".\n You are broke and have no money \n You are currently on a sidewalk and have 3 choices. \n\n 1) You can go to the shopping mall \n 2) You can go home \n 3) You can go to school ")
}

else if (gender == "transgender") 
{
    awnser = prompt ('Welcome ' + name + " You are a " + gender + ".\n You are broke and have no money \n You are currently on a sidewalk and have 3 choices. \n\n 1) You can go to the shopping mall \n 2) You can go home \n 3) You can go to school ")
    }
else alert ("Your gender is invalid , try again.")

if (awnser == 1 ) //going to the shopping mall
{
awnser = alert ("You encountered a group of gangsters robbing a store and quickly ran away to the shopping mall.")

awnser = prompt ("You go to the shopping mall but you are broke \n\n 1) Go back \n 2) Try and steal from the Wibra \n 3) Rob a homeless person \n 4) go to the weed store to buy weed")

if (awnser == 1) //go back on the sidewalk
{
    awnser = prompt('Welcome ' + name + ' You are currently on a sidewalk and have 3 choices \n\n 1) You can go to the shopping mall \n 2) You can go home \n 3) You can go to school ') 
}
        if (awnser == 1) 
        {
            alert("You died from exaustion \n\n GAME OVER#2") //death nr 2

            window.location = window.location
         

        }

        else if (awnser == 2){ //stealing from the wibra
            awnser =alert ("You try to steal some valueble items as sneaky as possible ")

            awnser =alert ("You try hide the items as much as possible and hide them in your crappy jacket ")

            awnser =alert ("The metal doors detected the stolen items and the worker called the police")

            awnser =alert ("You got caught by the police and went to jail for stealing \n\n GAME OVER #3")

            window.location = window.location
        } 

        else if (awnser == 4){ // going to the weed store
            awnser = alert ("you go to the weed store") 
        
            if (age >17 ) { // the age restriction to buying weed
        awnser = alert ("you have gotten weed and became really high you get attacked by a imaginary dragon and die \n\n GAME OVER #7")

        window.location = window.location
         }  
         
        else if (age <18) 
        {
        awnser = alert  ("you are not old enough to buy weed, you get arrested for trying to buy drugs underage \n\n GAM OVER #8")

        window.location = window.location
        }

        else {
            alert ("your age is incorrect , try again") // error message when ur age is not a number

            window.location = window.location
        }
        }

        else if (awnser == 3){ //rob the homeless man
            awnser = prompt ("You try to rob the homeless man unarmed but he pulls out his 6 foot long katana and charges at you, what do you do ? \n\n 1) charge at him like a fearless warrior \n 2) try and evade all his attacks like a ninja")
            
            if (awnser == 1) { // charge at the homeless man
                awnser =alert ("You decide to charge at him , and get your left hand sliced off.\n You fall to your knees")

                awnser =alert ("You scream in agony as the pain spreads troughout your entire body ")

                awnser =alert ("The homeless person taunts you and asks you if thats all you can do")

                awnser =alert ("The homeless person introduces himself as Big Papi , the biggest mob boss in the city ")

                awnser =alert ("He tells you that you will never be able to beat him , he slices your head off with his katana and feeds your remains to his dogs \n\n GAME OVER #9 ")

                window.location = window.location
          
            } 

       else if (awnser == 2) { //evade the homeless man's strike
        awnser =alert ("You do a triple backflip and evade his strike , his blade gets stuck in the ground ")

        awnser =alert ("You quickly spot a broken glass bottle and decide to stab him with it ")

        awnser =alert ("He then growns in agony as you stab him in his neck multiple times ")

        awnser =alert ("As he is near death he introduces himself as Big Papi , the biggest mob boss in the city ")

        awnser =alert ("As he tells you this you stare in awe to what has happend ")

        awnser =alert ("He comforts you telling you that you beat him in a fair duel and that as the law of the mafia goes you now own all of his assets and wealth ")

        awnser =alert ("Still shocked you try to understand what transpired Big Papi draws his final breath and dies ")

        awnser =alert ("You go home and try to forget what happend and go to sleep ")

        awnser =alert ("As you wake up you notice 2 men in black suits at your window ")

        awnser =alert ("You walk up to them as they say: Boss " + name + " we have heard of what happend to Big Papi and accept you as ouw new Boss")

        awnser =alert ("You have earned all of Big Papis money your current amount is 10 billion USD ! \n You now have a LOT of money . ")

        money = true

        awnser = prompt ('Welcome ' + name + " You are a " + gender + ". \n You have 10 billion USD  \n You are currently on a sidewalk and have 2 choices. \n\n 1) You can go home \n 2) You can go to school ")
    }

    if (awnser == 1 )// go home rich version
{
awnser = alert  ("after walking for an hour you finally arive at your home , a middle class house ") 

awnser = alert ("You go in home and see youre mother who is happy to see you after you became a billionaire.\n you live the good life with you step mom and step sister untill they rob you and steal all your money \n You die of starvation  \n\n GAME OVER#3")
       }

     else if  (awnser == 2 ) // go to school rich version
       {  
        awnser = alert ("While going to school you remember how dangerous walking around in Gangcity is , good that you have your 20 lamboghinis to drive around in")

        awnser = alert ("You finally arrive at your school called: Mobster High , the most dangerous and worst school in the neighbourhood")

        awnser = alert ("You think to yourself i can go to a better school if i want to with my connections")

        awnser = prompt ("You go to class but no one pays attention to class , You see the school beauty Kim sitting next to you , what do you do? \n\n 1) You ask how she's doing  \n 2) You ignore her and pay attention to class \n 3) You ask her if she wants to come home with u ;) ")
        
        if (awnser == 1 ) { //ask how Kim is doing rich version
            awnser = alert ("You aproach Kim as she looks at you and says Oh my you're the new mafia boss right?") 

        awnser = alert  ("I love rich badboys , you wanna have a date some time?")

        awnser = alert  ("You go on a date with Kim and become close , as time goes by you and Kim get closer and closer  ")

        awnser = alert  ("A few months later you get married with Kim and get kids you live happily ever after with your wife and kids \n\n GOOD ENDING ! ")
        
        }


        else if (awnser == 2) { // ignore Kim rich version
            awnser = alert ("You decide to ignore her ")

            awnser = alert ("You feel a sharp pain in your back , you see as your chest gets pirced by a knife")

            awnser = alert ("You cry in pain as Kim comes at you with a twisted smile and says : How dare you ignore me ? \n  I am the queen of this place you worm")

            awnser = alert ("You look around as a group of boys gather around you with weapons")

            awnser = alert ("You get stabbed,shot drowned,burned and have your money stolen  \n\n GAME OVER #4 \n you shouldn't of ignored her i guess")

            window.location = window.location
        }

    }
else if (awnser == 3) // flirt with Kim rich version
{
    awnser = alert ("she is surpirsed by your flirting skills and agrees to go to your house")

    awnser = alert ("You watch a movie together and after that have some sexy times in bed")

    awnser = alert ("You wake up in a horpital , a doctor tells u that u recieved AIDS from Kim and that you are gonna die ")

    awnser = alert ("You use all your wealth and assets to try and save yourself but fail")

    awnser = alert ("You feel weaker and weaker as you feel sleepy and close your eyes , you died \n\n GAME OVER #5")

    window.location = window.location
}      
       }
    }  


else if (awnser == 2 ) // go home poor version
{
awnser = alert  ("after walking for an hour you finally arive at your home , a middle class house ") 

awnser = alert ("You go in home and see youre mother who is mad at you for skipping school , she beats you to death with a flip flop  \n\n GAME OVER#1")

window.location = window.location

}
else if (awnser == 3 ) // go to school poor version
{  
 awnser = alert ("While going to school you remember how dangerous walking around in Gangcity is , you should get a car ")

 awnser = alert ("You finally arrive at your school called: Mobster High , the most dangerous and worst school in the neighbourhood")

 awnser = alert ("You think to yourself i should've learned harder to get in a better school")

  awnser = prompt ("You go to class but no one pays attention to class , You see the school beauty Kim sitting next to you , what do you do? \n\n 1) You ask how she's doing  \n 2) You ignore her and pay attention to class \n 3) You ask her if she wants to come home with u ;) ")

if (awnser == 1) //ask how Kim is doing poor version
{
 if  (money == false)
 {
      awnser = alert ("You try to approach Kim and talk to her but before you say anything she says ewww a poor peasant wants to talk to me , come back to me when you have money ")

      awnser = alert ("You die from embaresment of being poor \n\n GAME OVER #6")

      window.location = window.location
    }

 }
    else if (awnser == 2) //ignore kim poor version
    {
    awnser = alert ("You decide to ignore her ")

    awnser = alert ("You feel a sharp pain in your back , you see as your chest gets pirced by a knife")

    awnser = alert ("You cry in pain as Kim comes at you with a twisted smile and says : How dare you ignore me ? \n  I am the queen of this place you worm")

    awnser = alert ("You look around as a group of boys gather around you with weapons")

    awnser = alert ("You get stabbed,shot drowned,burned and much more \n\n GAME OVER #4 \n you shouldn't of ignored her i guess") 

    window.location = window.location
    }      
    else if  (awnser == 3) //firt with Kim poor version
    {
        awnser = alert ("She is surpirsed by your flirting skills and agrees to go to your house")

        awnser = alert ("You watch a movie together and after that have some sexy times in bed")

        awnser = alert ("You wake up in a horpital , a doctor tells u that u recieved AIDS from Kim and that you are gonna die ")

        awnser = alert ("You feel weaker and weaker as you feel sleepy and close your eyes , you died \n\n GAME OVER #5")

        window.location = window.location
    }      
}

else {
 alert  ("Error , try again")

 window.location = window.location
} 