// b = brian이 암산한 값. acutual 값과 비교해야 함
function bonAppetit(bill, k, b) {
    let initBill = bill; 
    const brianPay = initBill.reduce((acc,cur) => acc += cur) / 2; 
    initBill.splice(k,1);
    const annaPay = initBill.reduce((acc, cur) => acc += cur) / 2;

    if(annaPay === b) {
        console.log("Bon Appetit");
    } else {
        console.log(brianPay - annaPay);
    }


}

const bill = [3, 10, 2, 9];
const k = 1;
const b = 12;

bonAppetit(bill,k,b);