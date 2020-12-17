import express, { Request, Response } from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use("*",(req: Request, res: Response) =>{
    res.send("<h1>Welcome!</h1>");
});

app.listen(PORT,() => console.log(`Server is running on ${PORT}`));