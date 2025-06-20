let name = prompt("Enter any mssg: ");
let mssg = [...new Set(name)];
let result = mssg.join("");

console.log(result);