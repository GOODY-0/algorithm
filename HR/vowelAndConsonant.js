function printVowelConsonants(s) {

    const arr = Array.from(s);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === "a" ||
            arr[i] === "e" ||
            arr[i] === "i" ||
            arr[i] === "o" ||
            arr[i] === "u") {
            console.log(arr[i]);
        } else {
            setTimeout(function(e) {
                console.log(e);
            },0,arr[i]);
        }
    }
}

    printVowelConsonants("javascript");