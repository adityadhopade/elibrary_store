import express from "express";
const app=express()

// Routes
app.get('/', (request, response, next)=>{
  response.json({message: "Hello from elib API"})
})
export default app;
