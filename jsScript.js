$(document).ready(function() {


    //first function uses the arrow function to square a number
$("#exOneClick").click(function() {

let inputStr = $("#arrow-one").val()
let inputInt = parseInt(inputStr)

//function

funcArrow = (arrowSqr) => (arrowSqr) * (arrowSqr)

//function call

alert(funcArrow(inputInt))

})

//second function - uses new string concat function - takes input and turns string into new string object then concatenate them

$("#exTwoClick").click(function() {

    let inputStrOne = $("#string-one").val()
    let inputStrTwo = $("#string-two").val()
    
    //creates string object
    let str1 = new String(inputStrOne); 
    let str2 = new String(inputStrTwo); 

    //concatenate function call
    let str3 = str1.concat(str2); 

    alert(`"${str1} + ${str2}" : ${str3}`)
    
    })

    //checks to see if the result of a math operation is an integer
    $("#exThreeClick").click(function() {

        let inputOne = $("#int-one").val()
        let inputTwo = $("#int-two").val()
        let inputIntOne = parseInt(inputOne)
        let inputIntTwo = parseInt(inputTwo)
        let value = inputIntOne / inputIntTwo

        //function call
        let resultBool = Number.isInteger(value);
       
        alert(`${inputOne} / ${inputTwo} results in an Integer: ${resultBool}`)
        
        })

        //uses default parameter
        $("#exFourClick").click(function() {

        let defaultOne = $("#default-one").val()
        let defaultTwo = $("#default-two").val()
        let defaultIntOne = parseInt(defaultOne)

            //checks to see if there is a value for second number
        if (defaultTwo == '') {
            //function call if no second value and returns result using default
           alert(sumValues(defaultIntOne))
        }
        else {
            var defaultIntTwo = parseInt(defaultTwo)
            
            //function call with a second number, overrides default value
            alert(sumValues(defaultIntOne, defaultIntTwo))
        }

        function sumValues(a, b = 5) { 
        return a + b; 
         }             
    })
})



