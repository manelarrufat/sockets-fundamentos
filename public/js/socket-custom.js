var socket = io();

socket.on('connect', function() {
    console.log('Conectat al servidor');
});

// Escoltar
socket.on('disconnect', function() {
    console.log('Perduda la conexió amb el servidor');
});

// Enviar informació
socket.emit('enviarMensaje', {
    usuario: 'Manel',
    mensaje: 'Hola a tothom'
}, function(resp) {
    console.log('Resposta del servidor: ', resp);
});

// Escoltar informació
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});