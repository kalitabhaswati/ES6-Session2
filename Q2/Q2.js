const findCombinations = word => {
    let combinationMap = new Map();

    //Genrating possible outcomes
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length + 1; j++) {
            if(!combinationMap.has(word.slice(i, j))){
                combinationMap.set(word.slice(i, j));
            }  
        }
    }

    return combinationMap;
};

let resultMap = findCombinations('Bhaswati');
console.log(resultMap);