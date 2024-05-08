// require ('./Add')


// const plus=require('./Add')
// plus(2,5)
// plus(5,5)
// plus(4,5)
// require('./person1')
// require('./person2')
// require('./iife')
//with caching the output og first class

// const Building1=require('./Building')
// console.log(Building1.getName())
// Building1.setName('villa')
// console.log(Building1.getName())

// const Building2=require('./Building')
// console.log(Building2.getName())

//without caching
// const Building=require('./Building')
// const Building1=new Building('house')
// console.log(Building1.getName())

// Building1.setName("villa")
// console.log(Building1.getName())

// const Building2=new Building(Building1.getName())
// console.log(Building2.getName())

// console.log("hello world from indexjs")

// const add=require('./Math')//1.
// add(2,4)


//3
// const Math=require('./Math')
// Math.plus(2,8)
// Math.sub(6,5)


//4 and 5
const{add,sub,div}=require('./Math')
add(2,6)
sub(5,5)
div(5,8)