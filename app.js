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


// TIENE QUE IR AL ULTIMO PARA CUANDO SE EJECUTE, TODAS LAS RUTAS YA ESTEN CONFIGURADAS
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})