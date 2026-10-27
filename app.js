import express from 'express'

const app = express()
const port = 3000


// RESPONSE
// El servidor responde cuando un cliente consulta un producto

/*
    Aplicación práctica: un cliente está buscando en la pagina de supermaxi
    un gel limpiador, al encontrarlo el usuario da click y el servidor devuelve
    la informacion de ese producto en formato JSON
*/

app.get('/producto/limpiador-facial-en-gel-hydro-boost-neutrogena-150-ml', (req, res) => {

    res.json({
        producto: 'Limpiador Facial En Gel Hydro Boost NEUTROGENA 150 Ml',
        codigo: '7891010257149',
        marca: 'NEUTROGENA',
        precio: 16.05,
        localesDisponibles: [
            'Supermaxi - BOSQUE',
            'Supermaxi - VIA LA COSTA',
            'Supermaxi - SAN GABRIEL'
        ],
        descripcion: 'Jabón facial con fórmula gentil y efectiva que elimina suciedad, grasa y maquillaje sin dejar sensación de resequedad, clínicamente probado para aumentar los niveles de hidratación',
        url: 'https://www.supermaxi.com/producto/limpiador-facial-en-gel-hydro-boost-neutrogena-150-ml/'
    })

})

// REQUEST BODY
// Permite recibir los datos de un nuevo producto que se registra en Supermaxi.
/*
    Aplicación práctica: cuando Supermaxi registra un producto nuevo, 
    el servidor recibe sus datos en el cuerpo de la petición
*/

app.use(express.json())

app.post('/productos', (req, res) => {

    res.json({
        mensaje: 'Producto recibido correctamente',
        producto: req.body.producto,
        codigo: req.body.codigo,
        marca: req.body.marca,
        precio: req.body.precio
    })
})

// Request Params
// Permite buscar un producto utilizando su código en la URL.
/*
    Aplicación práctica: cuando un cliente consulta un producto en Supermaxi,
    el servidor busca el producto utilizando su código de identificación.
*/

app.get('/productos/:codigo', (req, res) => {

    const { codigo } = req.params;

    const productosBDD = [
        {
            codigo: '7891010257149',
            producto: 'Limpiador Facial En Gel Hydro Boost NEUTROGENA 150 Ml',
            marca: 'NEUTROGENA',
            precio: 16.05
        },
        {
            codigo: '7500435012345',
            producto: 'Crema Hidratante NIVEA Soft 200 Ml',
            marca: 'NIVEA',
            precio: 8.50
        }
    ];

    const response = productosBDD.find(producto => producto.codigo === codigo);

    response
        ? res.status(200).json(response)
        : res.status(404).json('Producto no encontrado');

});


// Request Query Params
// Permite buscar un producto mediante un término enviado en la URL.
/*
    Aplicación práctica: cuando un cliente busca un producto en Supermaxi,
    el servidor utiliza el término ingresado para encontrarlo en el catálogo.
*/
app.get('/buscar-productos', (req, res) => {

    const { data } = req.query;

    const productosBDD = {
        'limpiador': 'Limpiador Facial En Gel Hydro Boost NEUTROGENA 150 Ml',
        'crema': 'Crema Hidratante NIVEA Soft 200 Ml',
        'protector': 'Protector Solar NIVEA FPS 50'
    };

    const response = productosBDD[data];

    const status = response ? 200 : 404;

    res.status(status).json(response || 'Producto no encontrado');

});

// TIENE QUE IR AL ULTIMO PARA CUANDO SE EJECUTE, TODAS LAS RUTAS YA ESTEN CONFIGURADAS
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})