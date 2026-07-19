export function table(n) {
    console.log("The table for the given variable "+n+" is :");
    for(let i=1;i<=10;i++){
        console.log(i*n);
    }
}
export function sumFirst(n){
    let a=0;
    for (let i=0;i<=n;i++){
        a+=i;
    }
console.log("The Sum of first "+n+" number is :"+a);
}
export function digitSum(n){
    let num=n;
    let sum=0;
    while(num>0){
    sum=sum+Math.floor(num%10);
     num=Math.floor(num/10);
    }
    console.log("Sum of the digits of the given variable "+n+" is : "+ sum);
}
export function primeCheck(n) {
    let check = true;
    if (n <= 1) {
        check= false;
    }
    else if(n==2){
        check = true;
    }
    else if(n%2==0) {
        check = false;
    }
    else{
        let i = 3;
        while (i <= Math.sqrt(n)) {
        if (n % i == 0) {
        check = false;
            break;
       }
        i += 2;
        }
    }
    if(check) {
    console.log("The Number " + n + " is Prime Number");
    }
    else{
    console.log("The Number " + n + " is not a Prime Number");
    }
}
//I didn't knew that I can use exponential function directly before , so I created one of my own like one in the cpp or c language manually:)
// function pwr(a,b){
//     let n=1;
//     for(let i=1;i<=b;i++)
//         n=n*a;
//     return n;
// }
export function armstrong(n){
    var a=0;
    var b=0;
    let v=n;
    let c=n;
    while(c>0){
        c=Math.floor(c/10);
        a++;
    }
    while(v>0){
      let d=Math.floor(v%10);
        b=b+(d**a);
        v=Math.floor(v/10);
    }
    if(b==n){
        console.log("The number "+n+" is an Armstrong Number");
    }
    else{
        console.log("The number "+n+" is not an Armstrong Number");
    }
}
export function factors(n){
 const a=[];
 var b=1;
 console.log("The factors for the given variable "+n+" is as follows:");
 while(b<=(n**(1/2))){
   
    if(n%b==0){
        let c=n/b;
        
        console.log(b);
        if(c!=b){
            a.push(c);
        }
    }
  b++;
 }
 for(let i=(a.length-1);i>=0;i--){
    console.log(a[i]);
 }
}