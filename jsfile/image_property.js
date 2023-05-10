// style.change_background
function change_background(element) {
    console.log(element)
    element.style.backgroundColor = "tomato"
}

function change_background_origin(element) {
    element.style.backgroundColor = "#7D7ABC"

}

function change_background2() {
    document.querySelector('.heading_4').style.backgroundColor = "tomato"
}

function change_background2_origin() {
    document.querySelector('.heading_4').style.backgroundColor = "#7D7ABC"
}

// text hover and show the rest (inner.Text, inner.Html)
const hoverText = document.querySelector('.hover-text');
const fullText = document.querySelector('.hidden_text').textContent;
let index = 0;

hoverText.addEventListener('mouseover', () => {
    if(index != fullText.length){   // mouseover လုပ်လို့ text တွေအကုန်ပြီးတဲ့ အခါမှာ mouseover လုပ်ရင် undefined တွေပေါ်လို့စစ်ပေးတာ
        let trim_tx = hoverText.innerText;

        trim_tx = trim_tx.replace(/\.{3}/g, ' ');
        hoverText.innerText = trim_tx
        const interval = setInterval(() => {
            hoverText.textContent += fullText[index];
            index++;
            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, 50);
    }

});

// const hover_text = document.querySelector('.hover_text');
// const hidden_text = document.querySelector('.hidden_text');
// let index = 0;
// //console.log(hover_text.innerText);
// //console.log(hidden_text.innerText);
// hover_text.addEventListener('mouseover', () => {
//     const interval = setInterval(() => {
//         hover_text.textContent+=hidden_text.textContent[index];
//         index++;
//         if(index >= hidden_text.textContent.length){
//             clearInterval(interval);
//         }
//                 // setInterval function ကို execute လုပ်လို့ ရပ်ချင်ရင် clearInterval() ဆိုတဲ့ function ကိုသုံးရတယ်။
//
//     },50)
// })
// Output: 'Hello world!'