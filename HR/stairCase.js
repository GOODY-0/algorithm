
function stairCase(n) {

    let text = "";
    let blankCount = n - 1;
    let stairCount = 1;

    while (blankCount >= 0) {

        for (let i = 0; i < blankCount; i++) {
            text += " ";
        }
        blankCount--;

        for (let j = 0; j < stairCount; j++) {
            text += "#";
        }
        stairCount++;

        text += "\n";
    }

    text = text.slice(0, -1);
    console.log(text);
}

stairCase(4);