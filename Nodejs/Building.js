class Building{
    constructor(name){
        this.name=name
    }
    getName=()=>{
        return this.name
    }
    setName=(name)=>{
        this.name=name
    }
}
// const house1=new Building('villa')
// const a=house1.getName()
// console.log(a)
// house1.setName('cottage')
// console.log(house1.getName())
// module.exports=new Building('resort')
module.exports=Building