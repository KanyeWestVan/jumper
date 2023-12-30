function rend(min, max){
  return Math.floor(Math.random() * (max - min));
};
var test1 = [];
var pass = [];
const test = "abc8@de~!f=6gh^56jk-lm<{7n.o[p4,*q}rst/u(3vw|yz;2A@BC:D1E]9B1FGH10I!JKLMNOPQRSTUVWXZ";

  function passlength(x){
for (i = 0; i < x; i++){
    var tulip = rend(1,80);
    test1.splice(i, 0, tulip);
    var newchar = test.charAt(tulip);
    pass.splice(i, 0, newchar);
  }
}
passlength(14)
console.log(test1)
console.log(pass.join(""));
console.log(pass.length);
// Update header text
document.querySelector('#header').innerHTML = pass.join("")

// Log to console
console.log(message)
