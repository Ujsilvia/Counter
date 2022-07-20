const button = document.getElementById("button");
const counter = document.getElementById("counter");
button.addEventListener("click", update);

let count = 0;
let myTimeout = setTimeout(clear, 5000);

function update(){
    count ++;
    counter.textContent = count;
    clearTimeout(myTimeout)
    myTimeout = setTimeout(clear, 5000);

}
function clear(){
    count = 0;
    counter.textContent = count;
    
    // myTimeout = setTimeout(clear, 5000);
}
// setTimeout(update, 5000);


// function myCounter() {
//   document.getElementById("demo").innerHTML = "count"
// }