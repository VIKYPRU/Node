(function(){
    const person="vjay"
    console.log(person)
})(),//()=>this is used to invoke immediately 
(function(){
    const person="vicky"
    console.log(person)
})(),
(function(a){
    const person="ajith"
    console.log(person+a)
})(10),
(function(name){
    const person=name+"wink"
    console.log(person)
})("hello")
