class Password {
   constructor() {
       console.log("Welcome to Password Generator");
       this.pass = "";
   }

   generatePassword(len) {
       let chars = "abcdefghijklmnopqrstuvwxyz";
       let numbers = "1234567890";
       let special = "@#$%&*";
       if (len < 3) {
           console.log("Your password should be at least 3 characters long");
       } else {
           while (this.pass.length < len) {
               this.pass += chars[Math.floor(Math.random() * chars.length)];
               this.pass += numbers[Math.floor(Math.random() * numbers.length)];
               this.pass += special[Math.floor(Math.random() * special.length)];
           }
        
       }
   }
}

let p = new Password();
let len = parseInt(prompt("Enter length of password"));
console.log(p.generatePassword(len));
