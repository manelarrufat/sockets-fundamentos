const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuari conectat');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Benvingut a aquesta aplicació'
    });

    client.on('disconnect', () => {
        console.log('Usuari desconectat');
    });

    // Escoltar el client
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         res: 'TOT HA ANAT BÉ ' + mensaje.usuario
        //     });
        // } else {
        //     callback({
        //         res: 'TOT HA ANAT MALAMENT'
        //     });
        // }

    });
});