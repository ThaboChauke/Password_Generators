
# Password Generators

This repository contains two password generator applications: one built using JavaScript for web-based password generation, and another built using Python for command-line password generation. Both applications allow users to create secure passwords based on various options such as length and complexity.

## Contents
- [JavaScript Password Generator](#javascript-password-generator)
- [Python Password Generator](#python-password-generator)

---

## JavaScript Password Generator

### Overview
This is a web-based password generator that allows users to generate secure passwords with customizable options, including length and the inclusion of lowercase/uppercase letters, numbers, and special characters.

### Features
- Generate passwords of varying lengths (between 1 to 30 characters).
- Include/exclude lowercase letters (a-z).
- Include/exclude uppercase letters (A-Z).
- Include/exclude numbers (0-9).
- Include/exclude special characters (e.g., !@#$%^&*).

### Installation
1. Clone the repository or download the zip file:
    ```bash
    git clone https://github.com/ThaboChauke/Password_Generators.git
    
    cd javaScript-password_generator
    ```

2. No external libraries are required. The application runs on basic HTML, CSS, and JavaScript.

### Usage
1. Open the `index.html` file in a web browser.
2. Customize your password settings by:
    - Selecting the desired password length.
    - Checking/unchecking the options for lowercase, uppercase, numbers, and special characters.
3. Click the **"Generate Password"** button.
4. Copy the generated password by clicking the copy icon next to the password box.

---

## Python Password Generator

### Overview
This Python script generates secure passwords from the command line, allowing users to define the length and complexity of the password. It restricts the maximum password length to 16 characters.

### Features
- Set password length (up to 16 characters).
- Choose from three complexity levels: **LOW**, **MEDIUM**, and **HIGH**.
- Generates a random password based on user input.

### How to Run
1. Ensure Python is installed on your system.
2. Clone the repository:
    ```bash
    git clone https://github.com/ThaboChauke/Password_Generators.git

    cd python-password_generator
    ```

3. Install the required dependencies:
    ```bash
    pip3 install -r requirements.txt
    ```

4. Run the script:
    ```bash
    python3 password_generator.py
    ```

5. Follow the on-screen prompts to:
    - Set the password length.
    - Choose the password complexity (LOW, MEDIUM, or HIGH).
    - View the generated password.

### Requirements
- Python 3.x
- Colorama

Install the dependencies with:
```bash
pip3 install -r requirements.txt
```



