$(document).ready(function() {

$("#exOneClick").click(function() {

let inputStr = $("#arrow-one").val()
let inputInt = parseInt(inputStr)

funcArrow = (arrowSqr) => (arrowSqr) * (arrowSqr)

alert(funcArrow(inputInt))

})

$("#exTwoClick").click(function() {

    let inputStrOne = $("#string-one").val()
    let inputStrTwo = $("#string-two").val()
    
    let str1 = new String(inputStrOne); 
    let str2 = new String(inputStrTwo); 
    let str3 = str1.concat(str2); 

    alert(`"${str1} + ${str2}" : ${str3}`)
    
    })

    $("#exThreeClick").click(function() {

        let inputOne = $("#int-one").val()
        let inputTwo = $("#int-two").val()
        let inputIntOne = parseInt(inputOne)
        let inputIntTwo = parseInt(inputTwo)
        let value = inputIntOne / inputIntTwo

        let resultBool = Number.isInteger(value);
       
        alert(`${inputOne} / ${inputTwo} results in an Integer: ${resultBool}`)
        
        })

        $("#exFourClick").click(function() {

        let defaultOne = $("#default-one").val()
        let defaultTwo = $("#default-two").val()
        let defaultIntOne = parseInt(defaultOne)

        if (defaultTwo == '') {
            
           alert(sumValues(defaultIntOne))
        }
        else {
            var defaultIntTwo = parseInt(defaultTwo)
            alert(sumValues(defaultIntOne, defaultIntTwo))
        }

        function sumValues(a, b = 5) { 
        return a + b; 
         }             
    })
})



