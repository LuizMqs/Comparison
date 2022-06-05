document.getElementById("button").addEventListener("click", function() {
    const first = document.getElementById("first").value
    const second = document.getElementById("second").value

    if (first == "" && second == "") {
        document.getElementById("result").innerHTML = "Os campos estão vazios"
    }

    else if (first == "") {
        document.getElementById("result").innerHTML = "O primeiro campo se encontra vazio"
    }

    else if (second == "") {
        document.getElementById("result").innerHTML = "O segundo campo se encontra vazio"
    }

    else {

        if (first > second) {
            document.getElementById("result").innerHTML = "O primeiro campo tem um valor superior quando comparado ao outro"
        }

        else if (first < second) {
            document.getElementById("result").innerHTML = "O segundo campo tem um valor superior quando comparado ao outro"
        }
        
        else {
            document.getElementById("result").innerHTML = "Os dois campos possuem valores iguais"
        }
    }
}) 