function getText() {

    document.getElementById("alert").classList.add("invisible")

    let str = document.getElementById("input").value
    let returnObj = palindrome(str)

    displayText(returnObj)
}

function palindrome(str) {
    
    str = str.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    str = str.replace(regex, '')

    let reverseStr = []
    let returnObj = {}

    for (let i = str.length -1; i >= 0; i--) {
        reverseStr += str[i];
    }

   if(reverseStr == str){
    returnObj.msg = "Well done! You entered a Palindrome!"
   }
   else{
    returnObj.msg = "Sorry! You did not enter a Palindrome!"
   }

   returnObj.reversed = reverseStr;

   return returnObj;
}

function displayText() {

    document.getElementById("results").innerHTML = returnObj.msg
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reverseStr}`;
    document.getElementById("alert").classList.remove("invisible");
    
}

