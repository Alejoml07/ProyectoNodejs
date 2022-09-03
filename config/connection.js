const mongoose = require('mongoose')
//gestionar la conexion a bases en mongo

const url = `mongodb+srv://Alejo07:Alejo1000655232@adsi2364482.ujjbxg0.mongodb.net/?retryWrites=true&w=majority`
const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}
mongoose.connect(url,connectionParams)
    .then(()=> {
        console.log('Conectado a la base de datos');
    })
    .catch((err)=>{
        console.error(`Error en la conexion a la base de datos ${err}`)
    })

module.exports=mongoose