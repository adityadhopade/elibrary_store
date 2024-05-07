import app from './src/app'
console.log("Server Running");

const startServer = () =>{
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
  })
}

startServer();
