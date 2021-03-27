function pageCount(n, p) {  // n is end, p is goal
    let page = 1;
    let pageTurn = 0;
    if(n/2 < p){
        page = n;   // right 에서부터 넘기기
        if(page % 2 !== 0 && page-1 === p) return 0;
    } 

  

    if(page === 1) {
        while(page < p) {
            page += 2;
            pageTurn++;
        }

    } else{
        if(page % 2 === 0) {

            while(page >= p+1) {
                page -= 2;
                pageTurn++;
            }
        }
        else {
            while(page > p+1) {
                page -= 2;
                pageTurn++;
            }
        }
    }

    
        
    // console.log(page, pageTurn)
    return pageTurn;

}

// pageCount(5,3);     //  1       둘 다 이득
// pageCount(6,2);     //  1       left 이득
// pageCount(5,4);     //  0       right 이득
// pageCount(4,2);     //  1       left 이득
// pageCount(10,5);    //  2      left 이득
console.log(pageCount(5,3));    //    left 이득
console.log(pageCount(6,2));    //  2      left 이득
console.log(pageCount(5,4));    //  2      left 이득
console.log(pageCount(4,2));    //  2      left 이득
console.log(pageCount(10,5));    //  2      left 이득
console.log(pageCount(4,1));    //  2      left 이득
console.log(pageCount(7,4));    //  2      left 이득
console.log(pageCount(6,5));    //  2      left 이득






// page 1 is always on the right.
// left page of every page is always 홀수.
// right page of every page is always 홀수.