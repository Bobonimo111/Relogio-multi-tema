function LoadListeners() {
    const data = document.getElementById("data")
    const hora = document.getElementById("hora")
    console.log(datahora())

    setInterval(function() { timer(datahora()[1], hora) }, 1000)
    setInterval(function() { timer(datahora()[2], hora) }, 100000)



}

function datahora() {
    var date = new Date()
    var dateList = (date.toLocaleString().split(" "))
    dateList[0] = dateList[0].replaceAll("/", "-")
    return dateList
}

function timer(value, obj) {
    obj.innerText = value
}

window.addEventListener("load", LoadListeners)