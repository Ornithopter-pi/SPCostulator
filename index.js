// WHen page loads, check value in text box if divisible by 3, if true, set value of result span to true, if not, set to false




const value = document.getElementById("byThree").getAttribute("value")
let result = document.getElementById("result")



if (value % 3 == 0) {
    result.innerText = "true"
    
} else {
    result.innerText = "false"
}

