function substituirPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você ja é zero!!")
        } else if (array[i] % 2 === 0) {
            console.log(`substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}

let array = [0, 3, 4, 6, 80, 33, 23, 90]
substituirPares(array);