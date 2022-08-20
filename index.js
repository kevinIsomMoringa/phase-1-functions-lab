//codebase here
/*
const HQ_Add = 42 




function distanceTravelledInFeet(start,end) {
    //(38-34)*264
    let diffInFeet = distanceFromHqInBlocks(start,end)*eachBlockTofeet
    return diffInFeet
}

function distanceFromHqInFeet(pickup_loc) {
    return distanceTravelledInFeet(HQ_Add,pickup_loc)
}
*/

const HQ_address = 42
const eachBlockTofeet = 264
const pricePerFoot = 0.02 

function distanceFromHqInBlocks(pickup_address,HQ=HQ_address) {
    //Function returns the number of blocks from Scuber's headquarters to the pickup location.

    let diffInBlocks

    if (HQ === pickup_address) {
        diffInBlocks = 0
    } else {
        HQ > pickup_address?(diffInBlocks = HQ - pickup_address):(diffInBlocks = pickup_address - HQ)     
    }
    
    return diffInBlocks
}

function distanceFromHqInFeet(pickup_address) {
    return distanceFromHqInBlocks(pickup_address)*eachBlockTofeet
}

function distanceTravelledInFeet(start,end) {
    return distanceFromHqInBlocks(start,end)*eachBlockTofeet
}

function calculatesFarePrice(start, destination) {
    //Function that return the fare for the customer
    /*
    The first four hundred feet are free. For a distance between 400 and 2000 feet, 
    the price is 2 cents per foot (not including 400, which are free!). 
    Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
    Finally, Scuber does not allow any rides over 2500 feet — 
    the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
    */
    let fare
    let travelDistance = distanceTravelledInFeet(start,destination)
    
    if (travelDistance <= 400) {
        fare = 0
    } else if (travelDistance > 2500) {
        return 'cannot travel that far'
    } else if (travelDistance > 400 && travelDistance <= 2000) {
        fare = pricePerFoot*(travelDistance-400)
    } else if (travelDistance > 2000) {
        fare = 25
    }

    return fare
}

/*
console.log(distanceTravelledInFeet(43, 48)) //=>1320
console.log('\ndistance travelled In Feet')
console.log(distanceTravelledInFeet(43, 44))
console.log(distanceTravelledInFeet(34, 32))
console.log(distanceTravelledInFeet(50, 58))
console.log(distanceTravelledInFeet(34, 24))
console.log('\ncalculate Fare Price')
console.log(calculatesFarePrice(43, 44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24))
*/