const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const count = document.getElementById("count");
let C = 0;

increase.onclick = function(){
    C++;
    count.textContent = C;
}

decrease.onclick = function(){
    C--;
    count.textContent = C;
}
reset.onclick = function(){
    C = 0
    count.textContent = C;
}


