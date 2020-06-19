// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid2.volume()); // 100
// console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your
// volume and surface area.



class CuboidMaker2{
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.width;
    }
    volume(){
        return this.length*this.width*this.height
    }
    surfaceArea(){
        return 2 * (this.length*this.width + this.length*this.height + this.width*this.height)
    }
}
  
const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
});

  // Test your volume and surfaceArea methods by uncommenting the logs below:
   console.log(cuboid2.volume()); // 100
   console.log(cuboid2.surfaceArea()); // 130



class CubeMaker extends CuboidMaker2{
    constructor(attributes){
        super(attributes);
        if(this.length === this.width && this.length === this.height && this.width === this.height){
            console.log('This is a cube');
        }else {
            console.log('This is not a cube');
        }
    }     
}

const cube = new CubeMaker({
    length: 1,
    width: 1,
    height: 1
})

const notacube = new CubeMaker({
    length: 1,
    width: 2,
    height: 3,
})

console.log(cube.volume());
console.log(notacube.surfaceArea());