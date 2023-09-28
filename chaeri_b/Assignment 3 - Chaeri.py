import random

while True:
    myList = ["rock", "scissors", "paper"]
    otherList = ["Input again","Try another answer","That isn't in the option"]
    computer_choice = random.choice(myList)
    player_choice = input("Choose rock, paper, or scissors: ").lower()
    print("computer choice : " + computer_choice)

    if player_choice not in myList:
        print(random.choice(otherList))
    elif ((player_choice == "rock" and computer_choice == "paper") 
        or (player_choice == "scissors" and computer_choice == "rock") 
        or (player_choice == "paper" and computer_choice == "scissors")):
        print("Computer won")
    elif player_choice == computer_choice:
        print("It's a tie!")
    else:
        print("You win!")
        break