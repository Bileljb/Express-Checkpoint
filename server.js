
const express = require('express')
const { use } = require('express/lib/application')
const app = express()

const middleware = (req, res, next) => {


    const d = new Date();
    let day = d.getDay()
  
    let hour = d.getHours();


        if  (( day==0 || day==6) || (hour<=9 || hour >= 17))  { return res.sendFile(__dirname+'/public/Closed.html')}
    

    next()
}
app.use(middleware);
// app.get('/', (req,res)=>{
//     res.sendFile(__dirname +'/public/')

// })
// app.get('/style.css', (req,res)=>{
//     res.sendFile(__dirname +'/public/style.css')

// })
 app.use(express.static('public'))


const port = 3000

app.listen(port, () => console.log(`port is running on ${port}`))

