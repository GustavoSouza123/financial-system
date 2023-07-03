// funções constantes

const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);


// mudar mês

c('.btn-left').addEventListener('click', ()=>{
    let i = c('.month-year .content span');
    if(i.innerHTML == 'Dezembro') {
        i.innerHTML = 'Novembro';
    } else if(i.innerHTML == 'Novembro') {
        i.innerHTML = 'Outubro';
    } else if(i.innerHTML == 'Outubro') {
        i.innerHTML = 'Setembro';
    } else if(i.innerHTML == 'Setembro') {
        i.innerHTML = 'Agosto';
    } else if(i.innerHTML == 'Agosto') {
        i.innerHTML = 'Julho';
    } else if(i.innerHTML == 'Julho') {
        i.innerHTML = 'Junho';
    } else if(i.innerHTML == 'Junho') {
        i.innerHTML = 'Maio';
    } else if(i.innerHTML == 'Maio') {
        i.innerHTML = 'Abril';
    } else if(i.innerHTML == 'Abril') {
        i.innerHTML = 'Março';
    } else if(i.innerHTML == 'Março') {
        i.innerHTML = 'Fevereiro';
    } else if(i.innerHTML == 'Fevereiro') {
        i.innerHTML = 'Janeiro';
    } else if(i.innerHTML == 'Janeiro') {
        return
    }
});

c('.btn-right').addEventListener('click', ()=>{
    let i = c('.month-year .content span');
    if(i.innerHTML == 'Janeiro') {
        i.innerHTML = 'Fevereiro';
    } else if(i.innerHTML == 'Fevereiro') {
        i.innerHTML = 'Março';
    } else if(i.innerHTML == 'Março') {
        i.innerHTML = 'Abril';
    } else if(i.innerHTML == 'Abril') {
        i.innerHTML = 'Maio';
    } else if(i.innerHTML == 'Maio') {
        i.innerHTML = 'Junho';
    } else if(i.innerHTML == 'Junho') {
        i.innerHTML = 'Julho';
    } else if(i.innerHTML == 'Julho') {
        i.innerHTML = 'Agosto';
    } else if(i.innerHTML == 'Agosto') {
        i.innerHTML = 'Setembro';
    } else if(i.innerHTML == 'Setembro') {
        i.innerHTML = 'Outubro';
    } else if(i.innerHTML == 'Outubro') {
        i.innerHTML = 'Novembro';
    } else if(i.innerHTML == 'Novembro') {
        i.innerHTML = 'Dezembro';
    } else if(i.innerHTML == 'Dezembro') {
        return
    }
});


// adicionar

function add() {
    if(cs('.area-2 input')[0].value == '' ||
    cs('.area-2 input')[1].value == '' ||
    cs('.area-2 input')[2].value == '' ||
    c('.area-2 select').selectedIndex == 0) {
        alert('Preencha o(s) campo(s) em destaque para continuar');
        cs('.area-2 input')[0].style.borderColor = '#BD0101';
        cs('.area-2 input')[1].style.borderColor = '#BD0101';
        cs('.area-2 input')[2].style.borderColor = '#BD0101';
        c('.area-2 select').style.borderColor = '#BD0101';
    } else {
        let content = document.createElement('div');
        let content_1 = document.createElement('div');
        let content_2 = document.createElement('div');
        let date = document.createElement('div');
        let category = document.createElement('div');
        let title = document.createElement('div');
        let value = document.createElement('div');
        let span = document.createElement('span');


        c('.area-3-content').appendChild(content);

        content.appendChild(content_1);
        content.appendChild(content_2);

        content_1.appendChild(date);
        content_1.appendChild(category);
        content_1.appendChild(title);
        content_2.appendChild(value);

        content_2.appendChild(span);


        content.classList.add('content');

        content_1.classList.add('content-1');
        content_2.classList.add('content-2');

        date.classList.add('c-date');
        category.classList.add('c-category');
        title.classList.add('c-title');
        value.classList.add('c-value');
        span.classList.add('c-span');


        date.innerHTML = c('.ip-date .date').value;
        title.innerHTML = c('.ip-title .title').value;
        value.innerHTML = 'R$ ';
        span.innerHTML = (parseFloat(c('.ip-value .value').value)).toFixed(2);

        let id = c('.ip-category select').selectedIndex;
        category.innerHTML = cs('.ip-category option')[id].value;


        if(category.innerHTML == 'Alimentação') {
            category.style.backgroundColor = '#0200ff';
        } else if(category.innerHTML == 'Salário') {
            category.style.backgroundColor = '#016803';
        } else if(category.innerHTML == 'Aluguel') {
            category.style.backgroundColor = '#7d2020';
        } else {
            category.style.backgroundColor = '#f2ce01';
            category.style.color = '#000';
        }


        let income = [];
        let expenditure = [];
        let l = cs('.area-3-content .content').length;
        if(category.innerHTML == 'Salário') {
            income.push(cs('.c-span')[l - 1].innerHTML);
            c('.income-span').innerHTML = (parseFloat(c('.income-span').innerHTML) + parseFloat(income)).toFixed(2);
            cs('.content-2')[l - 1].style.color = 'green';
        } else {
            expenditure.push(cs('.c-span')[l - 1].innerHTML);
            c('.expenditure-span').innerHTML = (parseFloat(c('.expenditure-span').innerHTML) + parseFloat(expenditure)).toFixed(2);
            cs('.content-2')[l - 1].style.color = 'red';
        }

        c('.balance-span').innerHTML = (parseFloat(c('.income-span').innerHTML) - parseFloat(c('.expenditure-span').innerHTML)).toFixed(2);
        if(parseFloat(c('.balance-span').innerHTML) < 0) {
            c('.balance-p').style.color = 'red';
        } else {
            c('.balance-p').style.color = 'green';
        }


        c('.ip-date .date').value = '';
        c('.ip-category select').selectedIndex = 0;
        c('.ip-title .title').value = '';
        c('.ip-value .value').value = '';

        c('.ip-date .date').style.borderColor = '#e1eaec';
        c('.ip-category select').style.borderColor = '#e1eaec';
        c('.ip-title .title').style.borderColor = '#e1eaec';
        c('.ip-value .value').style.borderColor = '#e1eaec';
    }
}

c('.btn-add').addEventListener('click', add);
document.addEventListener('keydown', (event)=>{
    if(event.keyCode === 13) {
        event.preventDefault();
        c('.btn-add').click();
    }
});