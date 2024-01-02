//1 вариант
function sum(x) {
  return function(y){
   return x+y;
  };
}
console.log(sum (2)(2))

// 2 вариант
function sum(a,b){
  console.log(a+b)
}
sum(2,4);
