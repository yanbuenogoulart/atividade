function calcularPiramide() {
let lado = Number(document.getElementById("lado").value)
let altura = Number(document.getElementById("altura").value)
let res = document.getElementById("res")

let calc = 1/3*lado**2*altura
res.innerHTML = "o Volume é: " + calc.toFixed(2)
}

function calcularMercurio() {
    let cels = document.getElementById("mmhg").value
    let psi = document.getElementById("psi").value
    let conversor = 0.0193367801
    if (isNaN(psi) || psi == 0) {
        let pressao = mmhg * conversor
        res.innerHTML = "O Psi é: " + pressao
    } else if (isNaN(mmhg) || mmhg == 0) {
        let pressao = psi / conversor
        res.innerHTML = "O mmHG é: " + pressao
    } else {
        window.alert("Você só pode inserir um valor por vez")
    }
}

function calcularTemp() {
    let cels = document.getElementById("celsius").value
    let fahre = document.getElementById("fahre").value
    if (isNaN(fahre) || fahre == 0) {
        let conversao = (cels * 9/5) + 32
        res.innerHTML = "Em Fahrenheit é é: " + conversao.toFixed(2)
    } else if (isNaN(cels) || cels == 0) {
        let conversao = (fahre - 32) *  5/9
        res.innerHTML = "Em Celsius é: " + conversao.toFixed(2)
    } else {
        window.alert("Você só pode inserir um valor por vez")
    }
}

function votacao() {
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let res = document.getElementById("res")
    if ((nome != "") && (idade != "") && (idade >= 0)) {
        if (idade >= 16) {
            res.innerHTML = nome + " de " + idade + " pode votar!" 
        }else {
            res.innerHTML = nome + " de " + idade + " NÃO pode votar!"
        }
    } else {
        window.alert("Você precisa inserir todos os dados corretamente")
    }
}

let arrayNum = [];

function inserirNum() {
    const arrayres = document.getElementById("textarray");
    let num = Number(document.getElementById("num").value);
    arrayNum.push(num);
    document.getElementById("num").value = "";
    document.getElementById("textarray").value = "";
    for (let i = 0; i < arrayNum.length; i++) {
        arrayres.value += `${arrayNum[i]}, `;
    }
}

function btncalculo() {
    const maiornum = document.getElementById("maiornum");
    const menornum = document.getElementById("menornum");

    let max = Math.max(...arrayNum);
    let min = Math.min(...arrayNum);

    maiornum.value = max;
    menornum.value = min;
}

function limpardados() {
    arrayNum.length = 0;
    document.getElementById("maiornum").value = '';
    document.getElementById("menornum").value = '';
    document.getElementById("num").value = "";
    document.getElementById("textarray").value = "";
}


let arraySoma = []
function inserirSoma() {
    const arraySomaRes = document.getElementById("textsoma")
    let soma1 = Number(document.getElementById("soma1").value)
    arraySoma.push(soma1)
    document.getElementById("soma1").value = ""
    document.getElementById("textsoma").value = ""
    for (let a = 0; a < arraySoma.length; a++) {
        arraySomaRes.value += `Número:${arraySoma[a]}, `
    }
}

let totalSoma = 0
function btnsomando() {
    for (let b = 0; b < arraySoma.length; b++) {
        totalSoma += arraySoma[b]
    } 
    document.getElementById("ressoma").value = totalSoma
    document.getElementById("btnsomando").disabled = true
    document.getElementById("btndesabilitado").innerHTML = `Botao desabilitado, por favor se quiser continuar limpe os dados`
}

function limparSoma() {
    document.getElementById("btnsomando").disabled = false
    document.getElementById("textsoma").value = ""
    document.getElementById("soma1").value = ""
    document.getElementById("ressoma").value = ""
}

let arrayDivi = []

function inserirDivi() {
    const textdivi = document.getElementById("textdivi")
    let numDivi = Number(document.getElementById("divi1").value)
    arrayDivi.push(numDivi)
    document.getElementById("divi1").value = ""
    document.getElementById("textdivi").value = ""

    for (let c = 0; c < arrayDivi.length; c++) {

        textdivi.value += `Número:${arrayDivi[c]}, `
    }
}

function btndivi() {
    let numDivi = arrayDivi.slice(-1)[0]
    if (numDivi % 7 === 0) {
        document.getElementById("resdivi").innerHTML = `O numero: ${numDivi} e Divisivel por 7`
        document.getElementById("resdivi").style.color = "#07ec07";
    } else {
        document.getElementById("resdivi").innerHTML = `O numero: ${numDivi} Não Divisivel por 7`
        document.getElementById("resdivi").style.color = "#eb0e0e";
    }
}

function limparDivi() {
    document.getElementById("textdivi").value = ""
    document.getElementById("divi1").value = ""
    document.getElementById("resdivi").innerHTML = ""
}


let arrayDivisao = []

function inserirDivisao() {
    document.getElementById("btninvi").style.display = 'block'; 
    const textdivi = document.getElementById("textdivisao")
    let numDivi = Number(document.getElementById("divisao").value)
    arrayDivisao.push(numDivi)
    document.getElementById("divisao").value = ""
    document.getElementById("textdivisao").value = ""

    for (let c = 0; c < arrayDivisao.length; c++) {

        textdivi.value += `Número:${arrayDivisao[c]}, `
    }
}

function btndivisao() {
    let numDivi = arrayDivisao.slice(-1)[0]
    document.getElementById("btninvi").style.display = 'none';
    if (numDivi % 5 === 0) {
        document.getElementById("resdivisao").innerHTML = `O numero: ${numDivi} e Divisivel por 5`
        document.getElementById("resdivisao").style.color = "#07ec07";
    } else {
        document.getElementById("resdivisao").innerHTML = `O numero: ${numDivi} Não Divisivel por 5`
        document.getElementById("resdivisao").style.color = "#eb0e0e";
    }
    
    if (numDivi % 3 === 0) {
        document.getElementById("resdivisao2").innerHTML = `O numero: ${numDivi} e Divisivel por 3`
        document.getElementById("resdivisao2").style.color = "#07ec07";
    } else {
        document.getElementById("resdivisao2").innerHTML = `O numero: ${numDivi} Não Divisivel por 3`
        document.getElementById("resdivisao2").style.color = "#eb0e0e";
    }
}

function limparDivisao() {
    document.getElementById("textdivisao").value = ""
    document.getElementById("divisao").value = ""
    document.getElementById("resdivisao").innerHTML = ""
    document.getElementById("resdivisao2").innerHTML = ""
    document.getElementById("btninvi").style.display = 'none';
}