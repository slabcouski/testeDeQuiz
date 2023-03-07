const perg1 = document.querySelector('#perg1');
const lb1 = document.querySelector('#lb1');
const perg2 = document.querySelector('#perg2');
const lb2 = document.querySelector('#lb2');
const perg3 = document.querySelector('#perg3');
const lb3 = document.querySelector('#lb3');
const perg4 = document.querySelector('#perg4');
const lb4 = document.querySelector('#lb4');
const perg5 = document.querySelector('#perg5');
const lb5 = document.querySelector('#lb5');

const btnBackError = document.querySelector('#back');


const senha1 = 'senha1';
const senha2 = 'senha2';
const senha3 = 'senha3';
const senha4 = 'senha4';
const senha5 = 'senha5';

function validResp(pergunta, resposta) {
    switch (pergunta) {
        case 1:
            if (resposta == 3) {
                location.href = './index.html?pergunta=1'                            
            } else {
                location.href = './erro.html?pergunta=1&p=err'                            
            }         
            break;
        case 2:
            if (resposta == 1) {
                location.href = './index.html?pergunta=2'  
            } else {
                location.href = './erro.html?pergunta=2&p=err'                        
            }     
            break;
        case 3:
            if (resposta == 2) {
                location.href = './index.html?pergunta=3'  
            } else {
                location.href = './erro.html?pergunta=3&p=err'                        
            }     
            break;
        case 4:
            if (resposta == 1) {
                location.href = './index.html?pergunta=4'  
            } else {
                location.href = './erro.html?pergunta=4&p=err'                        
            }     
            break;
        case 5:
            if (resposta == 2) {
                location.href = './index.html'  
            } else {
                location.href = './erro.html?pergunta=5&p=err'                        
            }     
            break;
    }
}

function resgatarGet(param) {
    var urlAtual = window.location.href;
    var urlClass = new URL(urlAtual);
    var get = urlClass.searchParams.get(param);
    return get;
}

function onLoad() {
   
    if (resgatarGet('p')) {
        btnBackError.addEventListener('click', () => {
            location.href = './pergunta'+resgatarGet('pergunta')+'.html'
        })
        return;
    }


    switch (resgatarGet('pergunta')) {
        case '1':
            perg1.checked = true;
            break;
        case '2':
            perg1.checked = true;
            perg2.checked = true;
            break;
        case '3':
            perg1.checked = true;
            perg2.checked = true;
            perg3.checked = true;
            break; 
        case '4':
            perg1.checked = true;
            perg2.checked = true;
            perg3.checked = true;
            perg4.checked = true;
            break;
        case '5':
            perg1.checked = true;
            perg2.checked = true;
            perg3.checked = true;
            perg4.checked = true;
            perg5.checked = true;
            break;     
        default:
            break;
    }
}

onLoad()

lb1.addEventListener('click', () => {
    if (!perg1.checked) {
        if (prompt('Senha: ') == senha1) {
            location.href = './pergunta1.html'
        } else {
            alert('Senha Incorreta')
        }
    }
})

lb2.addEventListener('click', () => {
    if (!perg2.checked && perg1.checked) {
        if (prompt('Senha: ') == senha2) {
            location.href = './pergunta2.html'
        } else {
            alert('Senha Incorreta')
        }
    }
})

lb3.addEventListener('click', () => {    
    if (!perg3.checked && perg2.checked) {
        if (prompt('Senha: ') == senha3) {
            location.href = './pergunta3.html'
        } else {
            alert('Senha Incorreta')
        }
    }
})

lb4.addEventListener('click', () => {
    if (!perg4.checked && perg3.checked) {
        if (prompt('Senha: ') == senha4) {
            location.href = './pergunta4.html'
        } else {
            alert('Senha Incorreta')
        }
    }
})

lb5.addEventListener('click', () => {    
    if (!perg5.checked && perg4.checked) {
        if (prompt('Senha: ') == senha5) {
            location.href = './pergunta5.html'
        } else {
            alert('Senha Incorreta')
        }
    }
})