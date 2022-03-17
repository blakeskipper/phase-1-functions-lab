
function distanceFromHqInBlocks(blockNumber){
  if(blockNumber > 42){
      return blockNumber - 42
  } else {
      return 42 - blockNumber
  }
}

function distanceFromHqInFeet(blockNumber){
  return distanceFromHqInBlocks(blockNumber)*264
}

function distanceTravelledInFeet(start, destination){
  if(start < destination){
    return (destination - start)*264
  } else {
    return (start - destination)*264
  }
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  if(distance <= 400){
    return 0
  } else if (distance > 400 && distance <= 2000){
    return .02 * (distance - 400)
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}























//ANOTHER VERSION:

// const distanceFromHqInBlocks = (pickupLocation) => {
//     return Math.abs(pickupLocation - 42)
// }

// const distanceFromHqInFeet = (pickupLocation) => {
//     return Math.abs(pickupLocation - 42) * 264
// }

// const distanceTravelledInFeet = (pickupLocation, dropoffLocation) => {
//     return Math.abs(pickupLocation - dropoffLocation) * 264
// }

// function calculatesFarePrice(pickupLocation, dropoffLocation){
//     let distance = distanceTravelledInFeet(pickupLocation, dropoffLocation)
//     if(distance <= 400){
//       return 0
//     } else if (distance > 400 <= 2000){
//       return distance * .02
//     } else if (distance > 2000 && distance < 2500) {
//       return 25
//     } else {
//       return 'cannot travel that far'
//     }
//   }
