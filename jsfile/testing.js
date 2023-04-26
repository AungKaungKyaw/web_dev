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




