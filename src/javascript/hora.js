function LoadElements() {
    const data = document.getElementById("data")
    const hora = document.getElementById("hora")
    console.log(datahora())

    setInterval(function() { timer(datahora()[1], hora) }, 1000)
    setInterval(function() { timer(datahora()[2], hora) }, 100000)
}

var datahora = function() {
    var date = new Date()
    var dateList = (date.toLocaleString().split(" "))
    dateList[0] = dateList[0].replaceAll("/", "-")
    return dateList
}

var timer = function(value, obj) {
    obj.innerText = value
}

window.addEventListener("load", LoadElements)