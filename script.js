document.querySelector('button').onclick = function () {
    let arrlength = document.querySelector('#length').value
    let min = document.querySelector('#min').value
    let max = document.querySelector('#max').value

    let result = []

    for (let i = 0; i < arrlength; i++) {
        result.push(randomInteger(min,max))
    }

    result.push(randomInteger(min,max))
    document.querySelector('#out').innerHTML = result
    return result
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand)
    return rand
}