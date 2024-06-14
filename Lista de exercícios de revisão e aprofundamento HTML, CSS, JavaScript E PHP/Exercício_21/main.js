//Cadmiel Torres de Lima

function makeReservation() {
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    if (date && time) {
        alert('Reserva feita para ' + date + ' às ' + time + '.');
    } else {
        alert('Por favor, selecione a data e a hora para a reserva.');
    }
}