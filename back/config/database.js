const mongoose=require('mongoose');


const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URI,
       { useNewUrlparser: true,
       useUnifiedTopology:true
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    })
}

module.exports=connectDatabase;