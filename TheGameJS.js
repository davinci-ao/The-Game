alert('Welcome to my fun game!')

name = prompt('Whats your name?');
answer = prompt('Welcome ' + name + '. Youre about to save the princess from the enemy and you can do a couple things. \n1) You fight the enemy head on. \n2) You go around the enemy to their castle.\n\n what do you want to do?(Type 1 or 2)');

if(answer == 1){
    alert('You chose to fight the enemy head on. \n\n You give your best effort to fight the enemy but they overmaster you by coming with too many.\nYou died!');

} 
else if(answer == 2){
    answer = prompt('You go around towards their castle but you see guards at the main entrance, you have 3 choices you can do. \n\n 1) You fight them and enter the castle through the main entrance. \n 2) You try to look for another entrance at the sides with less guards. \n 3) Go back to your own castle.\n');

    if(answer == 1){
        answer = prompt('You fight the guards and enter through the main entrance. After going through the door you see long hallway with a stairs on the side, where do you go? \n\n 1) Go to the end of the hallway \n 2) Go down the stairs \n 3) Go up the stairs');

        if(answer == 1){
            answer = alert('At the end of the hallway you get cornered by guards that heard the deaths of the entrance guards and they kill you \n You died!');
        }

        else if(answer == 2){
            answer = alert('You go downstairs into the basement, its pitch dark and you fall over something breaking your neck. \n You died!');
        }

        else if(answer == 3){
            answer = prompt('Youve arrived upstairs and see a long hallway with multiple doors, you try to open a couple doors but only the one at the end opens, do you go in? \n\n 1) Yes \n 2) No \n');
        
            if(answer == 1){
                answer = prompt('You go inside and see the princess sitting there tied up and see the king of the enemy with 2 guards around her, you approach the king yelling and the guards run at you. \n\n 1) Do you attack and try to kill the guards \n 2) Do you try to run away and come back later \n');
            
                if(answer == 1){
                    answer = prompt('You attack the guards and barely survive, the king laughs at you while youre catching your breath. Meanwhile the princess is cheering for you. Do you attack the king? \n\n 1) Yes \n 2) No');
                    
                    if(answer == 1){
                        answer = alert('After a long battle while youre exhausted, the king manages to stab you and laughs. At the brink of your death you get enough courage and energy to take a big leap at him and kill him. You managed to save the princess! \n\n You Win!');
                    }

                    else if(answer == 2){
                        answer = alert('You decide not to attack the king but yell at him, he slowly walks up to you while youre yelling and you try to defend yourself but fail. \n You died!');
                    }
                }


            }

            if(answer == 2){
                answer = alert('You decide to not go inside and notice the guards catch up to you, you try to defend yourself but they overmaster you. \n You died!');
            }
        }
    }
    else if(answer == 2){
        answer = prompt('You go around the side to look for a different entrance and find a horse stable to enter, theres a stairs and you can go down or up what do you do? \n\n 1) Go upstairs. \n 2) Go downstairs');

        if(answer == 1){
            answer = prompt('Youve arrived upstairs and see long hallway with multiple doors, you try to open a couple doors but only the one at the end opens, do you go in? \n\n 1) Yes \n 2) No \n');
        
            if(answer == 1){
                answer = prompt('You go inside and see the princess sitting there tied up and see the king of the enemy with 2 guards around her, you approach the king yelling and the guards run at you. \n\n 1) Do you attack and try to kill the guards \n 2) Do you try to run away and come back later \n');
                
                if(answer == 1){
                    answer = prompt('You attack the guards and barely survive, the kings laughs at you while youre catching your breath. Meanwhile the princess is cheering for you. Do you attack the king? \n\n 1) Yes \n 2) No');
        
                    if(answer == 1){
                    answer = alert('After a long battle while youre exhausted, the king manages to stab you and laughs. At the brink of your death you get enough courage and energy to take a big leap at him and kill him. You managed to save the princess! \n\n You Win!');
                    }

                    else if(answer == 2){
                    answer = alert('You decide not to attack the king but yell at him, he slowly walks up to you while youre yelling and you try to defend yourself but fail. \n You died!');
                    }  
                }
                
                else if(answer == 2){
                answer = alert('You decide to not go inside and notice the guards catch up to you, you try to defend yourself but they overmaster you. \n You died!');
                }
            }
        else if(answer == 2){
            answer = alert('You decide not to go in, you walk back and notice guards surrounding you. \n You died!');
        }
        }

        else if(answer == 2){
            answer = alert('You go downstairs into the basement, its pitch dark and you fall over something breaking your neck.\n You died!');
        }
    }

    else if(answer == 3){
        answer = prompt('You go back to your own castle, do you want to approach the castle from the front running into the enemy or sneak past them? \n\n 1) Run into the enemy to fight \n 2) Sneak past the enemy \n');
    
        if(answer == 1){
            answer = prompt('You run into the enemy and notice they outman you, you fight for your life and barely survive, if you move now you might die what do you do next? \n\n 1) Scream for help \n 2) Get up and move to the entrance of the enemy castle \n');
            
            if(answer == 1){
                answer = alert('You scream for help and your allies hear you, you get taken to the doctor but die there. \n You died!');
            }

            if(answer == 2){
                answer = alert('You stand up and try to move on to the main entrance, you notice 2 guards and try to fight them head on. Due to your injuries they beat you. \n You died!');
            }
        } 

        else if(answer == 2){
            answer = prompt('You sneaked past the enemy and came up to the entrance, you notice a couple guards standing there, what do you do? \n\n 1) Attack them \n 2) Find a different entrance');

            if(answer == 1){
                answer = prompt('You beat the guards and enter through the main entrance, you decide to go up the stairs and open the only door thats unlocked, you notice the king and 2 guards standing around the tied up princess \n\n 1) Do you attack the guards and king? \n 2) Do you run away and come back at a later moment? \n');

                if(answer == 1){
                    answer = alert('You beat the guards and the king barely and save the princess. Good job! \n You win!');
                }

                else if(answer == 2){
                    answer = alert('You run away from the room but notice that the guards have noticed you, they come storming at you and catch up to you. \n You died!');
                }
            }

            else if(answer == 2){
                answer = alert('You try to find a different entrance but accidentally run into patrolling guards. \n You died!');
            }   
        }               
    }
    else{
        alert('You didnt put in a proper number, start again');
    }
}