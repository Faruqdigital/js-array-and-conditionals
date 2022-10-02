//  80 - 100 = A+
//  70 - 79 = A 
//  60 - 69 = A- 
//  50 - 59 = B 
//  40 - 49 = C  
//  33 - 39 = D  
//  0 - 32 = F 

var mark = 30;

  if (mark >= 80 && mark <= 100){
    console.log("You have got 'A+' grade");
  }
  else if (mark >= 70 && mark <= 80){
    console.log("You have got 'A' grade");
  }
  
   else if (mark >= 60 && mark <= 70){
    console.log("You have got 'A-' grade");
  }
  
   else if (mark >= 50 && mark <= 60){
    console.log("You have got 'B' grade");
  }
  
   else if (mark >= 40 && mark <= 50){
    console.log("You have got 'C' grade");
  }
  
   else if (mark >= 32 && mark <= 40){
    console.log("You have got 'D' grade");
  }
  
   else if (mark >= 0 && mark <= 32){
    console.log('F');
  }
  
