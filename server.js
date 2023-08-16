import app from './app'  
const porta = 8080;


app.listen (porta, () => {
    console.log (`Escutando na porta http://localhost:${porta}`)
})