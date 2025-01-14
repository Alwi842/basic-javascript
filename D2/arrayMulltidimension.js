//array berlapis
const threeDimensionalArray = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ],
    [
        [13,14,15],
        [16,17,18]
    ],
];
// cara akses index1 , index2, index3
console.log(threeDimensionalArray[0][1][2]);

//for loop multidimensi array
for (let i=0; i < threeDimensionalArray.length; i++){
    for (let j = 0; j < threeDimensionalArray[i].length; j++){
        for (let k=0; k < threeDimensionalArray[i][j].length; k++)
            console.log(threeDimensionalArray[i][j][k]);
    }
}