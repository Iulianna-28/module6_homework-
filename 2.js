function myArray (number) {
  let _true = 'число простое';
  let _false = 'ответ неверный';
  
  if(number <=1 && number>1000) 
    return _false;
  if (number == 2)
    return _true;
  for(let i=2; i<=number/2; i++){
    if(number % i==0){
      return _false;
    }
  }
     return _true;
}
  console.log(myArray(1))
  console.log(myArray(1001))
