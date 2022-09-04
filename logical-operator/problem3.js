let char = 56;

if (char == "a" || char == "A"){
  console.log("vowel");
}
else if (char == "e" || char == "E"){
  console.log("vowel");
}
else if (char == "i" || char == "I"){
  console.log("vowel");
}
else if (char == "o" || char == "O"){
  console.log("vowel");
}
else if (char == "u" || char == "U"){
  console.log("vowel");
}
else if(typeof(char) == "number"){
  console.log("Number");
}else{
  console.log("Consonent");
}