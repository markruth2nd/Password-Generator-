# Password-Generator-
My first password generator using JS

The purpose of this challenge is to pick up some starter code which has completed HTML, CSS files and a part completed JavaScript code and to create an online password generator. I am going to try complete the functions within the JS file to generate password between 10-64 characters using uppercase, lowercase and special character as well as numbers.

First I will complete the function of getting the password options from the user which means I will need to prompt the user to advise which options to use. I will also need to ask what length the user wants the password to be which means I will require the code to ensure this is provided by the user as a number, not character. Most passwords required for secure sites request the lenth to be between 10-64 characters so I will also need to ensure the password length provided by the user is betweeen 10-64 characters.
I am looking to create a password generator which can create a password using lower and uppercase characters, numbers as well as special characters, which means I will also need to prompt the user to choose from these options. The user must choose a least one of the 4 options to be able to use this tool.
if(hasLowerCasedCharacters === false && hasUpperCasedCharacters === false && has numericalCharacters === false && hasSpecialCharacters === false){ allert("Must select at least one character option")}

The purpose of this password generator is to be able to provide the user with random passwords as and when the user requires a password which means I will require a function which allows the password generator to create random passwords more than once. My purpose is to complete the getRandom function to use the provided arrays in random each time the user uses this site.

Once the user has provided the interface with their password options, I will then require a function to generate the password which will use the generatePassword function. 