
function FizzBuzz(n: number) {
  for (let i = 1; i < n + 1; i++) {
    console.log(i);
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz") 
    } else if (i % 5 == 0) {
        console.log("Buzz") 
    }
  }
}
