// const division = (a,b)=>{
//     var c;
//     c=a/b;
//     setTimeout(()=>{
//         console.log(c);
//     },3000);
// }
// division(0,10);
// console.log("It takes three seconds to take over");

const div=(a,b)=>{
    const logic=new Promise((resolve,reject)=>{
        if(b===0)
        reject(new Error("Division by zero error"));
        else
            resolve("Your result is "+a/b);
    });
    return logic;
}
async function handleDivision(a,b){
    try{
        console.log("starting division");
        const result= await div(a,b);
        console.log("Division succesfull, here's the result ",result );
    }
    catch(error){
        console.error("Caught an error: ",error.message);
    }
    finally{
        console.log("performing logical division");
    }
}
const a=59
const b=512
const c=8
const d=0

handleDivision(100,0);//sample 1
handleDivision(b,c);//sample 2
handleDivision(a,c);//sample3
handleDivision(b,d);//sample4
handleDivision(a,d);//sample5
