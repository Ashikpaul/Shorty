const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
 
app.use(express.static('./public'));

// app.get('/:id',(req,res)=>{
//   //To create redirect URL
// });

// app.post('/url',(req,res)=>{
//   //To create a short URL
// });

// app.get('/url/:id',(req,res)=>{
//   //get a short URL by Id
// });

const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log('Listening at '+ port);
}); 