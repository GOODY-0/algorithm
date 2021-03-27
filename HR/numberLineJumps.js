function kangaroo(x1, v1, x2, v2) {

    if((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) return("NO");
 
 
     while(x1 !== x2) {
         x1 += v1;
         x2 += v2;
         if(x1 > x2) return "NO";
     }
     return("YES");
 }

kangaroo(21, 6, 47, 3);