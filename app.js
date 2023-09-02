import express from 'express';
import morgan from 'morgan';


const app = express();
app.use(morgan('dev'));
app.use(express.json());


//Peticion Get
app.get('/users', (req, res) => {

    res.json({
        user: {
            "id": "6197f7d7c1b2af0dccecdca2",
            "name": "Juan",
            "lastname": "Perez",
        }
    })
}
)

//Peticion POST

app.post('/users', (req, res) => {

    const { body } = req;

   res.status(201).json({ info: body });

})

//Creamos el server
app.listen(2000, () => {
    console.log('Server Corriendo')
})