//1
// const add=(a,b)=>{
//     console.log(a+b)
// }
// module.exports=add
// //2
// module.exports=(a,b)=>{
//     console.log(a+b)
// }
//3 and 4
// const plus=(a,b)=>{
//     console.log(a+b);
// }
// const sub=(a,b)=>{
//     console.log(a-b);
// }
// module.exports={plus,sub}

//5
exports.add=(a,b)=>{
    console.log(a+b);
}
exports.sub=(a,b)=>{
    console.log(a-b);
}
exports.div=(a,b)=>{
    console.log(a/b)
}