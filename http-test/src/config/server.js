const express = require('express');
const cors = require('cors');
const sensor1Routes =  require('../config/routes/sensor1.routes');
const sensor2Routes =  require('../config/routes/sensor2.routes');

// Inicialización de la app
const app = express();


// Configuración
app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', sensor1Routes);
app.use('/api', sensor2Routes);