// Write Your Code Below
function equality(value1, value2) {
    if (value1 === value2) {
        console.log("They are the same value and type")
    }
    if ( value1 == value2) {
        console.log("They are equal in value")
    }
    else if (value1 !== value2) {
        console.log("The values are not equal")
    }
}

equality(10, 10)
equality("ten", 10)
equality(7, 5)
