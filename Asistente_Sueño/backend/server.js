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
        nivel: String,
        fechaHora: Date
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
    horaDormir: Date,
    horaDespertar: Date,
})

const satisfaccionSchema = new mongoose.Schema({
    idUsuario: String,
    calf: Number,
    fecha: Date,
})

const sonidoSchema = new mongoose.Schema({
    idUsuario: String,
    data: [{
        sonido: String,
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
            res.send(false)
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

//Obtener Movimiento
app.get("/api/movimiento/:id", async (req, res) => {
    let usuarioID = req.params.id;
    try{
        const movimientoData = await Movimiento.findById(usuarioID)
        if (_.isEmpty(movimientoData)) {
            res.send(false)
        }else{
            res.json(movimientoData)
        }
    }
    catch(error){
        console.log(error);
    }
})

//Insertar Movimieto
app.put("/api/movimiento/:id", async (req, res) => {
    const usuarioID = req.params.id;
    const movimientoData = req.body;
    movimientoData.fechaHora = new Date(movimientoData.fechaHora)
    try{
        let usuarioExist = await Movimiento.findById(usuarioID);
        if (_.isEmpty(usuarioExist)) {
            let movimientoInsertar = Movimiento({"_id": usuarioID,"data": [movimientoData]})
            movimientoInsertar.save().then((data) => res.send(data._id))
        } else {
            let movimientoUpdated = await Movimiento.findByIdAndUpdate(usuarioID,
                {$push: { 
                    "data": movimientoData
                }});
            res.send(movimientoUpdated._id)
        }
    }catch(error){
        console.log(error);
    }
})

//Obtener Temperatura
app.get("/api/temperatura/:id", async (req, res) => {
    let usuarioID = req.params.id;
    try{
        const temperaturaData = await Temperatura.findById(usuarioID)
        if (_.isEmpty(temperaturaData)) {
            res.send(false)
        }else{
            res.json(temperaturaData)
        }
    }
    catch(error){
        console.log(error);
    }
})

//Insertar Temperatura
app.put("/api/temperatura/:id", async (req, res) => {
    const usuarioID = req.params.id;
    const temperaturaData = req.body;
    temperaturaData.fechaHora = new Date(temperaturaData.fechaHora)
    try{
        let usuarioExist = await Temperatura.findById(usuarioID);
        if (_.isEmpty(usuarioExist)) {
            let temperaturaInsertar = Temperatura({"_id": usuarioID,"data": [temperaturaData]})
            temperaturaInsertar.save().then((data) => res.send(data._id))
        } else {
            let temperaturaUpdated = await Temperatura.findByIdAndUpdate(usuarioID,
                {$push: { 
                    "data": temperaturaData
                }});
            res.send(temperaturaUpdated._id)
        }
    }catch(error){
        console.log(error);
    }
})

//Obtener Sonido
app.get("/api/sonido/:id", async (req, res) => {
    let usuarioID = req.params.id;
    try{
        const sonidoData = await Sonido.findById(usuarioID)
        if (_.isEmpty(sonidoData)) {
            res.send(false)
        }else{
            res.json(sonidoData)
        }
    }
    catch(error){
        console.log(error);
    }
})

//Insertar Sonido
app.put("/api/sonido/:id", async (req, res) => {
    const usuarioID = req.params.id;
    const sonidoData = req.body;
    sonidoData.fechaHora = new Date(temperaturaData.fechaHora)
    try{
        let usuarioExist = await Sonido.findById(usuarioID);
        if (_.isEmpty(usuarioExist)) {
            let sonidoInsertar = Sonido({"_id": usuarioID,"data": [sonidoData]})
            sonidoInsertar.save().then((data) => res.send(data._id))
        } else {
            let sonidoUpdated = await Temperatura.findByIdAndUpdate(usuarioID,
                {$push: { 
                    "data": sonidoData
                }});
            res.send(sonidoUpdated._id)
        }
    }catch(error){
        console.log(error);
    }
})
