let arr = [5, 10, 'Shopping', 20, 'Homework'];
let halfarr=[];
let endarr=[];
for(let i=0;i<arr.length;i++) {
    if(arr[i]>=0){
        endarr.push(arr[i]*2);
    }else{
        endarr.push(arr[i]+"-done");
    }
}
console.log(endarr);