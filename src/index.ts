import express = require('express');
const app = express();
const PORT = 8080;

app.use("*",(req: any, res: { send: (arg0: string) => void; }) =>{
    res.send("<h1>Welcome!</h1>");
});

app.listen(PORT,() => console.log(`Server is running on ${PORT}`));