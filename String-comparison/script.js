document.getElementById("button").addEventListener("click", function() {
    const first = document.getElementById("first").value
    const second = document.getElementById("second").value
    if (first == "" && second == "") {
        document.getElementById("result").innerHTML = "Os campos estão vazios"
    }
    else if (first == "") {
        document.getElementById("result").innerHTML = "O primeiro campo está vazio"
    }
    else if (second == "") {
        document.getElementById("result").innerHTML = "O segundo campo está vazio"
    }
    else {
        if (first.length > second.length) {
            document.getElementById("result").innerHTML = "O conteúdo do primeiro campo é superior ao outro"
        }
        else if (first.length < second.length) {
            document.getElementById("result").innerHTML = "O conteúdo do segundo campo é superior ao outro"
        }
        else {
            document.getElementById("result").innerHTML = "Os dois campos possuem o mesmo tamanho"
        }
    }
})