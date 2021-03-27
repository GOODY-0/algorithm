var mergeTwoLists = function(l1, l2) {
    const mergedList = [...l1, ...l2];
    
    mergedList.sort((a,b) => a-b);
    console.log(mergedList);
};

const l1 = [1,2,4];
const l2 = [1,3,4];

mergeTwoLists(l1, l2);