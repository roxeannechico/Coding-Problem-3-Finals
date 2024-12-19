let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

let combinedArray = [];


for (let i = 0; i < subArray1.length; i++) {
    combinedArray.push([subArray1[i], subArray2[i]]);
}


console.log("Restructured Array:");
combinedArray.forEach(subArray => {
    console.log(`Name: ${subArray[0]}, Age: ${subArray[1]}`);
});