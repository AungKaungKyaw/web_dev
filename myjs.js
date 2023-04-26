var arr = ["one","two","three","four","five"];
arr.forEach(elements=>{
    document.getElementById(elements).addEventListener("click",()=>{
        document.querySelector('.h1_clas').innerText=elements;
        var class_name = document.getElementById(elements).className;
        if(class_name.includes("unchecked")){
            document.getElementById(elements).classList.remove("unchecked");
            document.getElementById(elements).classList.add("checked");
        }
        else{
            document.getElementById(elements).classList.remove("checked");
            document.getElementById(elements).classList.add("unchecked");
        }
    })
})