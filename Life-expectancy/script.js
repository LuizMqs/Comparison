document.getElementById("button").addEventListener("click", function() {
    const date = new Date()
    const currentDate = date.getDate()
    const currentMonth = date.getMonth() + 1
    const currentYear = date.getFullYear()
    const age = new Date(document.getElementById("age").value)
    const genero = document.getElementsByName("genero")
    let userAge = date.getTime() - age.getTime()
    let remaining

    userAge = userAge / (1000*3600*24*365.25) 

    if (genero[0].checked == true) {
        remaining = 73.1 - userAge
        document.getElementById("mens").innerHTML = `Você possui aproximadamente ${remaining} anos de restantes vida`
    }

    else {
        remaining = 80.1 - userAge
        document.getElementById("mens").innerHTML = `Você possui aproximadamente ${remaining} anos de restantes vida`
    }

    if (remaining < 0) {
        document.getElementById("mens").innerHTML = "Você ultrapassou a expectativa de vida. Parabéns!!"
    }
}) 