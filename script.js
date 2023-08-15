const output = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let string = '';
buttons.forEach((button) =>{
    button.addEventListener('click',(e) =>{
        if(e.target.textContent.trim() === 'DEL'){
            string = string.substring(0, string.length - 1);
            output.value = string;
        }else if(e.target.textContent.trim() === 'AC'){
            string = '';
            output.value = string;
        }else if(e.target.textContent.trim() === '='){
            string = eval(string);
            output.value = string;
        }else{
            string += e.target.textContent.trim();
            output.value = string;
        }
    })
})

