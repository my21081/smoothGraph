let arr = [2,6,9,18,36,45,34,23]

function grap(arr, count) {
    let result = [];
    let position = 0;

    while (position < arr.length) {
        let nums = [];
        let move = position;
    
        while (nums.length < count) {
            if (!arr[move]) return result;
            nums.push(arr[move])
            move++;
        }
    
        const sum = nums.reduce((pre, cure) => pre + cure);
        const mean = sum/count;
        result.push(mean)
        position++;
    }
}

console.log(grap(arr, 4));
