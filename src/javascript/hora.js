function LoadElements() {
    const data = document.getElementById("data")
    const hora = document.getElementById("hora")
    console.log(datahora())

    setInterval(function() { timer(datahora()[0], hora) }, 1000)
    setInterval(function() { timer(datahora()[1], hora) }, 100000)
}

var datahora = function() {
    var data = new Date();  
    
    var hora = `${data.getHours()}` 
    var min = `${data.getMinutes()}`.padStart(2 , 0)
    var sec = `${data.getSeconds()}`.padStart(2, 0)
    var strHora = `${hora} : ${min} : ${sec}`
    var diaMesAno = `${data.getDate()} : ${data.getMonth()+1} : ${data.getFullYear()}`

    return [strHora,diaMesAno]
}

var timer = function(value, obj) {
    obj.innerText = value
}

window.addEventListener("load", LoadElements)