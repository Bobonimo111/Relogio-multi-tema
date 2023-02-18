function LoadElements() {
    const buttons = document.querySelectorAll(".buttons>button")
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            setStyleSheet(button)
        })

    })

}
var setStyleSheet = function(obj) {
    const sheet = new CSSStyleSheet()
    switch (obj.innerText.toLowerCase()) {
        case "normal":
            sheet.replaceSync("../css/normal.css")
            sheet.insertRule("../css/rainbow.css")
            document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
            break;
        case "minimalista":

            break;
    }

}

window.addEventListener("load", LoadElements)