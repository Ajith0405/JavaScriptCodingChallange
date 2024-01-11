// let originalArray = ['a','b','c','d','a','d','e','f','f','a','c','c','g','h'];

// let originalArray = [1,2,3,4,5,1,2,4,5,7,8,4,6];

let originalArray = ["apple","orange","banana","apple","apple","banana","dryfruits"];

let dubliCateElementArray =[];

    for(let i=0; i< originalArray.length;i++){
        for(let j=i+1; j< originalArray.length;j++){

            if(originalArray[i] === originalArray[j]){
                dubliCateElementArray.push(originalArray[j]);
                originalArray.splice(j,1," ");
            }
        }
    }

    let normalisedOrginalArray = (originalArray.filter((char)=> char !==" ")).sort();

    console.log(normalisedOrginalArray);

    let normalisedDublicateArray = dubliCateElementArray.filter((char)=> char !== " ");
    console.log(normalisedDublicateArray);