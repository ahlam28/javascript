// Write a short paragraph of 3 lines of yourself/bio. Include your name and location
// Use the three ways of declaring strings 
//your name and location should be a variable

const Name ="My name is ahlam, i am day dreamer lady, spending much time in thinking unthinkable things";
const location=" i live in zanzibar island best of all islands in the world"
const Selfintro = Name + 'and' + location;
console.log(Name + 'and' + location);
console.log(Selfintro);

const Selfintro2 = Name.concat("" ,location);
console.log(Selfintro2);


const Selfintro3 = '${Name} a line written by ahlam and show where she lives ${location}'
console.log(Selfintro3);
