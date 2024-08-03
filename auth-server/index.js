const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(cors()); 
const PORT = 8000;

app.post('/auth', (req, res)=> {    
    return res.status(200).send();
    const streamkey = req.body.key;
    if (streamkey === "supersecret") {
      return;
    }
    res.status(400).send();
  
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})