var input_text=document.getElementById('todotext');
var addbutton=document.getElementById('addbutton');

addbutton.addEventListener('click',function(){
    var input=input_text.value;

    var li_item=document.createElement('li');
    var checkbox=document.createElement('input');
    var label=document.createElement('label')
    var editbutton=document.createElement('button')
    var deletebutton=document.createElement('button')

    checkbox.type="checkbox";
    label.innerText=input;
    editbutton.innerText="Edit"
    deletebutton.innerText="Delete"
    editbutton.classList.add('btn')
    editbutton.classList.add('btn-primary')
    deletebutton.classList.add('btn')

    li_item.appendChild(checkbox);
    li_item.appendChild(label)
    li_item.appendChild(editbutton)
    li_item.appendChild(deletebutton)

    var ul=document.getElementById('todolist')
    ul.appendChild(li_item)

})