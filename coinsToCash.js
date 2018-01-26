//////////////////////// Define an object and store it in a variable named piggyBank. ////////////////////////////
///////////////////////// For each coin type, give yourself as many as you like. ///////////////////////////////////

const piggyBank = { pennies:342,
    nickels:72,
    dimes:39,
    quarters:12,
};

// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.

const toDollar = {
    pennies:.01,
    nickels:.05,
    dimes:.1,
    quarters:.25,
}

// Multiply the appropriate keyes in piggyBank Object and toDollar Object to get the individual coin values in $
let dollarPennies = (piggyBank.pennies*toDollar.pennies);
let dollarNickels = (piggyBank.nickels*toDollar.nickels);
let dollarDimes = (piggyBank.dimes*toDollar.dimes);
let dollarQuarters = (piggyBank.quarters*toDollar.quarters);

//Add those values together in variable dollarAmount
let dollarAmount = (dollarPennies + dollarNickels + dollarDimes + dollarQuarters);

// When done, output the value to the browser console.
console.log("I have $" + dollarAmount + " in my piggy bank.");



