console.log("aneesh")
let age =21;
if(age>10 && age<20){
    console.log("your age lying between 10 and 20")
    }
    else{
        console.log("not")
    }
let num=12;

if(num%2==0){
    console.log("this is divisible by 2");

}
else if(num%3==0){
    console.log("this is devisible by 3");
}
else{
    console.log("not divisible");
}

let nums=18

if(nums%2==0 || nums%3==0)
{
    console.log("this number is divisible by 2 and 3");
}
else{
    console.log("not divisible by 2 and 3")

    
}


let a=[1,3,5,6,7,5]
console.log(a)
a.push(9)
console.log(a);
a.pop()
console.log(a)

a.shift()//Remove first element
console.log(a)
a.unshift(3)
console.log(a)//remove first element and add new element
a.reverse()
console.log(a)//it is used to reverse array 

let number = prompt("enter any number");
let ans= new Promise((res,rej)=>{
    if(number<5){
        return res();
    }
    else{
        return rej();
    }
})
ans.then(()=>{
    console.log("its resolve");
});
ans.catch(()=>{
    console.log("rej");
})

setInterval(() => {
    console.log("3sec")
}, 3000);