const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 3000;


//inicar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)          //Cuando concatenamos string con variables, se necesita la comilla japonesa `````

})

/* app.use(express.json); */
app.use(bodyParser.json());     //usamos esto para analizar el cuerpo y pasarlo a JSON 
app.use(cors());    //permite solicitudes de recursos



//CONEXIÓN A MONGO ATLAS
mongoose.connect('mongodb+srv://integradorUser:suavitel123@relojasistente.ebjzj69.mongodb.net/?retryWrites=true&w=majority&appName=RelojAsistente', {
    dbName: 'RelojAsistente',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('Conectado a Mongo Atlas');
}).catch((error) => {
    console.error('Error al conectar a MongoDB Atlas', error);
});

//Colecciones
const userSchema = new mongoose.Schema({
    nombreUsuario: String,
    correo: String,
    contrasena: String,
    edad: String 
})

const cancionesSchema = new mongoose.Schema({
    idUsuario: String,

})

const movimientoSchema = new mongoose.Schema({
    idUsuario: String,
    data: [{
        nivel: Number,
        fecha: Date,
        hora: Date
    }]
    
})

const temperaturaSchema = new mongoose.Schema({
    idUsuario: String,
    datos: [{
        temperatura: Number,
        fechaHora: Date
    }]
})

const alarmasSchema = new mongoose.Schema({
    idUsuario: String,
    horaDormir: Number,
    horaDespertar: Number,
})

const satisfaccionSchema = new mongoose.Schema({
    idUsuario: String,
    calf: Number,
    fecha: Date,
})

const sonidoSchema = new mongoose.Schema({
    idUsuario: String,
    data: [{
        decibeles: Number,
        fechaHora: Date
    }]
    
})

const Usuario = mongoose.model('Usuario', userSchema);
module.exports = Usuario;

const Movimiento = mongoose.model('Movimiento', movimientoSchema);
module.exports = Movimiento;

const Temperatura = mongoose.model('Temperatura', temperaturaSchema);
module.exports = Temperatura;

const Alarmas = mongoose.model('Alarmas', alarmasSchema);
module.exports = Alarmas;

const Satisfaccion = mongoose.model('Satisfaccion', satisfaccionSchema);
module.exports = Satisfaccion;

const Sonido = mongoose.model('Sonido', sonidoSchema);
module.exports = Sonido;

//APIS

//Obtener usuario
app.get("/api/usuario/", async (req, res) => {
    let usuarioData = req.body;
    try{
        const usuario = await Usuario.find(usuarioData)
        if (_.isEmpty(usuario)) {
            res.send(false)
        }else{
            res.json(usuario)
        }
    }
    catch(error){
        console.log(error);
    }
})

//Insertar Usuario
app.post("/api/usuario/", async (req, res) => {
    let usuarioInsert = Usuario(req.body);
    try{
        let usuarioExist = await Usuario.find(req.body)
        if (_.isEmpty(usuarioExist)) {
            usuarioInsert.save().then((data) => res.send(data._id))
        } else {
            res.send("Cannot insert, User already exists")
        }
    }catch(error){
        console.log(error);
    }
})

//Borrar usuario
app.delete("/api/usuario", async (req, res) => {
    let usuarioID = req.body;
    try{
        const usuarioDeleted = await Usuario.deleteOne(usuarioID);
        res.send(true);
    }catch(error){
        console.log(error);
    }
})

//Actualizar Usuario
app.put("/api/usuario/:id", async (req,res) => {
    let usuarioID = req.params.id;
    let usuarioData = req.body;
    console.log(usuarioID)
    try{
        const usuarioUpdated = await Usuario.findByIdAndUpdate(usuarioID,usuarioData);
        console.log(usuarioUpdated)
        res.send(usuarioUpdated._id)
        
    }catch(error){
        console.log(error);
    } 
})
