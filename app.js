const express = require ("express")
const app = express()


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/hom.html')
})
 
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/contact.html')
})

app.get('/servces',(req,res)=>{
    res.sendFile(__dirname + '/servces.html')
})








app.listen(3000,(req,res)=>{
    console.log('serveur is running')
})