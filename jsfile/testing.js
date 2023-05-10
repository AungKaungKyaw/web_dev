/*const btn_val = document.querySelectorAll(".btn");
btn_val.forEach(btn_val => {
    btn_val.addEventListener('click',()=>{
        document.getElementById('display').innerText = btn_val.value;
    })
})
class Calculator {
    constructor(num1, num2) {
        // this.num1 = num1;
        // this.num2 = num2;
        console.log(num1);
        console.log(num2);
    }
}
num1 = 12;
num2 = 34;s*/

num = document.querySelectorAll('.btn2');
console.log(num)
thisone_btn = document.getElementById('btn2');
num.forEach(thisone_btn=>{
    thisone_btn.addEventListener('click',()=>{
        document.querySelector('.main').innerText = thisone_btn.innerText;
    })
})

////////////////////////////////////////

const todo = document.getElementById('user_input');
console.log("hel");
const todo_text = todo.value;
function add_todo() {
    if (todo_text ===''){
        alert("enter something");
        return;
    }
    console.log("after return")
}
const btn = document.getElementById('add');
btn.addEventListener('click',add_todo);

//////////////////////// dataset ///////////////////////
const myDiv = document.getElementById("myDiv");
const color = myDiv.dataset.color; // "red"
const size = myDiv.dataset.size; // "large"
console.log(color)
console.log(size)

//////////////////////////closest////////////////////////
const item2 = document.querySelector('li:nth-child(2)');
const ul = item2.closest('ul');
console.log(ul); // <ul>...</ul>




