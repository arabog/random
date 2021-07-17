/*
Coding in function countAnimals. function accept two parameters: animals, 
a string contains some animals; count, an array list of which animals we 
should count. The result should be a number array.

Examples
countAnimals("dog, cat", ["dog", "cat"]); //=> [1,1]
countAnimals("dog, cat", ["dog", "cat","pig"]);  //=> [1,1,0]
countAnimals("dog, dog, cat", ["dog", "cat"]);  //=> [2,1]
countAnimals("dog, dog, cat", ["pig","cow"]);  //=> [0,0]
*/ 
function countAnimals(animals,count){
          return count
                    .map(animal => (animals
                              .match(new RegExp(animal, "g")) || []).length);
}

const countAnimals = 
          (animals, count) => count
                    .map(x => animals
                                        .split(x).length - 1);

function countAnimals(animals, count) {
          return count
                              .map(x => animals
                                                  .split(x).length - 1);
}

countAnimals = 
          (animals, count) => count
                                        .map( val => animals
                                                                      .split(',')
                                                                      .filter( x => x == val).length );


console.log( countAnimals("dog, cat", ["dog", "cat"]));
console.log( countAnimals("dog, cat", ["dog", "cat","pig"]));
console.log( countAnimals("dog, dog, cat", ["dog", "cat"]));
console.log( countAnimals("dog, dog, cat", ["pig","cow"]));

console.log("dog, cat".split("dog")); // [ '', ', cat' ]
console.log("dog, cat".split("dog").length); //2

console.log("dog, cat".split("cat")); //[ 'dog, ', '' ]
console.log("dog, cat".split("cat").length); //2

console.log("dog, dog, cat".split("dog")); // [ '', ', ', ', cat' ]
console.log("dog, dog, cat".split("dog").length); // 3

console.log("dog, dog, cat".split("cat")); // [ 'dog, dog, ', '' ]
console.log("dog, dog, cat".split("cat").length); //2

console.log( "dog, dog, cat".split("pig")); //[ 'dog, dog, cat' ]
console.log( "dog, dog, cat".split("pig").length);  // 1