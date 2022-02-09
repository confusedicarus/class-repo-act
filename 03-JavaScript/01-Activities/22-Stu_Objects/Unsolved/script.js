//WRITE YOUR CODE BELOW
var customerOrder = {
    isReady: false,
    sugarCount: 2,
    drinkName: "Coffee"
}
function printDrink() {
    var isReady
    if(customerOrder.isready === true) {
        ready = "ready for pick-up"
    } else {
        ready ="still in order queue"
    }
    console.log("Customer ordered a " + customerOrder.drinkName + " with " + customerOrder.sugarCount + " sugars. It is " + ready)
}
printDrink()
customerOrder.isReady = true
customerOrder. sugarCount = 0
customerOrder.drinkName = "Smoothie"

printDrink()




