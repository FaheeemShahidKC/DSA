function fib(n){
      const fib = [0,1]
      for(i=2;i<n;i++){
            fib[i]=fib[i-1]+fib[i-2]
      }
      return fib
}
console.log(fib(5));