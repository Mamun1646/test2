let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

let layout1 = document.getElementById('layout1');
let layout2 = document.getElementById('layout2')
let layout3 = document.getElementById('layout3')
button1.addEventListener('click', ()=>{
    layout1.className = '';
    layout2.className = '';
    layout3.className = '';
    layout1.classList.add('show');
    layout2.classList.add('hide');
    layout3.classList.add('hide');
})
button2.addEventListener('click', ()=>{
    layout1.className = '';
    layout2.className = '';
    layout3.className = '';
    layout1.classList.add('hide');
    layout2.classList.add('show');
    layout3.classList.add('hide');
})
button3.addEventListener('click', ()=>{
    layout1.className = '';
    layout2.className = '';
    layout3.className = '';
    layout1.classList.add('hide');
    layout2.classList.add('hide');
    layout3.classList.add('show');
})

let buttonlist = document.getElementsByClassName('buttonlist');

for(let i =0;i<buttonlist.length;i++){
    buttonlist[i].addEventListener('click', (e)=>{
        for(let j =0;j<buttonlist.length;j++){
            buttonlist[j].classList.remove('butotn_click');
        }
        e.target.classList.add('button_click');
    })
}