const arr = Array.from({length: 100}, (v, i) => i + 1);

const isPrime = (n) => {
  if (n <= 1) return false; 
  if (n == 2) return true; 
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false; 
  }
  return true;
};

let result = "";

arr.reverse().forEach(num => {
  if (isPrime(num)) return; 
  if (num % 3 == 0 && num % 5 == 0) { 
    result += "FooBar "; 
  } else if (num % 3 == 0) { 
    result += "Foo "; 
  } else if (num % 5 == 0) { 
    result += "Bar "; 
  } else {
    result += num + " "; 
  }
});

console.log(result);
