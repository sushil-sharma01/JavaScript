const accountId = 132
let accountEmail = "sushilsharma@gmail.com"
var accountPassword = "12345"
accountCity = "Kakinada" // can also be introduce and allocate memory but not effective way.
let accountState;

// accountId = 22   //not allowed 

console.log(accountId);

accountEmail = "asd@gmail.com"
accountPassword = "2222222"
accountCity = "ssed"

// console.log(accountEmail);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/* prefer not to use var because it have issue in
    block and function scope {} */