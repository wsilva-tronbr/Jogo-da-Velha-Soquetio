
var socket = io();
var lista = document.getElementById('lista')
let jogo = ['O', '', '', '', '', '', '', '', '', '']

//mostraJogo(jogo)
function mostraJogo() {
    console.log(jogo)
    document.getElementById('c1').innerHTML = jogo[1]
    document.getElementById('c2').innerHTML = jogo[2]
    document.getElementById('c3').innerHTML = jogo[3]
    document.getElementById('c4').innerHTML = jogo[4]
    document.getElementById('c5').innerHTML = jogo[5]
    document.getElementById('c6').innerHTML = jogo[6]
    document.getElementById('c7').innerHTML = jogo[7]
    document.getElementById('c8').innerHTML = jogo[8]
    document.getElementById('c9').innerHTML = jogo[9]
    document.getElementById('vez').innerHTML = jogo[0]
}

function f1() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
    document.getElementById('c1').innerHTML = jogo[0]
    envia(1)
}

function f2() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
    document.getElementById('c2').innerHTML = jogo[0]
    envia(2)
}

function f3() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
    document.getElementById('c3').innerHTML = jogo[0]
    envia(3)
}

function f4() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
    document.getElementById('c4').innerHTML = jogo[0]
    envia(4)
}

function f5() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
    document.getElementById('c5').innerHTML = jogo[0]
    envia(5)
}

function f6() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
    document.getElementById('c6').innerHTML = jogo[0]
    envia(6)
}

function f7() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
    document.getElementById('c7').innerHTML = jogo[0]
    envia(7)
}

function f8() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
    document.getElementById('c8').innerHTML = jogo[0]
    envia(8)
}

function f9() {
    if (document.getElementById('jg').innerHTML != jogo[0]) {
        alert('Não é sua vez')
        return
    }
  
    envia(9)
}

function envia(j) {
    jogo[j] = jogo[0]
    jogo[0] = jogo[0] == 'O' ? 'X' : 'O'
    socket.emit('msg', jogo);
}

socket.on('jogo', function (j) {
    jogo = j
    mostraJogo(jogo)
})

socket.on('ids', function (ids) {
    jogadores = ids
    let mensagem = ''
    let pos = jogadores.indexOf(socket.id)
    if (pos == 0) {
        mensagem = 'O'
    } else if (pos == 1) {
        mensagem = 'X'
    } else {
        mensagem = 'Convidado'
    }
    document.getElementById('jg').innerHTML = mensagem
})
