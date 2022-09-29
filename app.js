const { response, request } = require('express');
const express = require('express');

const app = express();
/* 
    https://academlo.notion.site/About-me-express-cb30f07946734b618931cd7c71438174
    me => 
    metas => 
    bussines => 
*/

app.get('/me', (req, res) => {
    res.status(200).send({
        me: {
            name: 'Victor Manuel Hernandez Vargas',
            age: 21,
            country: 'Mexico'
        },
    })
})
app.post('/metas', (req, res) => {
    res.status(200).send({
        hobbies: [
            'Leer',
            'Lenguajes de programacion',
            'Practicar ingles'
        ],
    })
})
app.patch('/metas', (req, res) => {
    res.status(200).send({
        goals: [
            'Aprender ingles',
            'Aprender backend'
        ]
    })
})
app.put('/business', (req, res) => {
    res.status(200).send({
        business: [
            'Microsoft',
            'Google',
            'Apple',
        ]
    })
})


app.listen(8000, () => {
    console.log('Server Started')
})

/* HTPP */
// ? HTTP
/*
    ?.verbos
     > GET
     > PUT
     > PATCH
     > DELETE
*/
/*
    ?.status
     > 100
     > 200
     > 300 // Servidor configuracion
     > 400 // Errores que comete el usuario
     > 500 // Son redirecciones
*/
// ?.headers