function convert(from) {
    var celcius = document.getElementById('celcius');
    var fahrenheit = document.getElementById('fahrenheit');
    var reamur = document.getElementById('reamur');

    if (from == 'C') {
        fahrenheit.value = ((celcius.value * 9/5) + 32).toFixed(2);
        reamur.value = (celcius.value * 4/5).toFixed(2);
    } else if (from == 'F') {
        celcius.value = ((fahrenheit.value - 32) * 5/9).toFixed(2);
        reamur.value = ((fahrenheit.value - 32) * 4/9).toFixed(2);
    } else if (from == 'R') {
        celcius.value = (reamur.value * 5/4).toFixed(2);
        fahrenheit.value = ((reamur.value * 9/4) + 32).toFixed(2);
    }
}