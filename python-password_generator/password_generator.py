# Password Generator
import random
import string
import colorama
import os
from colorama import Style,Fore


colorama.init(autoreset=True)

def get_password_length():

    while True:
        length = input("Enter the length of your password [Maximum 16]: ")
        
        if not length.isdigit():
            continue
        elif restrict_length(length):
            print(f"{Style.BRIGHT}{Fore.RED}Length of password too long")
            continue
        else:
            break
    
    return int(length)


def restrict_length(length):
    if int(length) > 20:
        return True
    else:
        return False


def get_complexity():
    
    while True:
        complexity = input("Choose the complexity of your password [LOW, MEDIUM, HIGH]: ").lower()
        
        if complexity not in ["low", "medium", "high"]:
            continue
        break
    
    return complexity


def generate_password(length,complexity):
    
    lower_alpha = string.ascii_lowercase
    capital_alpha = string.ascii_uppercase
    numbers = string.digits
    delimeters = string.punctuation
    
    low = lower_alpha + capital_alpha
    medium = lower_alpha + capital_alpha + numbers
    high = lower_alpha + capital_alpha + numbers + delimeters
    password = []
    
    if complexity == "low":
        for i in range(0,length):
            letter = random.choice(low)
            password.append(letter)
            
    elif complexity == "medium":
        for i in range(0,length):
            letter = random.choice(medium)
            password.append(letter)
            
    elif complexity == "high":
        for i in range(0,length):
            letter = random.choice(high)
            password.append(letter)
    
    password = ''.join(password)   
    
    return password
        
        
def main():
    length = get_password_length()
    print()
    complexity = get_complexity()
    print()
    
    password = generate_password(length,complexity)
    os.system("clear")
    print(f"This is your new password: {Style.BRIGHT}{password}")
    
    
if __name__ == "__main__":
    main()     
