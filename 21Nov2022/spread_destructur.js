const players1 = ['Ronaldo', "Messi", "salah",'Pele', "Meradona", "kaka", "Sajedul"];

const [p1, p2, ...others] = players1;

console.log(p1);
console.log(p2);
console.log(others);


document.write(p1);
// document.write("<br>");
document.write(p2); 
document.write(others);
