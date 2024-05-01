const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log('listening to you')
}
);
//End Point 1
app.get('/string',(req,res)=>{
    res.send('Get books today!')
})  
//End Point 2
app.get('/object', (req,res)=> {
    res.send({id:1,
            message: "Read books on shelf one"
    } )
})
//End Point 3 
app.get('/array', (req,res)=>{
    res.send(['shelf one', 'shelf two', 'shelf three'])
})

