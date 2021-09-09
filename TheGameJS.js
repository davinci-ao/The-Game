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
    answer = prompt('You go back to your own castle, do you want to approach the castle from the front running into the enemy or sneak past them? \n\n 1) Run into the enemy to fight \n 2) Sneak past the enemy \n 3) Im not dumb, I order my archers to shoot the enemy in the front!');
    
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

        else if(answer == 3){
            answer = prompt('You ordered your archers to shoot and they hit! You go and strategise with your allies for a frontal attack on the entrance of the castle which option will you choose? \n\n 1) Go with cavalier to storm the front \n 2) Get a bunch of knight soldiers to storm the enemy gates \n 3) Get your best of the best and sneak into the castle \n');
            
            if(answer == 1){
                answer = prompt('You and 5 horsemen go for a frontal attack on the entrance and kill the guards at the entrance! You storm inside rushing through the halls with your men. You see a stairs to go up or down. \n\n 1) Go downstairs \n 2) Go upstairs');
           
                if(answer == 1){
                    answer = alert('You rush downstairs with the horsemen and find multiple women beat up and in need of aid. You think about your choices in this current situation when you hear footsteps coming from the stairs. Guards have caught up to you and your forced to fight for your life among the beaten women. Due to your nature moral you try to keep the women unharmed which led to you sacrificing yourself for them. \n You died!');
                }

                else if(answer == 2){
                    answer = prompt('You rush upstairs finding yourself in yet another hallway. You try to open every door but only one door seems to open. \n\n 1) Go through the only open door \n 2) Try to break open all of the other doors \n');
                
                    if(answer == 1){
                        answer = prompt('You kick in the door and storm inside, you see the princess laying on the ground but no one is around her, you rush to her aid to notice that her throat had been cut. She whispers with a dying voice that the king has fled towards the south \n\n 1) Rush after the king \n 2) Stay with the princess and mourn of her last breath');
                    
                        if(answer == 1){
                            answer = prompt('You rush downstairs and go to the south with a horse. After riding for 10 minutes you begin to lose hope until in the distance you see movement. Without a doubt in your mind you rush towards it. What is your course of action? \n\n 1) Attack the figure the first chance you get \n 2) Yell at the figure when getting closer');
                        
                            if(answer == 1){
                                answer = alert('You attack the figure the first chance you get, you stab the figure through the chest. Realising what youve done you panic and figure out who it is. To your luck it is the king. \n You win!');
                            }

                            else if(answer == 2){
                                answer = alert('You yell towards the figure when coming closer. The first words you say are about the queen and the figure makes a hesitant move. You confirm that this person has something to do with the queen and threathen his life. The figure gives in and turns around, it is the king that murdered the princess. In feelings of rage you approach the king even though he begs for a conversation, he screams through the noise that it wasnt him that killed the princess but one of your knights. You stop in your trail and lose your mind. The king flees outside of your sight and you lose him \n You lost!');
                            }
                        }

                        if(answer == 2){
                            answer = alert('You stay with the princess until her last breath to make sure she goes with peace. You have failed your task and will be punished for your failure. \n You lose.');
                        }
                    }

                    else if(answer == 2){
                        answer = alert('You try to break every door in the hallway but theyre locked from the inside making it unable to. In the end you go through the only open door and see the princess laying there. She has died. \n You lost!');
                    }
                }
            }

            else if(answer == 2){
                answer = prompt('You rush the front entrance with 50 knights and kill all the guards surrounding and in the castle. You storm the stairs unknowingly downstairs and come in the basement. You see multiple captured women laying here, beat up and in need of aid. Your choice of action? \n\n 1) Help the women in aid and rush them back to the castle for aid \n 2) Ignore the women and try to find the princess \n 3) You think you dont see the princess and rush upstairs to look for her again \n');
           
                if(answer == 1){
                    answer = alert('You help the women in aid and rush them to the castle for the doctors to help them. This effort cost you a lot of time and the enemy king has confirmed the princess has died by your poor efforts. \n You lost!');
                }
            
                else if(answer == 2){
                    answer = alert('Amongst the women you try to find the princess and even yell at the other women because of your distress. The princess is not in the basement and you freak out. Due to the noise youve made a lot of guards storm the basement, you are surrounded and fight for your life. Because of anger and stress you nearly win but the enemys numbers are too much for you and your knights. \n You died!');
                }

                else if(answer == 3){
                    answer = alert('You figure the princess is not in the basement so you rush up the stairs. In your moment of despair you try to open every door in the hallway upstairs but only one door opens. The door that opens leads to the princess. But youre too late. The princess has died to loss of blood by a cut. \n You lost.');
                }
            }    

            else if(answer == 3){
                answer = alert('You try to sneak in with 3 of your best knights but you get detected by patrol units who alarm a bell for aid, 20 guards come rushing outside to fight you. You hold on to your dear life and almost kill all the guards when the king yells at you and throws down the princess. You catch the princess only to notice that her heart had been stabbed and that you had failed your mission. \n You lost!');
            }
        }              
    }

    else{
        alert('You didnt put in a proper number, start again');
    }
}