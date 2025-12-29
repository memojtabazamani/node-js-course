let myArray = [5, 4, 7, 2, 1, 9, 10, 23]

// for(let i = 0; i<myArray.length; i++){
//     for(let j = 0; j < myArray.length; j++){
//         if(myArray[i]<myArray[j]){
//             let temp = myArray[i];
//             myArray[i] = myArray[j];
//             myArray[j] = temp;
//         }
//     }
// }

const bubbleSort = (myArray) => {
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < myArray.length; j++) {
            if (myArray[i] < myArray[j]) {
                let temp = myArray[i];
                myArray[i] = myArray[j];
                myArray[j] = temp;
            }
        }
    }
    return myArray;
}

console.log(bubbleSort(myArray));