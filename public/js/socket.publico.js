var socket = io();
socket.on('estadoActual', function(data) {
    actualizarHTML(data.ultimos4)
});

socket.on('ultimos4', function(data) {
    // var audioElement1 = document.createElement('audio');
    // audioElement1.setAttribute('src', 'audio/new-ticket.mp3');
    // audioElement1.setAttribute('autoplay', 'autoplay');
    // audioElement1.play();
    var audio = new Audio('../audio/new-ticket.mp3')
    audio.play();
    actualizarHTML(data.ultimos4)

});

function actualizarHTML(ultimos4) {

    if (!ultimos4) {
        return;
    }
    for (var i = 1; i < ultimos4.length + 1; i++) {
        $('#lblTicket' + i).html(ultimos4[(i - 1)].numero);
        $('#lblEscritorio' + i).html('Escritorio ' + ultimos4[(i - 1)].escritorio);
    }
}