let numberList = [1, 2, 5, 6, 7, 8, 3, 2, 1, 46, 8, 5, 3, 5, 7, 8, 3, 2, 2, 2, 3, 5, 7, 8, 5, 3];
        console.log(`Original list of numbers --> ${numberList}`);

        let filterUniqueElementToSet = () => {
            let uniqueElementSet = new Set();
            for (let i = 0; i < numberList.length; i++) {
                if (!uniqueElementSet.has(numberList[i])) {
                    uniqueElementSet.add(numberList[i]);
                }
            }

            return uniqueElementSet;
        };

        let resultSet = filterUniqueElementToSet();
        console.log('Set with unique array elemets is ', resultSet);