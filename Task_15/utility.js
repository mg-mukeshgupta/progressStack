// regular function
export function maxArray(array){
    let max=array[0];
    array.forEach(item=>{
    if(item>max){
        max=item;
    }})
 console.log("The Maximum Element of the Array is "+max);
}
// arrow function
export const sumArray=(array)=>{
    var sum=0;
    array.forEach(item=>{
        sum=sum+item;
    })
    console.log("Sum of all the numbers in the array is "+sum);
}
// anonymous function
export const oddCount =function(array){
    let count=0;
    array.forEach(item=>{
        // if(item==1){
        //     count++;
        // }
        if(item%2!=0){
            count++;
        }
    })
    console.log("Number of odds in the array are "+count);
    
}