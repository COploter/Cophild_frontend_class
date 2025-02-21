console.log('Hello, Javascript is working!')
let num1 = 777;
let boolean = false;
let string = "true";

console.log(num1, boolean, string);

// const classMate = prompt ("Enter class Mate name No.1"); //first
// const classMate1 = prompt ("Enterclass Mate name No.2"); //second

// if (classMate == "Prince" && classMate1 == "Leke") {
// console.log(classMate, "and", classMate1, "are My Class Mates");
// }else if(classMate == "Prince" && classMate1 != "Leke"){
//     console.log(classMate, "is my class Mate", "but", classMate1, "is not my Class Mate"
//     )
// }else if(classMate != "Prince" && classMate1 == "Leke"){
//     console.log(classMate, "is not my class Mate", "but", classMate1, "is my class  Mate"
//     )
// }else if(classMate != "Prince" && classMate1 != "Leke"){
//     console.log(classMate, "and", classMate1, "are not my Class Mate")
// }else{
//     console.log("Error in syntax")
// };

const Email = prompt ("Enter you Email below");
const Username = prompt ("Enter your Username below");
const Password = prompt ("Enter your passwod below");

if ( Email == "tishe@gmai.com" && Username== "TISHE123" && Password == "12345678"){
    console.log("You are welcome", Username, "to your Dashboard you can Proceed");
}else if( Email == "tishe@gmail.com" && Username == "TISHE123" && Password != "12345678"){
    console.log("User", Username, "with", Email, "Your Password is Incorrect");
}else if( Email ==  "tishe@gmail.com" && Username != "TISHE123" && Password == "12345678"){
    console.log("User", Username, "with", Email, "Your username is  incorrect")
}else if( Email != "tishe@gmail.com" && Username == "TISHE123" && Password == "12345678"){
    console.log("User", Username, "with", Email, "Your email is incorrect")
}else if( Email != "tishe@gmail.com" && Username != "TISHE123" && Password == "12345678"){
    console.log("User", Username, "with", Email, "Your email and username are incorrect")
}else if( Email == "tishe@gmail.com" && Username != "TISHE123" && Password != "12345678"){
    console.log("User", Username, "with", Email, "your username and password are inorrect")
}else if( Email != "tishe@gmail.com" && Username == "TISHE123" && Password != "12345678"){
    console.log("User", Username, "with", Email, "your email and password are inorrect")
}else{
    console.log("You are welcome to your dashboard!!")
}

