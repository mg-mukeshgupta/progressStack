import {compound as ci} from './utility.js'
const p=1000;//principal amount
const r=4;//4% rate
const n=2;//2 times a year
const t=5;//5 years
const amount=ci(p,r,n,t);
console.log("The Compound after 15 years is :");
console.log(amount);