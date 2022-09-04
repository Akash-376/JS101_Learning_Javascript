//given
let givenUserName = "123";
let givenPassword = "abc12345";

//Input

let inputUserName ="123";
let inputPassword = "abc12345";

if(givenUserName == inputUserName){
  if(givenPassword == inputPassword){
    console.log("logged-in successfully");
  }else{
    console.log("Incorrect Password");
  }
}else{
  console.log("Incorrect user name")
}