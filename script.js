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

const btnBack = document.querySelector('#back');
const elementImg = document.querySelector('#imgAcerto');

const imgs = [
    './assets/img/biblioteca.png',
    './assets/img/cim.jpeg',
    './assets/img/ginasio.jpeg',
    './assets/img/sala08.jpeg',
    './assets/img/hardware.jpeg'
];

const senha1 = 'memoria';
const senha2 = 'harddisk';
const senha3 = 'internetdascoisas';
const senha4 = 'html';
const senha5 = 'css';

function validResp(pergunta, resposta) {
    switch (pergunta) {
        case 1:
            if (resposta == 3) {
                location.href = './acerto.html?pergunta=1&p=acr';                            
            } else {
                location.href = './erro.html?pergunta=1&p=err';                            
            }         
            break;
        case 2:
            if (resposta == 1) {
                location.href = './acerto.html?pergunta=2&p=acr';  
            } else {
                location.href = './erro.html?pergunta=2&p=err';                        
            }     
            break;
        case 3:
            if (resposta == 2) {
                location.href = './acerto.html?pergunta=3&p=acr';  
            } else {
                location.href = './erro.html?pergunta=3&p=err';                        
            }     
            break;
        case 4:
            if (resposta == 1) {
                location.href = './acerto.html?pergunta=4&p=acr';  
            } else {
                location.href = './erro.html?pergunta=4&p=err';                        
            }     
            break;
        case 5:
            if (resposta == 2) {
                location.href = './acerto.html?pergunta=5&p=acr';  
            } else {
                location.href = './erro.html?pergunta=5&p=err';                        
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
    let page = resgatarGet('p');
    let pergunta = resgatarGet('pergunta');

    if (page != undefined) {
        if (page == 'err') {
            btnBack.addEventListener('click', () => {
                location.href = './pergunta'+pergunta+'.html';
            });
            return;
        } else if (page == 'acr') {            
            btnBack.addEventListener('click', () => {
                location.href = './index.html?pergunta='+pergunta;
            });
            elementImg.src = imgs[pergunta - 1];
            return;
        }
    }

    if (lb1 != null) {
        switch (pergunta) {
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
                break;     
            default:
                break;
        }
        lb1.addEventListener('click', () => {
            if (!perg1.checked) {
                if (prompt('Senha: ') == senha1) {
                    location.href = './pergunta1.html';
                } else {
                    alert('Senha Incorreta');
                }
            }
        });
        lb2.addEventListener('click', () => {
            if (!perg2.checked && perg1.checked) {
                if (prompt('Senha: ') == senha2) {
                    location.href = './pergunta2.html';
                } else {
                    alert('Senha Incorreta');
                }
            }
        });
        lb3.addEventListener('click', () => {    
            if (!perg3.checked && perg2.checked) {
                if (prompt('Senha: ') == senha3) {
                    location.href = './pergunta3.html';
                } else {
                    alert('Senha Incorreta');
                }
            }
        });
        lb4.addEventListener('click', () => {
            if (!perg4.checked && perg3.checked) {
                if (prompt('Senha: ') == senha4) {
                    location.href = './pergunta4.html';
                } else {
                    alert('Senha Incorreta');
                }
            }
        });
        lb5.addEventListener('click', () => {    
            if (!perg5.checked && perg4.checked) {
                if (prompt('Senha: ') == senha5) {
                    location.href = './pergunta5.html';
                } else {
                    alert('Senha Incorreta');
                }
            }
        });
        perg1.addEventListener('click', () => {
            perg1.checked = !perg1.checked;
        });
        perg2.addEventListener('click', () => {
            perg2.checked = !perg2.checked;
        });
        perg3.addEventListener('click', () => {
            perg3.checked = !perg3.checked;
        });
        perg4.addEventListener('click', () => {
            perg4.checked = !perg4.checked;
        });
        perg5.addEventListener('click', () => {
            perg5.checked = !perg5.checked;
        });
    }
}

onLoad();