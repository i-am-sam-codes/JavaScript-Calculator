const result = document.getElementById('input')

let calculate=(number) => {
    result.value += number
}

function Result() {
    try {
        result.value = eval(result.value)// checks if input value is a valid equation
    }
    catch(err) {
        alert('👿Please enter a valid entry😈')
    }
}

function clear() {
    result.value = ' ';
}
let del=()=> {
    result.value = result.value.slice(0, -1)
}





